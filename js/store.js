/* ============================================================
   NEVA "store" — demo data layer built on localStorage.
   Stands in for a real backend so the customer site and the
   owner admin panel can share live data in this prototype.
   Keys:
     neva_overrides   { [bizId]: { services, description, hours, tags } }
     neva_reservations [ {id,bizId,bizName,customerName,phone,serviceName,price,date,time,status,createdAt} ]
     neva_session      "b1" (logged-in owner's business id)
   ============================================================ */

const NEVA_DB = {
  _read(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  },
  _write(key, val) { localStorage.setItem(key, JSON.stringify(val)); },

  getOverrides() { return this._read("neva_overrides", {}); },
  saveOverride(bizId, patch) {
    const all = this.getOverrides();
    all[bizId] = { ...(all[bizId] || {}), ...patch };
    this._write("neva_overrides", all);
  },

  /* merged business = base data + any owner edits */
  getBusiness(bizId) {
    const base = getBusiness(bizId);
    if (!base) return null;
    const ov = this.getOverrides()[bizId] || {};
    return {
      ...base,
      services: ov.services || base.services,
      menu: ov.menu || base.menu || [],
      menuLink: ov.menuLink ?? base.menuLink ?? "",
      description: ov.description ?? base.description ?? "",
      hours: ov.hours ?? base.hours ?? "Bazar ertəsi – Şənbə, 10:00–20:00",
      tags: ov.tags || base.tags,
    };
  },

  saveServices(bizId, services) { this.saveOverride(bizId, { services }); },
  saveMenu(bizId, menu) { this.saveOverride(bizId, { menu }); },
  saveMenuLink(bizId, menuLink) { this.saveOverride(bizId, { menuLink }); },
  saveProfile(bizId, { description, hours, tags }) { this.saveOverride(bizId, { description, hours, tags }); },

  getReservations(bizId) {
    const all = this._read("neva_reservations", []);
    return all.filter(r => r.bizId === bizId).sort((a, b) => (a.date + a.time < b.date + b.time ? 1 : -1));
  },
  addReservation(res) {
    const all = this._read("neva_reservations", []);
    const record = { id: "r_" + Date.now() + "_" + Math.floor(Math.random() * 999), status: "pending", createdAt: new Date().toISOString(), ...res };
    all.push(record);
    this._write("neva_reservations", all);
    return record;
  },
  updateReservationStatus(id, status) {
    const all = this._read("neva_reservations", []);
    const rec = all.find(r => r.id === id);
    if (rec) rec.status = status;
    this._write("neva_reservations", all);
  },

  /* ---- demo seed so the admin panel isn't empty on first visit ---- */
  seedIfEmpty() {
    if (this._read("neva_seeded", false)) return;

    /* one ready-made demo customer so "Hesabım" isn't empty on first try */
    const demoCustomer = { id: "c_demo1", name: "Nərmin Səfərova", email: "musteri@neva.az", phone: "+994 55 987 65 43", password: "1234" };
    this._write("neva_customers", [demoCustomer]);

    const seed = [
      { bizId: "b1", bizName: "Lumen Beauty Studio", customerName: "Günay Əliyeva", phone: "+994 55 123 45 67", serviceName: "Saç boyama", price: 90, date: nextDate(1), time: "14:00", status: "confirmed", customerId: null },
      { bizId: "b1", bizName: "Lumen Beauty Studio", customerName: "Röya Cəfərova", phone: "+994 50 234 56 78", serviceName: "Manikür (gel-lak)", price: 28, date: nextDate(2), time: "11:00", status: "pending", customerId: null },
      { bizId: "b1", bizName: "Lumen Beauty Studio", customerName: demoCustomer.name, phone: demoCustomer.phone, serviceName: "Kirpik lamination", price: 32, date: nextDate(0), time: "17:00", status: "pending", customerId: demoCustomer.id },
      { bizId: "c2", bizName: "Meridian Brew Bar", customerName: demoCustomer.name, phone: demoCustomer.phone, serviceName: "Masa (2 nəfər)", price: 0, date: nextDate(3), time: "18:30", status: "confirmed", customerId: demoCustomer.id },
      { bizId: "r1", bizName: "Şəki Sarayı", customerName: "Elşən Vəliyev", phone: "+994 51 111 22 33", serviceName: "Masa rezervasiyası (4 nəfər)", price: 0, date: nextDate(0), time: "20:00", status: "confirmed", customerId: null },
      { bizId: "r1", bizName: "Şəki Sarayı", customerName: "Turan Bağırova", phone: "+994 55 222 33 44", serviceName: "Xüsusi kabinə (6 nəfər)", price: 20, date: nextDate(2), time: "19:00", status: "pending", customerId: null },
      { bizId: "r1", bizName: "Şəki Sarayı", customerName: demoCustomer.name, phone: demoCustomer.phone, serviceName: "Masa rezervasiyası (2 nəfər)", price: 0, date: nextDate(1), time: "13:00", status: "pending", customerId: demoCustomer.id },
      { bizId: "c1", bizName: "Nar Coffee House", customerName: "Orxan Sadıqov", phone: "+994 70 333 44 55", serviceName: "Sakit iş zonası", price: 0, date: nextDate(0), time: "10:00", status: "confirmed", customerId: null },
      { bizId: "c1", bizName: "Nar Coffee House", customerName: "Aygün Rəhimova", phone: "+994 50 444 55 66", serviceName: "Masa (2 nəfər)", price: 0, date: nextDate(1), time: "16:00", status: "pending", customerId: null },
    ];
    seed.forEach(s => this.addReservation(s));

    /* demo owner accounts, one per seeded business, so the login page
       has real credentials to test with instead of a bare dropdown */
    const demoAccounts = BUSINESSES.map(b => ({ bizId: b.id, email: `${b.id}@neva.az`, phone: "+994 50 000 00 00", password: "demo1234" }));
    this._write("neva_owner_accounts", demoAccounts);

    this._write("neva_seeded", true);
  },

  /* ================================================================
     BUSINESS OWNER ACCOUNTS (demo only — no real backend)
     neva_owner_accounts   [ {bizId,email,phone,password} ]
     neva_owner_businesses [ <business objects created via registration> ]
     neva_session           "b1" (logged-in owner's business id)
     ================================================================ */
  getOwnerAccounts() { return this._read("neva_owner_accounts", []); },

  /* merge any owner-registered businesses into the shared BUSINESSES
     list (from data.js) so they show up everywhere on the site —
     the services map/list, category counts, search, etc. — exactly
     like the pre-seeded demo businesses. Safe to call more than once. */
  hydrateBusinesses() {
    const registered = this._read("neva_owner_businesses", []);
    registered.forEach(biz => {
      if (!BUSINESSES.some(b => b.id === biz.id)) BUSINESSES.push(biz);
    });
    /* category counts should reflect what's actually listed, not a
       stale marketing number — avoids "42 tərəfdaş" cards that lead
       to a page with only 3 real results */
    if (typeof CATEGORIES !== "undefined") {
      CATEGORIES.forEach(c => { c.count = BUSINESSES.filter(b => b.cat === c.id).length; });
    }
  },

  registerOwner({ businessName, cat, area, email, phone, password }) {
    const accounts = this.getOwnerAccounts();
    if (accounts.some(a => a.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: "Bu e-poçt ilə artıq bir biznes hesabı var." };
    }
    const DEFAULT_IMG = {
      salon: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800",
      restaurant: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
      cafe: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    };
    const bizId = "biz_" + Date.now();
    const jitter = () => (Math.random() - 0.5) * 0.05;
    const biz = {
      id: bizId, cat, name: businessName, area,
      lat: CITY_CENTER[0] + jitter(), lng: CITY_CENTER[1] + jitter(),
      rating: 5.0, reviews: 0, price: "₼₼", tags: [],
      img: DEFAULT_IMG[cat] || DEFAULT_IMG.salon,
      services: [], menu: (typeof hasMenu === "function" && hasMenu(cat)) ? [] : undefined,
      description: "", hours: "",
    };
    BUSINESSES.push(biz);
    const all = this._read("neva_owner_businesses", []);
    all.push(biz);
    this._write("neva_owner_businesses", all);

    accounts.push({ bizId, email, phone, password });
    this._write("neva_owner_accounts", accounts);

    if (typeof CATEGORIES !== "undefined") {
      CATEGORIES.forEach(c => { c.count = BUSINESSES.filter(b => b.cat === c.id).length; });
    }

    localStorage.setItem("neva_session", bizId);
    return { ok: true, bizId };
  },

  ownerLogin(email, password) {
    const found = this.getOwnerAccounts().find(a => a.email.toLowerCase() === email.toLowerCase() && a.password === password);
    if (!found) return { ok: false };
    localStorage.setItem("neva_session", found.bizId);
    return { ok: true, bizId: found.bizId };
  },

  /* ================================================================
     CUSTOMER ACCOUNTS (demo only — no real backend / no encryption)
     neva_customers        [ {id,name,email,phone,password} ]
     neva_customer_session "c_172..." (logged-in customer id)
     ================================================================ */
  getCustomers() { return this._read("neva_customers", []); },

  registerCustomer({ name, email, phone, password }) {
    const all = this.getCustomers();
    const exists = all.some(c => c.email.toLowerCase() === email.toLowerCase());
    if (exists) return { ok: false, error: "Bu e-poçt ilə artıq hesab var." };
    const customer = { id: "c_" + Date.now(), name, email, phone, password };
    all.push(customer);
    this._write("neva_customers", all);
    localStorage.setItem("neva_customer_session", customer.id);
    return { ok: true, customer };
  },

  customerLogin(email, password) {
    const all = this.getCustomers();
    const found = all.find(c => c.email.toLowerCase() === email.toLowerCase() && c.password === password);
    if (!found) return { ok: false };
    localStorage.setItem("neva_customer_session", found.id);
    return { ok: true, customer: found };
  },

  logoutCustomer() { localStorage.removeItem("neva_customer_session"); },

  getCurrentCustomer() {
    const id = localStorage.getItem("neva_customer_session");
    if (!id) return null;
    return this.getCustomers().find(c => c.id === id) || null;
  },

  saveCustomerProfile(id, patch) {
    const all = this.getCustomers();
    const c = all.find(x => x.id === id);
    if (!c) return;
    Object.assign(c, patch);
    this._write("neva_customers", all);
  },

  /* only reservations tied to this exact logged-in account are ever
     returned — booking as a guest (not logged in) does not attach to
     any account, so it can't leak into someone else's "Rezervlərim" */
  getReservationsByCustomer(customerId) {
    const all = this._read("neva_reservations", []);
    return all.filter(r => r.customerId === customerId)
      .sort((a, b) => (a.date + a.time < b.date + b.time ? 1 : -1));
  },
};

function nextDate(daysAhead) {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split("T")[0];
}

NEVA_DB.seedIfEmpty();
NEVA_DB.hydrateBusinesses();
