/* Shop settings. This file is rewritten by the admin site. */

const ARTIST = { name: "✦ Elli - ORidush ✦", tagline: "Hi! I’m Ellie, and on this website you can buy stuff I’ve created, as well as order a commission or a custom design for stuff! \n\nThis site is still under development, so if you have any questions, write to me on Tumblr! elli-oridush-art ~" };

const LINKS = [
  { name: "Telegram", icon: "telegram", text: "@ellikruze", url: "https://t.me/ellikruze" },
  { name: "Email", icon: "email", text: "Email", url: "mrsoridush@gmail.com" },
  { name: "Tumblr", icon: "Tumblr", text: "elli-oridush-art", url: "https://www.tumblr.com/blog/elli-oridush-art" }
];

const PRODUCTS = [
  {
    id: "k1",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Konrad Curze"],
    price: 35,
    img: "img/konrad-mvezljp7.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic"
  },
  {
    id: "k2",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Rogal Dorn"],
    price: 35,
    img: "img/rogal-mvezdol2.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic",
    isNew: true
  },
  {
    id: "s1",
    name: "STICKER PACK",
    type: "Stickers",
    fandom: ["Warhammer"],
    character: ["Corvus Corax", "Konrad Curze"],
    price: 15,
    img: "img/stick1-mvezlxa1.jpg",
    desc: "Sticker pack A5, sugar lamination"
  }
];

const CUSTOM = {
  open: true,
  status: "Custom orders are open",
  closedStatus: "Custom orders are closed for now",
  types: [
    { id: "c-key", name: "Acrylic keychains", from: 450, minQty: 5, img: "img/sanguinius-mvf63phz.jpg" },
    { id: "c-stk", name: "Stickers", from: 150, minQty: 10, img: "img/stick1-mvf63y28.jpg" },
    { id: "c-other", name: "Something else", from: null, minQty: 1, img: "" }
  ],
  how: ["Message me with your idea, quantity and references.", "I reply with the final price and the timeline.", "You confirm and pay the prepayment, then I start production.", "I ship the batch and send you the tracking number."]
};

const COMMISSIONS = {
  open: true,
  status: "Commissions are open",
  closedStatus: "Commissions are closed for now",
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
      expanded: false,
      blocks: [
        {
          type: "ol",
          items: ["Fill your cart in the shop.", "Choose the delivery country.", "Fill in the recipient details and copy the order template.", "Send the template to me on <a data-contact href=\"#\">Telegram<\/a>.", "I'll reply, confirm availability and the final total, and send payment details."]
        },
        { type: "p", text: "The site doesn't send anything automatically: an order is placed only by messaging me." }
      ]
    },
    {
      title: "Payment",
      expanded: false,
      blocks: [
        { type: "p", text: "Payment INFO" }
      ]
    },
    {
      title: "Shipping and delivery times",
      expanded: false,
      blocks: [
        { type: "p", text: "EEEEEE" },
        {
          type: "table",
          header: true,
          rows: [
            ["Destination", "Time", "Shipping"],
            ["Russia", "5–14 days", "150 $"],
            ["Other countries", "14–45 days", "500 $"]
          ]
        },
        { type: "p", text: "Delivery cost and times are approximate and depend on the postal service. I'll send the tracking number right after shipping." }
      ]
    },
    {
      title: "If something goes wrong",
      expanded: false,
      blocks: [
        { type: "p", text: "TTTT" }
      ]
    },
    {
      title: "Custom merch",
      expanded: false,
      blocks: [
        { type: "p", text: "DFGDFGDG" }
      ]
    },
    {
      title: "Digital commissions",
      expanded: false,
      blocks: [
        { type: "p", text: "VBFFDG" }
      ]
    },
    {
      title: "Copyright",
      expanded: true,
      blocks: [
        { type: "p", text: "All drawings are mine. Fandom works are unofficial fan art. Reselling the merch or using my art without an agreement is not allowed." }
      ]
    }
  ]
};
