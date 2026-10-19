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
  { id: "k1", name: "Mimi with a Bow Keychain", type: "Keychains", fandom: ["Warhammer"], character: ["Konrad Curze"], price: 350, img: "img/konrad-mvezljp7.jpg", desc: "Keychain, 8–5–3 cm, acrylic" },
  { id: "k2", name: "Lulu and Hearts Keychain", type: "Keychains", fandom: ["Warhammer"], character: ["Rogal Dorn"], price: 350, img: "img/rogal-mvezdol2.jpg", desc: "Acrylic with glitter inside, 6 cm.", isNew: true },
  { id: "s1", name: "Mimi Sticker Pack", type: "Stickers", fandom: ["Original"], character: ["Corvus Corax"], price: 220, img: "img/stick1-mvezlxa1.jpg", desc: "sticker" }
];

const CUSTOM = {
  open: true,
  status: "Custom orders are open",
  closedStatus: "Custom orders are closed for now",
  types: [
    { id: "c-key", name: "Acrylic keychains", from: 450, minQty: 5, img: "" },
    { id: "c-stk", name: "Vinyl stickers", from: 150, minQty: 10, img: "" },
    { id: "c-pin", name: "Enamel pins", from: 700, minQty: 20, img: "" },
    { id: "c-other", name: "Something else", from: null, minQty: 1, img: "" }
  ],
  how: [
    "Message me with your idea, quantity and references.",
    "I reply with a mockup, the final price and the timeline.",
    "You confirm and pay the prepayment, then I start production.",
    "I ship the batch and send you the tracking number."
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

const TERMS = {
  items: [
    {
      title: "How to place an order",
      expanded: true,
      blocks: [
        { type: "ol", items: [
          "Fill your cart in the shop.",
          "Choose the delivery country, the cost is calculated automatically.",
          "Fill in the recipient details and copy the order template.",
          "Send the template to me on <a data-contact href=\"#\">Telegram</a>.",
          "I'll reply, confirm availability and the final total, and send payment details."
        ] },
        { type: "p", text: "The site doesn't send anything automatically: an order is placed only by messaging me." }
      ]
    },
    {
      title: "Payment",
      expanded: false,
      blocks: [
        { type: "p", text: "Payment is by bank transfer after I confirm the order. The order is reserved for 3 days; if there is no payment by then, it is cancelled." }
      ]
    },
    {
      title: "Shipping and delivery times",
      expanded: false,
      blocks: [
        { type: "p", text: "I ship within 5 business days after payment. The shipping cost depends on the destination. The cart calculates it automatically, and I confirm the final amount in my reply." },
        { type: "table", header: true, rows: [
          ["Destination", "Time", "Shipping", "Free shipping"],
          ["Russia", "5–14 days", "150 $", "from 300 $"],
          ["Belarus, Kazakhstan", "10–25 days", "300 $", "none"],
          ["Other countries", "14–45 days", "500 $", "none"]
        ] },
        { type: "p", text: "Delivery times are approximate and depend on the postal service. I'll send the tracking number right after shipping." }
      ]
    },
    {
      title: "If something goes wrong",
      expanded: false,
      blocks: [
        { type: "p", text: "If an item arrives defective or isn't what you ordered, message me within 7 days and attach an unboxing photo. I'll replace the item or refund you. If a parcel is lost in transit, we'll sort it out together with the postal service." }
      ]
    },
    {
      title: "Custom merch",
      expanded: false,
      blocks: [
        { type: "p", text: "The minimum quantity and the price depend on the product. After your request I send a mockup and a quote. Production starts after a 50% prepayment, the rest is paid before shipping. The mockup includes up to 2 rounds of changes. Custom orders can't be refunded once production has started." }
      ]
    },
    {
      title: "Digital commissions",
      expanded: false,
      blocks: [
        { type: "p", text: "Payment is split: 50% before I start, the rest after the sketch is approved and before I send the final files. The price includes 2 rounds of small changes on the sketch. Commissions are for personal use unless we agree otherwise, commercial use costs extra. I may decline requests I'm not comfortable drawing, and I may show finished work in my portfolio." }
      ]
    },
    {
      title: "Copyright",
      expanded: false,
      blocks: [
        { type: "p", text: "All drawings are mine. Fandom works are unofficial fan art. Reselling the merch or using my art without an agreement is not allowed." }
      ]
    }
  ]
};
