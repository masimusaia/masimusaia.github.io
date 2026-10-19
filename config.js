/* ============================================================
   ✨ SHOP SETTINGS ✨
   This is the only file you need to edit to change
   products, prices and shipping. Everything else follows automatically.
   ============================================================ */

const SHOP = {
  currency: "₽",

  // Where the buyer sends the order template
  contact: {
    name: "Telegram",
    text: "@your_nick",
    url: "https://t.me/your_nick",
  },


  /* Shipping. The cost is calculated as:
       base + (order weight in grams / 100, rounded up) × per100g
     freeFrom — items total from which shipping is free (null = never free) */
  zones: [
    { id: "ru",    name: "Russia",               days: "5–14 days",  base: 150, per100g: 30,  freeFrom: 3000 },
    { id: "cis",   name: "Belarus, Kazakhstan",  days: "10–25 days", base: 300, per100g: 60,  freeFrom: null },
    { id: "world", name: "Other countries",      days: "14–45 days", base: 500, per100g: 100, freeFrom: null },
  ],
};

/* ============================================================
   PRODUCTS
   id        — unique, no spaces (k1, k2, s1…)
   type      — "Keychains" or "Stickers" (becomes a filter)
   fandom    — fandom (for your own art use "Original")
   character — character
   price     — price in rubles
   weight    — weight in grams (used for shipping)
   img       — image path, e.g. "img/mimi-keychain.jpg" (if empty, a colored placeholder with a letter is shown)
   desc      — short description (can be "")
   soldOut   — true if out of stock
   isNew     — true to show the item in the "new" block at the top of the shop (add it by hand, remove it when it's no longer new)
   ============================================================ */
const PRODUCTS = [
  { id: "k1", name: "Mimi with a Bow Keychain",   type: "Keychains", fandom: "Original", character: "Mimi",        price: 350, weight: 20, img: "", desc: "Acrylic, double-sided print, 6 cm." },
  { id: "k2", name: "Lulu and Hearts Keychain",   type: "Keychains", fandom: "Original", character: "Lulu",        price: 350, weight: 20, img: "", desc: "Acrylic with glitter inside, 6 cm.", isNew: true },
  { id: "s1", name: "Mimi Sticker Pack",          type: "Stickers",  fandom: "Original", character: "Mimi",        price: 220, weight: 15, img: "", desc: "6 vinyl stickers." },
  { id: "s2", name: "Lulu Sticker",               type: "Stickers",  fandom: "Original", character: "Lulu",        price: 120, weight: 5,  img: "", desc: "Vinyl, waterproof, 7 cm." },
  { id: "k3", name: "Character 1 Keychain",       type: "Keychains", fandom: "Fandom A", character: "Character 1", price: 400, weight: 25, img: "", desc: "Acrylic, 7 cm." },
  { id: "s3", name: "Character 1 Sticker",        type: "Stickers",  fandom: "Fandom A", character: "Character 1", price: 130, weight: 5,  img: "", desc: "" },
  { id: "s4", name: "Character 2 Sticker",        type: "Stickers",  fandom: "Fandom A", character: "Character 2", price: 130, weight: 5,  img: "", desc: "" },
  { id: "k4", name: "Character 3 Keychain",       type: "Keychains", fandom: "Fandom B", character: "Character 3", price: 400, weight: 25, img: "", desc: "Acrylic, 7 cm.", soldOut: true },
  { id: "s5", name: "Fandom B Sticker Pack",      type: "Stickers",  fandom: "Fandom B", character: "Character 3", price: 250, weight: 15, img: "", desc: "5 vinyl stickers.", isNew: true },
];

/* ============================================================
   HOME BLOCK: your name, short intro and links
   ============================================================ */
const ARTIST = {
  name: "Your Name",
  tagline: "Illustrator and merch maker. Original characters, fan art, acrylic keychains and stickers. Open for custom merch and digital commissions.",
};

/* name — label (shown on hover and read by screen readers)
   text — handle (shown on hover)
   url  — where it leads
   icon — telegram | instagram | x | boosty | email (any other value shows the first letter of the name) */
const LINKS = [
  { name: "Telegram",    icon: "telegram",  text: "@your_nick",        url: "https://t.me/your_nick" },
  { name: "Instagram",   icon: "instagram", text: "@your_nick",        url: "https://instagram.com/your_nick" },
  { name: "X / Twitter", icon: "x",         text: "@your_nick",        url: "https://x.com/your_nick" },
  { name: "Boosty",      icon: "boosty",    text: "your_nick",         url: "https://boosty.to/your_nick" },
  { name: "Email",       icon: "email",     text: "hello@example.com", url: "mailto:hello@example.com" },
];

/* ============================================================
   CUSTOM MERCH (made to order)
   open     — false closes the request form
   status   — text in the status pill
   from     — starting price per piece (null = "ask")
   minQty   — minimum quantity
   ============================================================ */
const CUSTOM = {
  open: true,
  status: "Taking custom orders",
  closedStatus: "Custom orders are closed for now",
  types: [
    { id: "c-key",   name: "Acrylic keychains", from: 450,  minQty: 5 },
    { id: "c-stk",   name: "Vinyl stickers",    from: 150,  minQty: 10 },
    { id: "c-pin",   name: "Enamel pins",       from: 700,  minQty: 20 },
    { id: "c-other", name: "Something else",    from: null, minQty: 1 },
  ],
};

/* ============================================================
   DIGITAL COMMISSIONS (price list, no request form)
   types  — name, price; img is optional (path to an example picture)
   addons — optional extras with a fixed price
   note   — small line under the extras ("" to hide)
   ============================================================ */
const COMMISSIONS = {
  types: [
    { id: "icon", name: "Icon",      price: 1500, img: "" },
    { id: "half", name: "Half-body", price: 2500, img: "" },
    { id: "full", name: "Full body", price: 3500, img: "" },
    { id: "chib", name: "Chibi",     price: 1200, img: "" },
  ],
  addons: [
    { name: "Simple background",    price: 500 },
    { name: "Extra character",      price: 1000 },
    { name: "Rush (within 5 days)", price: 1000 },
  ],
  note: "Prices are for personal use. Commercial use is discussed separately.",
};

/* ============================================================
   GALLERY (commissions page, Pinterest-style tiles)
   img   — path to the picture, e.g. "img/art-01.jpg". Pictures keep their own proportions.
   alt   — short description for screen readers (can be "")
   ratio — width / height of the placeholder shown while img is empty (0.75 = portrait, 1.4 = landscape)
   ============================================================ */
const GALLERY = [
  { img: "", alt: "", ratio: 0.75 },
  { img: "", alt: "", ratio: 1.1 },
  { img: "", alt: "", ratio: 0.6 },
  { img: "", alt: "", ratio: 1 },
  { img: "", alt: "", ratio: 0.85 },
  { img: "", alt: "", ratio: 1.4 },
  { img: "", alt: "", ratio: 0.7 },
  { img: "", alt: "", ratio: 0.9 },
  { img: "", alt: "", ratio: 0.65 },
  { img: "", alt: "", ratio: 1.2 },
];
