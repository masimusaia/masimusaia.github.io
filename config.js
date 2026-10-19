/* Shop settings. This file is rewritten by the admin site. */

const ARTIST = { name: "Masimusaa", tagline: "Wiwiwi wiwiwi wiwiwi" };

const LINKS = [
  { name: "Telegram", icon: "telegram", text: "@ellikruze", url: "https://t.me/ellikruze" },
  { name: "Instagram", icon: "instagram", text: "@ellikruze", url: "https://instagram.com/ellikruze" },
  { name: "X / Twitter", icon: "x", text: "@ellikruze", url: "https://x.com/ellikruze" },
  { name: "Boosty", icon: "boosty", text: "ellikruze", url: "https://boosty.to/ellikruze" },
  { name: "Email", icon: "email", text: "ellikruze@example.com", url: "mailto:ellikruze@example.com" }
];

const PRODUCTS = [
  {
    id: "k1",
    name: "акуна",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Konrad Curze"],
    price: 30,
    img: "img/konrad-mvezljp7.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic"
  },
  {
    id: "k2",
    name: "матата",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Rogal Dorn"],
    price: 30,
    img: "img/rogal-mvezdol2.jpg",
    desc: "Acrylic with glitter inside, 6 cm.",
    isNew: true
  },
  {
    id: "s1",
    name: "значит",
    type: "Stickers",
    fandom: ["Warhammer"],
    character: ["Corvus Corax", "Konrad Curze"],
    price: 20,
    img: "img/stick1-mvezlxa1.jpg",
    desc: "sticker"
  },
  {
    id: "nmvf20z31",
    name: "жиз без забот",
    type: "Stickers",
    fandom: ["Warhammer"],
    character: ["Corvus Corax", "Rogal Dorn", "Konrad Curze"],
    price: 20,
    img: "img/stick3-mvf22myn.jpg",
    desc: "sticker"
  }
];

const CUSTOM = {
  open: true,
  status: "Custom orders are open",
  closedStatus: "Custom orders are closed for now",
  types: [
    { id: "c-key", name: "Acrylic keychains", from: 450, minQty: 5, img: "img/sanguinius-mvf1kjh6.jpg" },
    { id: "c-stk", name: "Stickers", from: 150, minQty: 10, img: "img/stick1-mvf1kxp2.jpg" },
    { id: "c-other", name: "Something else", from: null, minQty: 10, img: "" }
  ]
};

const COMMISSIONS = {
  types: [
    { id: "icon", name: "Icon", price: 80, img: "img/rogal-mvezq6v9.jpg" },
    { id: "half", name: "Half-body", price: 100, img: "img/stick2-mvezqo2q.jpg" },
    { id: "full", name: "Full body", price: 120, img: "img/konrad-mvezr9mw.jpg" },
    { id: "chib", name: "Chibi", price: 1200, img: "" }
  ],
  addons: [
    { name: "Simple background", price: 20, percent: false },
    { name: "Extra character", price: 100, percent: false },
    { name: "Rush", price: 50, percent: true }
  ],
  note: "Prices are for personal use. Commercial use is discussed separately."
};

const GALLERY = [
  { img: "img/corvus-mvezt6kz.jpg", alt: "head", ratio: 1 },
  { img: "img/stick3-mveztxdo.jpg", alt: "half-body", ratio: 1 },
  { img: "img/sanguinius-mvezukwo.jpg", alt: "", ratio: 0.6 },
  { img: "img/rogal-mvezuvfd.jpg", alt: "", ratio: 1 },
  { img: "img/stick2-mvezv14n.jpg", alt: "", ratio: 0.85 },
  { img: "img/stick1-mvezv74x.jpg", alt: "", ratio: 1 }
];

const SHOP = {
  currency: "$",
  contact: { name: "Telegram", text: "@ellikruze", url: "https://t.me/ellikruze" },
  zones: [
    { id: "ru", name: "Russia", days: "5–14 days", base: 150, freeFrom: 300 },
    { id: "cis", name: "Belarus, Kazakhstan", days: "10–25 days", base: 300, freeFrom: null },
    { id: "world", name: "Other countries", days: "14–45 days", base: 500, freeFrom: null }
  ]
};
