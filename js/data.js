/* Mock data — in production this comes from Neva's API */

const CATEGORIES = [
  { id:"salon",      label:"Gözəllik salonları", icon:"scissors", count: 42 },
  { id:"restaurant", label:"Restoranlar",         icon:"fork",     count: 65 },
  { id:"cafe",       label:"Kafelər",             icon:"cup",      count: 38 },
];

const CITY_CENTER = [40.3947, 49.8672]; // Baku

const BUSINESSES = [
  { id:"b1", cat:"salon", name:"Lumen Beauty Studio", area:"Nəsimi", lat:40.3777, lng:49.8461,
    rating:4.9, reviews:212, price:"₼₼", tags:["Saç","Manikür","Kirpik"],
    img:"https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800",
    services:[
      {name:"Qadın saç kəsimi", dur:"45 dəq", price:35, staff:"Günel Abbasova"},
      {name:"Saç boyama", dur:"120 dəq", price:90, staff:"Günel Abbasova"},
      {name:"Manikür (gel-lak)", dur:"60 dəq", price:28, staff:"Aysel Nəbiyeva"},
      {name:"Kirpik lamination", dur:"50 dəq", price:32, staff:"Aysel Nəbiyeva"},
    ]},
  { id:"b2", cat:"salon", name:"Atelier Noir Barbershop", area:"Yasamal", lat:40.3868, lng:49.8322,
    rating:4.8, reviews:154, price:"₼₼", tags:["Saqqal","Kişi kəsimi"],
    img:"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800",
    services:[
      {name:"Kişi saç kəsimi", dur:"30 dəq", price:20, staff:"Tural Hüseynov"},
      {name:"Saqqal formalaşdırma", dur:"25 dəq", price:15, staff:"Tural Hüseynov"},
      {name:"Uşaq kəsimi", dur:"25 dəq", price:15, staff:"Kamran İsmayılov"},
    ]},
  { id:"b3", cat:"salon", name:"Velvet Nail Bar", area:"28 May", lat:40.3766, lng:49.8461,
    rating:4.7, reviews:98, price:"₼", tags:["Manikür","Pedikür"],
    img:"https://images.unsplash.com/photo-1610992015732-2449b76344bc?q=80&w=800",
    services:[
      {name:"Klassik manikür", dur:"40 dəq", price:18, staff:"Nərgiz Quliyeva"},
      {name:"Pedikür", dur:"50 dəq", price:25, staff:"Nərgiz Quliyeva"},
      {name:"Dırnaq dizaynı", dur:"20 dəq", price:10, staff:"Səma Rzayeva"},
    ]},
  { id:"r1", cat:"restaurant", name:"Şəki Sarayı", area:"İçərişəhər", lat:40.3667, lng:49.8352,
    rating:4.9, reviews:340, price:"₼₼₼", tags:["Milli mətbəx","Aşpazın seçimi"],
    img:"https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
    services:[
      {name:"Masa rezervasiyası (2 nəfər)", dur:"—", price:0},
      {name:"Masa rezervasiyası (4 nəfər)", dur:"—", price:0},
      {name:"Xüsusi kabinə (6 nəfər)", dur:"—", price:0},
    ],
    menu:[
      {category:"Başlanğıclar", name:"Düşbərə", price:8, desc:"Ənənəvi Azərbaycan xəngəli, qatıqla.", available:true},
      {category:"Əsas yeməklər", name:"Səbzi plov", price:14, desc:"Quzu ətli, kişmiş və şabalıdla.", available:true},
      {category:"Əsas yeməklər", name:"Lülə kabab", price:12, desc:"Odda bişmiş, təzə göyərti ilə.", available:true},
      {category:"Salatlar", name:"Çoban salatı", price:6, desc:"Pomidor, xiyar, soğan, zeytun yağı.", available:true},
      {category:"Şirniyyat", name:"Şəkərbura", price:5, desc:"Fındıqlı, klassik Novruz şirniyyatı.", available:true},
      {category:"İçkilər", name:"Nar şərbəti", price:4, desc:"Təzə sıxılmış nar suyu.", available:true},
    ]},
  { id:"r2", cat:"restaurant", name:"Terrazza Italiana", area:"Nərimanov", lat:40.4085, lng:49.8632,
    rating:4.6, reviews:187, price:"₼₼", tags:["İtalyan","Pizza","Pasta"],
    img:"https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800",
    services:[
      {name:"Masa rezervasiyası (2 nəfər)", dur:"—", price:0},
      {name:"Terras masası", dur:"—", price:0},
    ],
    menu:[
      {category:"Başlanğıclar", name:"Bruschetta", price:7, desc:"Qızardılmış çörək, pomidor, təzə bazilik.", available:true},
      {category:"Əsas yeməklər", name:"Margherita pizza", price:13, desc:"Mozzarella, pomidor sousu, bazilik.", available:true},
      {category:"Əsas yeməklər", name:"Fettuccine Alfredo", price:15, desc:"Krem sous, parmesan.", available:false},
      {category:"Salatlar", name:"Caprese salatı", price:9, desc:"Mozzarella, pomidor, bazilik yağı.", available:true},
      {category:"Şirniyyat", name:"Tiramisu", price:8, desc:"Ev şəraitində hazırlanmış, mascarpone ilə.", available:true},
      {category:"İçkilər", name:"İtalyan limonatası", price:5, desc:"Təzə limon, nanə.", available:true},
    ]},
  { id:"c1", cat:"cafe", name:"Nar Coffee House", area:"Fəvvarələr", lat:40.3708, lng:49.8354,
    rating:4.8, reviews:276, price:"₼", tags:["Specialty coffee","Working-friendly"],
    img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    services:[
      {name:"Masa (2 nəfər)", dur:"—", price:0},
      {name:"Sakit iş zonası", dur:"—", price:0},
    ],
    menu:[
      {category:"Qəhvə", name:"Espresso", price:3, desc:"Qalın, qatı qəhvə.", available:true},
      {category:"Qəhvə", name:"Flat White", price:5, desc:"Espresso əsaslı, incə köpüklü süd.", available:true},
      {category:"Çay", name:"Yaşıl çay", price:3, desc:"Təbii yarpaq çayı.", available:true},
      {category:"Sərinləşdirici", name:"Cold Brew", price:6, desc:"12 saat soyuq dəm, buzla.", available:true},
      {category:"Şirniyyat", name:"Cheesecake dilimi", price:7, desc:"Klassik Nyu-York cheesecake.", available:true},
      {category:"Yüngül qəlyanaltılar", name:"Avokado tost", price:9, desc:"Çovdar çörəyi, avokado, çuğundur cücərtisi.", available:true},
    ]},
  { id:"c2", cat:"cafe", name:"Meridian Brew Bar", area:"Nizami", lat:40.3775, lng:49.8547,
    rating:4.5, reviews:120, price:"₼", tags:["Brunch","Desert"],
    img:"https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800",
    services:[{name:"Masa (2 nəfər)", dur:"—", price:0}],
    menu:[
      {category:"Qəhvə", name:"Americano", price:3, desc:"Espresso, isti su.", available:true},
      {category:"Qəhvə", name:"Cappuccino", price:4, desc:"Bərabər hissə espresso, süd, köpük.", available:true},
      {category:"Şirniyyat", name:"Croissant", price:4, desc:"Təzə bişmiş, kərəli.", available:true},
      {category:"Yüngül qəlyanaltılar", name:"Brunch boardu", price:16, desc:"Yumurta, pendir, mürəbbə, çörək.", available:true},
    ]},
];

/* give every service (and, for cafés/restaurants, every menu item) a
   stable id, e.g. "b1_s0" / "r1_m0", so the admin panel can edit/delete
   individual rows */
BUSINESSES.forEach(biz => {
  biz.services.forEach((s, i) => { if (!s.id) s.id = `${biz.id}_s${i}`; });
  if (biz.menu) biz.menu.forEach((m, i) => { if (!m.id) m.id = `${biz.id}_m${i}`; if (m.available === undefined) m.available = true; });
});

/* menu categories offered per business type — only cafés & restaurants
   get a "Menyu" tab in the admin panel and a menu section on the
   business page */
const MENU_CATEGORIES = {
  restaurant: ["Başlanğıclar", "Əsas yeməklər", "Salatlar", "Şirniyyat", "İçkilər"],
  cafe:       ["Qəhvə", "Çay", "Sərinləşdirici", "Şirniyyat", "Yüngül qəlyanaltılar"],
};
function hasMenu(cat){ return !!MENU_CATEGORIES[cat]; }
function getMenuCategories(cat){ return MENU_CATEGORIES[cat] || []; }

/* per-category vocabulary — lets the same admin panel & booking UI
   speak "masa" for restaurants/cafes and "xidmət" for salons */
const CAT_VOCAB = {
  salon:      { itemLabel:"Xidmət",        itemLabelPlural:"Xidmətlər",        durLabel:"Müddət",  durPlaceholder:"məs. 45 dəq",  panelTitle:"Xidmətlər & Qiymətlər", bookLabel:"Xidmət seç",  selectPlaceholder:"Xidmət seçin", durIcon:"clock" },
  restaurant: { itemLabel:"Masa seçimi",   itemLabelPlural:"Masalar",          durLabel:"Tutum",   durPlaceholder:"məs. 4 nəfər", panelTitle:"Masalar & Qiymətlər",  bookLabel:"Masa seç",    selectPlaceholder:"Masa seçin",   durIcon:"users" },
  cafe:       { itemLabel:"Masa / zona",   itemLabelPlural:"Masalar",          durLabel:"Tutum",   durPlaceholder:"məs. 2 nəfər", panelTitle:"Masalar & Zonalar",    bookLabel:"Masa seç",    selectPlaceholder:"Masa seçin",   durIcon:"users" },
};
function getCatVocab(cat){ return CAT_VOCAB[cat] || CAT_VOCAB.salon; }

function getBusiness(id){ return BUSINESSES.find(b=>b.id===id); }
