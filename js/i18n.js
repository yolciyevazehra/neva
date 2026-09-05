/* ============================================================
   NEVA — lightweight multi-language layer (AZ / RU / EN)
   Covers the shared UI chrome (nav, buttons, footer) and the
   main static copy on every page. Business listings, reviews
   and long-form story text stay in Azerbaijani (the platform's
   primary market) since translating live marketplace content
   is a backend job, not a front-end toggle.
   Usage:
     <span data-i18n="nav.home">Ana səhifə</span>
     <input data-i18n-placeholder="search.locationPh">
   Persisted in localStorage under "neva_lang". Default: az.
   ============================================================ */

const NEVA_I18N = {
  az: {
    "nav.home":"Ana səhifə","nav.services":"Xidmətlər","nav.about":"Haqqımızda","nav.faq":"FAQ","nav.contact":"Əlaqə",
    "nav.bizpanel":"Biznes Paneli","nav.login":"Daxil ol","nav.logout":"Çıxış et","nav.book":"Rezerv et",

    "search.category":"Kateqoriya","search.categoryAll":"Hamısı","search.location":"Ərazi",
    "search.locationPh":"Nəsimi, Yasamal...","search.date":"Tarix","search.button":"Axtar",

    "home.eyebrow":"Bakının rezervasiya platforması",
    "home.title.html":"Bir nöqtədən <em>hər şeyi</em> tap, kəşf et, rezerv et.",
    "home.lead":"Neva — gözəllik salonlarını, restoranları və kafeləri xəritədə tapıb, sənə ən yaxın olanında bir kliklə rezervasiya etməyin ən sadə yolu.",
    "home.cta1":"Xidmətlərə bax","home.cta2":"Neva necə işləyir?",
    "home.stat1":"Tərəfdaş biznes","home.stat2":"Rezervasiya","home.stat3":"Orta reytinq",

    "cats.eyebrow":"Kateqoriyalar","cats.title":"Nə axtarırsan?",
    "cats.desc":"Getdikcə daha çox sahə əlavə olunur — indi 3 kateqoriyada 140-dan çox tərəfdaşımız var.",
    "cats.partners":"tərəfdaş",

    "steps.eyebrow":"Necə işləyir","steps.title":"Dörd addımda rezervasiya",
    "steps.1.h":"Naviqasiya et","steps.1.p":"Xəritədə özünə ən yaxın yerləri tap.",
    "steps.2.h":"Kəşf et","steps.2.p":"Xidmətlərə, qiymətlərə və reytinqlərə bax.",
    "steps.3.h":"Gör","steps.3.p":"Şəkillər və rəylərlə əmin ol.",
    "steps.4.h":"Rezerv et","steps.4.p":"Tarix və saat seç, bir kliklə təsdiqlə.",

    "popular.eyebrow":"Populyar","popular.title":"Bu həftə çox axtarılanlar","popular.viewall":"Hamısına bax",
    "biz.view":"Bax","biz.book":"Rezerv et",

    "ctabiz.eyebrow":"Bizneslər üçün",
    "ctabiz.title":"Salonunuzu, restoranınızı və ya zalınızı Neva-ya əlavə edin",
    "ctabiz.desc":"Rezervasiyalarınızı tək platformadan idarə edin, yeni müştərilər qazanın.",
    "ctabiz.button":"Biznes Panelinə keç",

    "footer.tagline":"Naviqasiya. Kəşf. Görüş. Rezervasiya. — bir nöqtədə birləşən şəhər həyatı.",
    "footer.services":"Xidmətlər","footer.company":"Şirkət","footer.contact":"Əlaqə",
    "footer.rights":"© 2026 Neva. Bütün hüquqlar qorunur.","footer.short":"Naviqasiya · Kəşf · Görüş · Rezervasiya",
    "footer.beauty":"Gözəllik salonları","footer.restaurants":"Restoranlar","footer.cafes":"Kafelər",

    "services.eyebrow":"Xəritədə axtar","services.title":"Sənə ən yaxın xidməti tap",
    "services.desc":"Kateqoriya seç, xəritədəki nöqtələrə bax və uyğun olanı seçib birbaşa rezervasiya et.",
    "services.noresults":"Bu filtrə uyğun nəticə tapılmadı. Başqa kateqoriya seç.",

    "detail.reviews":"Müştəri rəyləri","detail.bookHeading":"Rezervasiya et","detail.date":"Tarix","detail.time":"Saat",
    "detail.name":"Ad, Soyad","detail.namePh":"Adınız","detail.phone":"Telefon","detail.confirm":"Rezervasiyanı təsdiqlə",
    "detail.summaryService":"Xidmət","detail.summaryTime":"Tarix / saat","detail.summaryTotal":"Ümumi",
    "detail.free":"Pulsuz","detail.back":"← Bütün xidmətlərə qayıt","detail.backhome":"Ana səhifəyə qayıt",
    "detail.fullMenu":"Tam menyuya bax",

    "about.eyebrow":"Bizim hekayəmiz","about.title":"Şəhərin gündəlik seçimlərini bir nöqtəyə yığdıq.",
    "about.statsEyebrow":"Rəqəmlərlə Neva","about.statsTitle":"Böyüməkdə davam edirik",
    "about.stat1":"Tərəfdaş biznes","about.stat2":"Aktiv kateqoriya","about.stat3":"Uğurlu rezervasiya","about.stat4":"Orta müştəri reytinqi",
    "about.teamEyebrow":"Komanda","about.teamTitle":"Neva-nı quranlar",
    "about.joinEyebrow":"Qoşul","about.joinTitle":"Neva ailəsinin bir hissəsi ol","about.joinButton":"Bizimlə əlaqə saxla",

    "contact.eyebrow":"Bizimlə əlaqə","contact.title":"Sənə necə kömək edə bilərik?",
    "contact.name":"Ad, Soyad","contact.email":"E-poçt","contact.topic":"Mövzu","contact.msg":"Mesaj","contact.send":"Mesajı göndər",
    "contact.officeH":"Ofis","contact.hoursH":"İş saatları","contact.phoneH":"Telefon","contact.emailH":"E-poçt",
    "contact.sent":"Mesajınız göndərildi — 24 saat ərzində cavab verəcəyik.",

    "faq.eyebrow":"Tez-tez verilən suallar","faq.title":"Sənə kömək edə bilərik",
    "faq.catAll":"Hamısı","faq.catBooking":"Rezervasiya","faq.catPayment":"Ödəniş","faq.catPartner":"Tərəfdaşlıq","faq.catAccount":"Hesab",
    "faq.ctaEyebrow":"Sualın qaldımı?","faq.ctaTitle":"Komandamız sənə kömək etməyə hazırdır","faq.ctaButton":"Bizimlə əlaqə saxla",

    "login.tabLogin":"Daxil ol","login.tabRegister":"Qeydiyyat","login.email":"E-poçt","login.pass":"Şifrə",
    "login.forgot":"Şifrəni unutdum?","login.name":"Ad, Soyad","login.phone":"Telefon",
    "login.bizName":"Biznesin adı","login.category":"Kateqoriya","login.area":"Rayon / ərazi",
    "login.registerBizBtn":"Hesab yarat və panelə keç","login.registerBtn":"Hesab yarat","login.back":"← Neva saytına qayıt",

    "account.subtitle":"Bu səhifə yalnız sənin hesabına aiddir — heç kim başqasının profilinə və rezervasiyalarına buradan baxa bilməz.",
    "account.profileH":"Profil məlumatları","account.save":"Yadda saxla",
    "account.filterAll":"Hamısı","account.filterPending":"Gözləyir","account.filterConfirmed":"Təsdiqlənib","account.filterCancelled":"Ləğv edilib",

    "admin.overview":"Ümumi baxış","admin.reservations":"Rezervasiyalar","admin.profile":"Profil","admin.logout":"↩ Çıxış et",
    "admin.viewSite":"Saytda gör ↗","admin.kpiPending":"Gözləyən sorğular","admin.kpiConfirmed":"Təsdiqlənmiş (bu həftə)",
    "admin.kpiTotal":"Ümumi rezervasiya","admin.kpiRevenue":"Təxmini gəlir (₼)","admin.recent":"Son rezervasiyalar",
  },

  ru: {
    "nav.home":"Главная","nav.services":"Услуги","nav.about":"О нас","nav.faq":"FAQ","nav.contact":"Контакты",
    "nav.bizpanel":"Кабинет бизнеса","nav.login":"Войти","nav.logout":"Выйти","nav.book":"Забронировать",

    "search.category":"Категория","search.categoryAll":"Все","search.location":"Район",
    "search.locationPh":"Насими, Ясамал...","search.date":"Дата","search.button":"Искать",

    "home.eyebrow":"Платформа бронирования в Баку",
    "home.title.html":"Найди, <em>открой</em> и забронируй всё в одном месте.",
    "home.lead":"Neva — самый простой способ найти салоны красоты, рестораны и кафе на карте и забронировать нужное в один клик.",
    "home.cta1":"Смотреть услуги","home.cta2":"Как работает Neva?",
    "home.stat1":"Партнёров","home.stat2":"Бронирований","home.stat3":"Средний рейтинг",

    "cats.eyebrow":"Категории","cats.title":"Что вы ищете?",
    "cats.desc":"Список постоянно растёт — сейчас у нас более 140 партнёров в 3 категориях.",
    "cats.partners":"партнёров",

    "steps.eyebrow":"Как это работает","steps.title":"Бронирование за четыре шага",
    "steps.1.h":"Найди","steps.1.p":"Найди ближайшие места на карте.",
    "steps.2.h":"Изучи","steps.2.p":"Посмотри услуги, цены и рейтинги.",
    "steps.3.h":"Оцени","steps.3.p":"Убедись по фото и отзывам.",
    "steps.4.h":"Забронируй","steps.4.p":"Выбери дату и время, подтверди в один клик.",

    "popular.eyebrow":"Популярное","popular.title":"Часто ищут на этой неделе","popular.viewall":"Смотреть всё",
    "biz.view":"Смотреть","biz.book":"Забронировать",

    "ctabiz.eyebrow":"Для бизнеса",
    "ctabiz.title":"Добавьте свой салон, ресторан или зал на Neva",
    "ctabiz.desc":"Управляйте бронированиями с одной платформы и находите новых клиентов.",
    "ctabiz.button":"Перейти в кабинет бизнеса",

    "footer.tagline":"Найди. Открой. Оцени. Забронируй. — городская жизнь в одной точке.",
    "footer.services":"Услуги","footer.company":"Компания","footer.contact":"Контакты",
    "footer.rights":"© 2026 Neva. Все права защищены.","footer.short":"Найди · Открой · Оцени · Забронируй",
    "footer.beauty":"Салоны красоты","footer.restaurants":"Рестораны","footer.cafes":"Кафе",

    "services.eyebrow":"Поиск на карте","services.title":"Найди услугу рядом с собой",
    "services.desc":"Выбери категорию, посмотри точки на карте и забронируй подходящий вариант напрямую.",
    "services.noresults":"По этому фильтру ничего не найдено. Попробуй другую категорию.",

    "detail.reviews":"Отзывы клиентов","detail.bookHeading":"Забронировать","detail.date":"Дата","detail.time":"Время",
    "detail.name":"Имя, Фамилия","detail.namePh":"Ваше имя","detail.phone":"Телефон","detail.confirm":"Подтвердить бронирование",
    "detail.summaryService":"Услуга","detail.summaryTime":"Дата / время","detail.summaryTotal":"Итого",
    "detail.free":"Бесплатно","detail.back":"← Ко всем услугам","detail.backhome":"Вернуться на главную",
    "detail.fullMenu":"Смотреть полное меню",

    "about.eyebrow":"Наша история","about.title":"Мы собрали городские повседневные выборы в одной точке.",
    "about.statsEyebrow":"Neva в цифрах","about.statsTitle":"Мы продолжаем расти",
    "about.stat1":"Партнёров","about.stat2":"Активные категории","about.stat3":"Успешных бронирований","about.stat4":"Средний рейтинг клиентов",
    "about.teamEyebrow":"Команда","about.teamTitle":"Кто создаёт Neva",
    "about.joinEyebrow":"Присоединяйся","about.joinTitle":"Стань частью семьи Neva","about.joinButton":"Связаться с нами",

    "contact.eyebrow":"Связаться с нами","contact.title":"Чем мы можем помочь?",
    "contact.name":"Имя, Фамилия","contact.email":"Эл. почта","contact.topic":"Тема","contact.msg":"Сообщение","contact.send":"Отправить сообщение",
    "contact.officeH":"Офис","contact.hoursH":"Часы работы","contact.phoneH":"Телефон","contact.emailH":"Эл. почта",
    "contact.sent":"Ваше сообщение отправлено — мы ответим в течение 24 часов.",

    "faq.eyebrow":"Часто задаваемые вопросы","faq.title":"Мы готовы помочь",
    "faq.catAll":"Все","faq.catBooking":"Бронирование","faq.catPayment":"Оплата","faq.catPartner":"Партнёрство","faq.catAccount":"Аккаунт",
    "faq.ctaEyebrow":"Остались вопросы?","faq.ctaTitle":"Наша команда готова помочь","faq.ctaButton":"Связаться с нами",

    "login.tabLogin":"Войти","login.tabRegister":"Регистрация","login.email":"Эл. почта","login.pass":"Пароль",
    "login.forgot":"Забыли пароль?","login.name":"Имя, Фамилия","login.phone":"Телефон",
    "login.bizName":"Название бизнеса","login.category":"Категория","login.area":"Район",
    "login.registerBizBtn":"Создать аккаунт и перейти в кабинет","login.registerBtn":"Создать аккаунт","login.back":"← Вернуться на сайт Neva",

    "account.subtitle":"Эта страница видна только вам — никто другой не может увидеть ваш профиль или бронирования.",
    "account.profileH":"Данные профиля","account.save":"Сохранить",
    "account.filterAll":"Все","account.filterPending":"Ожидает","account.filterConfirmed":"Подтверждено","account.filterCancelled":"Отменено",

    "admin.overview":"Обзор","admin.reservations":"Бронирования","admin.profile":"Профиль","admin.logout":"↩ Выйти",
    "admin.viewSite":"Смотреть на сайте ↗","admin.kpiPending":"Ожидающие заявки","admin.kpiConfirmed":"Подтверждено (за неделю)",
    "admin.kpiTotal":"Всего бронирований","admin.kpiRevenue":"Примерный доход (₼)","admin.recent":"Последние бронирования",
  },

  en: {
    "nav.home":"Home","nav.services":"Services","nav.about":"About","nav.faq":"FAQ","nav.contact":"Contact",
    "nav.bizpanel":"Business Panel","nav.login":"Log in","nav.logout":"Log out","nav.book":"Book now",

    "search.category":"Category","search.categoryAll":"All","search.location":"Area",
    "search.locationPh":"Nasimi, Yasamal...","search.date":"Date","search.button":"Search",

    "home.eyebrow":"Baku's booking platform",
    "home.title.html":"Find, <em>discover</em> and book everything from one place.",
    "home.lead":"Neva is the simplest way to find beauty salons, restaurants and cafés on the map and book the nearest one in a single click.",
    "home.cta1":"Browse services","home.cta2":"How does Neva work?",
    "home.stat1":"Partner businesses","home.stat2":"Bookings","home.stat3":"Average rating",

    "cats.eyebrow":"Categories","cats.title":"What are you looking for?",
    "cats.desc":"We keep adding new areas — right now we have over 140 partners across 3 categories.",
    "cats.partners":"partners",

    "steps.eyebrow":"How it works","steps.title":"Book in four steps",
    "steps.1.h":"Navigate","steps.1.p":"Find the places nearest to you on the map.",
    "steps.2.h":"Explore","steps.2.p":"Check services, prices and ratings.",
    "steps.3.h":"View","steps.3.p":"Get confident with photos and reviews.",
    "steps.4.h":"Book","steps.4.p":"Pick a date and time, confirm in one click.",

    "popular.eyebrow":"Trending","popular.title":"Most searched this week","popular.viewall":"View all",
    "biz.view":"View","biz.book":"Book now",

    "ctabiz.eyebrow":"For businesses",
    "ctabiz.title":"Add your salon, restaurant or gym to Neva",
    "ctabiz.desc":"Manage your bookings from one platform and reach new customers.",
    "ctabiz.button":"Go to Business Panel",

    "footer.tagline":"Navigate. Explore. View. Book. — city life brought to one point.",
    "footer.services":"Services","footer.company":"Company","footer.contact":"Contact",
    "footer.rights":"© 2026 Neva. All rights reserved.","footer.short":"Navigate · Explore · View · Book",
    "footer.beauty":"Beauty salons","footer.restaurants":"Restaurants","footer.cafes":"Cafés",

    "services.eyebrow":"Search on the map","services.title":"Find the nearest service to you",
    "services.desc":"Pick a category, check the points on the map, and book the right match directly.",
    "services.noresults":"No results match this filter. Try another category.",

    "detail.reviews":"Customer reviews","detail.bookHeading":"Make a booking","detail.date":"Date","detail.time":"Time",
    "detail.name":"Full name","detail.namePh":"Your name","detail.phone":"Phone","detail.confirm":"Confirm booking",
    "detail.summaryService":"Service","detail.summaryTime":"Date / time","detail.summaryTotal":"Total",
    "detail.free":"Free","detail.back":"← Back to all services","detail.backhome":"Back to homepage",
    "detail.fullMenu":"View full menu",

    "about.eyebrow":"Our story","about.title":"We brought the city's everyday choices into one place.",
    "about.statsEyebrow":"Neva in numbers","about.statsTitle":"We keep growing",
    "about.stat1":"Partner businesses","about.stat2":"Active categories","about.stat3":"Successful bookings","about.stat4":"Average customer rating",
    "about.teamEyebrow":"Team","about.teamTitle":"The people behind Neva",
    "about.joinEyebrow":"Join us","about.joinTitle":"Become part of the Neva family","about.joinButton":"Get in touch",

    "contact.eyebrow":"Get in touch","contact.title":"How can we help?",
    "contact.name":"Full name","contact.email":"Email","contact.topic":"Topic","contact.msg":"Message","contact.send":"Send message",
    "contact.officeH":"Office","contact.hoursH":"Working hours","contact.phoneH":"Phone","contact.emailH":"Email",
    "contact.sent":"Your message has been sent — we'll reply within 24 hours.",

    "faq.eyebrow":"Frequently asked questions","faq.title":"We're here to help",
    "faq.catAll":"All","faq.catBooking":"Booking","faq.catPayment":"Payment","faq.catPartner":"Partnership","faq.catAccount":"Account",
    "faq.ctaEyebrow":"Still have questions?","faq.ctaTitle":"Our team is ready to help","faq.ctaButton":"Get in touch",

    "login.tabLogin":"Log in","login.tabRegister":"Register","login.email":"Email","login.pass":"Password",
    "login.forgot":"Forgot password?","login.name":"Full name","login.phone":"Phone",
    "login.bizName":"Business name","login.category":"Category","login.area":"Neighbourhood / area",
    "login.registerBizBtn":"Create account & go to panel","login.registerBtn":"Create account","login.back":"← Back to Neva",

    "account.subtitle":"This page belongs only to your account — no one else can see your profile or bookings here.",
    "account.profileH":"Profile details","account.save":"Save changes",
    "account.filterAll":"All","account.filterPending":"Pending","account.filterConfirmed":"Confirmed","account.filterCancelled":"Cancelled",

    "admin.overview":"Overview","admin.reservations":"Bookings","admin.profile":"Profile","admin.logout":"↩ Log out",
    "admin.viewSite":"View on site ↗","admin.kpiPending":"Pending requests","admin.kpiConfirmed":"Confirmed (this week)",
    "admin.kpiTotal":"Total bookings","admin.kpiRevenue":"Estimated revenue (₼)","admin.recent":"Recent bookings",
  },
};

function getNevaLang() {
  try { return localStorage.getItem("neva_lang") || "az"; } catch (e) { return "az"; }
}
function t(key) {
  const lang = getNevaLang();
  const dict = NEVA_I18N[lang] || NEVA_I18N.az;
  return dict[key] ?? NEVA_I18N.az[key] ?? key;
}
function setNevaLang(lang) {
  if (!NEVA_I18N[lang]) return;
  try { localStorage.setItem("neva_lang", lang); } catch (e) {}
  applyNevaI18n();
}
function applyNevaI18n() {
  const lang = getNevaLang();
  document.documentElement.setAttribute("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
  });
  document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.dispatchEvent(new CustomEvent("neva-lang-changed", { detail: { lang } }));
}

/* paint the AZ / RU / EN pill into every .lang-switch container */
function paintLangSwitch() {
  document.querySelectorAll(".lang-switch").forEach(box => {
    if (box.dataset.painted) return;
    box.dataset.painted = "1";
    box.innerHTML = ["az", "ru", "en"].map(l =>
      `<button type="button" data-lang="${l}">${l.toUpperCase()}</button>`
    ).join("");
    box.querySelectorAll("button").forEach(btn => {
      btn.addEventListener("click", () => setNevaLang(btn.dataset.lang));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  paintLangSwitch();
  applyNevaI18n();
});
