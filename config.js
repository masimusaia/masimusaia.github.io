/* Shop settings. This file is rewritten by the admin site. */

const ARTIST = { name: "Masimusia", tagline: "Wiwiwi wiwiwi wiwiwi" };

const LINKS = [
  { name: "Telegram", icon: "telegram", text: "@ellikruze", url: "https://t.me/ellikruze" },
  { name: "Instagram", icon: "instagram", text: "@ellikruze", url: "https://instagram.com/ellikruze" },
  { name: "X / Twitter", icon: "x", text: "@ellikruze", url: "https://x.com/ellikruze" },
  { name: "Boosty", icon: "boosty", text: "ellikruze", url: "https://boosty.to/ellikruze" },
  { name: "Email", icon: "email", text: "ellikruze@example.com", url: "mailto:ellikruze@example.com" }
];

const PRODUCTS = [
  { id: "k1", name: "Mimi with a Bow Keychain", type: "Keychains", fandom: "Warhammer", character: "Konrad Curze", price: 350, weight: 0, img: "img/konrad-mvezljp7.jpg", desc: "Keychain, 8–5–3 cm, acrylic" },
  { id: "k2", name: "Lulu and Hearts Keychain", type: "Keychains", fandom: "Warhammer", character: "Rogal Dorn", price: 350, weight: 20, img: "img/rogal-mvezdol2.jpg", desc: "Acrylic with glitter inside, 6 cm.", isNew: true },
  { id: "s1", name: "Mimi Sticker Pack", type: "Stickers", fandom: "Original", character: "Corvus Corax", price: 220, weight: 15, img: "img/stick1-mvezlxa1.jpg", desc: "sticker" }
];

const CUSTOM = {
  open: true,
  status: "Custom orders are open",
  closedStatus: "Custom orders are closed for now",
  types: [
    { id: "c-key", name: "Acrylic keychains", from: 450, minQty: 5 },
    { id: "c-stk", name: "Vinyl stickers", from: 150, minQty: 10 },
    { id: "c-pin", name: "Enamel pins", from: 700, minQty: 20 },
    { id: "c-other", name: "Something else", from: null, minQty: 1 }
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
    { name: "Simple background", price: 20 },
    { name: "Extra character", price: 100 },
    { name: "Rush", price: 50 }
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
    { id: "ru", name: "Russia", days: "5–14 days", base: 150, per100g: 30, freeFrom: 300 },
    { id: "cis", name: "Belarus, Kazakhstan", days: "10–25 days", base: 300, per100g: 60, freeFrom: null },
    { id: "world", name: "Other countries", days: "14–45 days", base: 500, per100g: 100, freeFrom: null }
  ]
};
