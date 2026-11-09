/* Shop settings. This file is rewritten by the admin site. */

const ARTIST = { name: "✦ Elli - ORidush ✦", tagline: "Hi! I’m Elli, and on this website you can buy stuff I’ve created, as well as order a commission or a custom design for stuff! \n\nThis site is still under development, so if you have any questions, write to me on Tumblr! elli-oridush-art ~" };

const LINKS = [
  { name: "Telegram", icon: "telegram", text: "@ellikruze", url: "https://t.me/ellikruze" },
  { name: "Tumblr", icon: "Tumblr", text: "elli-oridush-art", url: "https://www.tumblr.com/blog/elli-oridush-art" },
  { name: "DeviantArt", icon: "Tumblr", text: "DeviantArt", url: "https://www.deviantart.com/oridush" }
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
    desc: "Keychain, 8–5–3 cm, acrylic.\n\nThis keychain has NSFW content! BONUS: a sticker so you can cover up the NSFW part."
  },
  {
    id: "k2",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Rogal Dorn"],
    price: 35,
    img: "img/rogal-mvezdol2.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic. This keychain has NSFW content! BONUS: a sticker so you can cover up the NSFW part.",
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
  },
  {
    id: "nmw8kweld",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Magnus the Red"],
    price: 35,
    img: "img/img-4673-mw8ohsq6.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic. This keychain has NSFW content! BONUS: a sticker so you can cover up the NSFW part."
  },
  {
    id: "nmw8kxm9j",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Sanguinius"],
    price: 35,
    img: "img/img-4678-mw8ohlsd.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic. This keychain has NSFW content! BONUS: a sticker so you can cover up the NSFW part."
  },
  {
    id: "nmw8l0z3q",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Leman Russ"],
    price: 35,
    img: "img/img-4672-mw8oh813.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic. This keychain has NSFW content! BONUS: a sticker so you can cover up the NSFW part."
  },
  {
    id: "nmw8l21ud",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Sanguinius"],
    price: 35,
    img: "img/img-4683-mw8oh0ye.jpg",
    desc: "Keychain, 8cm, acrylic."
  },
  {
    id: "nmw8l79i6",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Fulgrim"],
    price: 35,
    img: "img/img-4668-mw8ogv0z.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic. This keychain has NSFW content! BONUS: a sticker so you can cover up the NSFW part."
  },
  {
    id: "nmw8l9saf",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Tyberos the Red Wake"],
    price: 0,
    img: "img/img-4682-mw8og6iv.jpg",
    desc: "EXCLUSIVE! \nKeychain, 11cm, acrylic.\nFree with a purchase of $155 or more! Can be purchased separately for $75."
  },
  {
    id: "nmw8ldp5q",
    name: "STICKER PACK",
    type: "Stickers",
    fandom: ["Warhammer"],
    character: ["Rogal Dorn", "Sanguinius"],
    price: 15,
    img: "img/img-4676-mw8ofy2h.jpg",
    desc: "Sticker pack A5, sugar lamination"
  },
  {
    id: "nmw8legnk",
    name: "STICKER PACK",
    type: "Stickers",
    fandom: ["Warhammer"],
    character: ["Leman Russ", "Magnus the Red"],
    price: 15,
    img: "img/img-4681-mw8ofpbn.jpg",
    desc: "Sticker pack A5, sugar lamination"
  },
  {
    id: "nmw8lhvez",
    name: "PILLOWCASE",
    type: "Pillowcase",
    fandom: ["Warhammer"],
    character: ["Fulgrim"],
    price: 55,
    img: "img/img-4677-mw8ofi65.jpg",
    desc: "Pillowcase, satin fabric, size 180x60, without a pillow"
  },
  {
    id: "nmw8ljjka",
    name: "PILLOWCASE",
    type: "Pillowcase",
    fandom: ["Warhammer"],
    character: ["Malcador the Sigillite"],
    price: 55,
    img: "img/img-4671-mw8ofbtv.jpg",
    desc: "Pillowcase, satin fabric, size 180x60, without a pillow"
  },
  {
    id: "nmw8lls5p",
    name: "TAPESTRY",
    type: "Tapestries",
    fandom: ["Warhammer"],
    character: ["Sanguinius", "Horus Lupercal"],
    price: 55,
    img: "img/img-4679-mw8oea9j.jpg",
    desc: "Tapestry, silk fabric, size 90x50"
  },
  {
    id: "nmw8ls2e2",
    name: "POSTCARD",
    type: "Postcards",
    fandom: ["Warhammer"],
    character: ["Konrad Curze"],
    price: 10,
    img: "img/img-4684-mw8oatop.jpg",
    desc: "A5 postcard on silver cardboard."
  },
  {
    id: "nmw8lubkb",
    name: "POSTCARD",
    type: "Postcards",
    fandom: ["Warhammer"],
    character: ["Corvus Corax"],
    price: 10,
    img: "img/img-4685-mw8oaos3.jpg",
    desc: "A5 postcard on silver cardboard."
  },
  {
    id: "nmw8lv9pc",
    name: "POSTCARD",
    type: "Postcards",
    fandom: ["Warhammer"],
    character: ["Rogal Dorn"],
    price: 10,
    img: "img/img-4670-mw8oe0ty.jpg",
    desc: "A5 postcard on gold cardboard."
  },
  {
    id: "nmw8lwdiq",
    name: "POSTCARD",
    type: "Postcards",
    fandom: ["Warhammer"],
    character: ["Sanguinius"],
    price: 10,
    img: "img/img-4669-mw8odsav.jpg",
    desc: "A5 postcard on gold cardboard."
  },
  {
    id: "nmw8lxgjm",
    name: "POSTCARD",
    type: "Postcards",
    fandom: ["Warhammer"],
    character: ["Leman Russ"],
    price: 10,
    img: "img/img-4675-mw8odkul.jpg",
    desc: "A5 postcard on gold cardboard."
  },
  {
    id: "nmw8lyzyh",
    name: "POSTCARD",
    type: "Postcards",
    fandom: ["Warhammer"],
    character: ["Magnus the Red"],
    price: 10,
    img: "img/img-4674-mw8oddkt.jpg",
    desc: "A5 postcard on gold cardboard."
  },
  {
    id: "nmw8nz017",
    name: "KEYCHAIN",
    type: "Keychains",
    fandom: ["Warhammer"],
    character: ["Corvus Corax"],
    price: 35,
    img: "img/img-4686-mw8oaeu5.jpg",
    desc: "Keychain, 8–5–3 cm, acrylic. This keychain has NSFW content! BONUS: a sticker so you can cover up the NSFW part."
  },
  {
    id: "nmw8o1fb3",
    name: "AN ACRYLIC STAND",
    type: "Stands",
    fandom: ["Warhammer"],
    character: ["Horus Lupercal", "Sanguinius"],
    price: 45,
    img: "img/img-4687-mw8o9g90.jpg",
    desc: "A 25 cm acrylic display stand on a rotating base."
  },
  {
    id: "nmw8o2qkn",
    name: "AN ACRYLIC STAND",
    type: "Stands",
    fandom: ["Warhammer"],
    character: ["Fulgrim", "Ferrus Manus"],
    price: 45,
    img: "img/img-4688-mw8o9p02.jpg",
    desc: "A 25 cm acrylic display stand on a rotating base."
  },
  {
    id: "nmw8o46dr",
    name: "AN ACRYLIC STAND",
    type: "Stands",
    fandom: ["Warhammer"],
    character: ["Sanguinius"],
    price: 85,
    img: "img/img-4363-mw8o9vkx.jpg",
    desc: "A stand made of four parts, height 45 cm; the Sanguinius figurine and the arch have holes for decorative chains, chains included! Exclusive — only 3 sets available."
  },
  {
    id: "nmw8o6c26",
    name: "AN ACRYLIC STAND",
    type: "Stands",
    fandom: ["Warhammer"],
    character: ["Magnus the Red"],
    price: 75,
    img: "img/img-4364-mw8oa67m.jpg",
    desc: "A set of horses on a rocking stand with riders and a dog. Pearl acrylic; on the reverse side, text from the opera “Tampl”; height: 35 cm including the stand; height of the dog: 7 cm."
  }
];

const CUSTOM = {
  open: true,
  status: "Custom orders are open",
  closedStatus: "Custom orders are closed for now",
  types: [
    { id: "c-key", name: "Acrylic keychains", from: 45, minQty: 1, img: "img/sanguinius-mvf63phz.jpg" },
    { id: "c-stk", name: "Stickers", from: 35, minQty: 1, img: "img/stick1-mvf63y28.jpg" },
    { id: "c-other", name: "Something else", from: null, minQty: 1, img: "" }
  ],
  how: ["Message me with your idea, quantity and references.", "I reply with the final price and the timeline.", "You confirm and pay the prepayment, then I start production.", "I ship the batch and send you the tracking number."]
};

const COMMISSIONS = {
  open: true,
  status: "Commissions are open",
  closedStatus: "Commissions are closed for now",
  types: [
    { id: "icon", name: "Icon", price: 27, img: "img/img-4692-mw8oox2q.jpg" },
    { id: "half", name: "Half-body", price: 37, img: "img/img-4694-mw8op2jp.jpg" },
    { id: "full", name: "Full body", price: 47, img: "img/img-4693-mw8op7b4.jpg" },
    { id: "chib", name: "Illustration", price: 69, img: "img/img-4691-mw8opc0r.jpg" }
  ],
  addons: [
    { name: "Simple background", price: 10, percent: false },
    { name: "Extra character", price: 20, percent: false },
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
  contact: { name: "Tumblr", text: "@elli-oridush-art", url: "https://www.tumblr.com/blog/elli-oridush-art" },
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
        { type: "p", text: "PayPal payment" }
      ]
    },
    {
      title: "Shipping and delivery times",
      expanded: false,
      blocks: [
        { type: "p", text: "Delivery timeframes" },
        {
          type: "table",
          header: true,
          rows: [
            ["Destination", "Time", "Shipping"],
            ["Russia", "5–14 days", "10 $"],
            ["Other countries", "14–21 days", "25 $"]
          ]
        },
        { type: "p", text: "Delivery cost and times are approximate and depend on the postal service. I'll send the tracking number right after shipping." }
      ]
    },
    {
      title: "If something goes wrong",
      expanded: false,
      blocks: [
        { type: "p", text: "If the package is lost during delivery, I refund the funds or resend it." }
      ]
    },
    {
      title: "Custom merch",
      expanded: false,
      blocks: [
        { type: "p", text: "Assistance with production and delivery is discussed separately; it is possible to produce large stands, tapestries on fabric, pillowcases, etc., featuring your characters." }
      ]
    },
    {
      title: "Digital commissions",
      expanded: false,
      blocks: [
        { type: "p", text: "Changes at the sketch stage are free; send files via stash on DeviantArt; deadline: 1–3 weeks." }
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
