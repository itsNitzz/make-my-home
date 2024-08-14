import { ProductItemType } from "./model/products";

export const ALL_PRODUCTS_ITEMS = [
  {
    id: "p1",
    image: "/src/assets/lamp.jpg",
    title: "Avante-Grade Lamp",
    price: "157.34",
    company: "Modenza",
    catagory: "lights",
    description:
      "Illuminate your home with elegance and charm using our exquisite Decorative Lamp. Crafted with meticulous attention to detail, this stunning piece features a beautifully designed base adorned with intricate patterns, topped with a gracefully curved, soft-glow shade. Whether placed on a bedside table, a living room console, or a cozy reading nook, this lamp adds a touch of sophistication and warmth to any space. Its versatile design complements various interior styles, making it a perfect addition to your home décor. Bring light and beauty into your living space with our Decorative Lamp, where functionality meets artistry.",
  },
  {
    id: "p2",
    image: "/src/assets/coffee-table.jpg",
    title: "Coffee Table",
    price: "299",
    company: "Luxora",
    catagory: "tables",
    description:
      "Enhance your living space with this beautifully crafted wooden coffee table. Made from high-quality solid oak, this table features a sleek and timeless design that complements any decor style. The rich, warm finish highlights the natural wood grain, adding a touch of rustic charm to your home.",
  },
  {
    id: "p3",
    image: "/src/assets/comfy-bed.jpg",
    title: "Comfy bed",
    price: "1099",
    company: "Comfora",
    catagory: "beds",
    description:
      "Introducing comfy Bed where comfort meets elegance. This exquisite bed is designed to transform your bedroom into a sanctuary of relaxation and style. With its plush, pillow-top mattress, you'll experience unparalleled softness and support every night. The bed's sleek, modern frame, crafted from high-quality materials, ensures durability and adds a touch of sophistication to any decor. Available in multiple sizes, the Luxura Dream™ Bed is perfect for any room, promising restful sleep and a chic centerpiece for your space. Upgrade your sleep experience and indulge in the ultimate blend of luxury and comfort with the Bed.",
  },
  {
    id: "p4",
    image: "/src/assets/decorative-lights.jpg",
    title: "Decorative lights",
    price: "445",
    company: "Artifex",
    catagory: "lights",
    description:
      "Transform your home with the enchanting glow of the Ceiling Hanging Decorative Lights. Illuminate your space with style and sophistication, creating an inviting and luxurious atmosphere that captivates and comforts.",
  },
  {
    id: "p5",
    image: "/src/assets/decorative-candle.jpg",
    title: "Aroma Candles",
    price: "89",
    company: "Artifex",
    catagory: "lights",
    description:
      "Elevate your ambiance with our Scented Candles – the perfect blend of luxury, relaxation, and style. Crafted from premium soy wax, these candles burn cleanly and evenly, filling your space with enchanting fragrances that captivate the senses",
  },
  {
    id: "p6",
    image: "/src/assets/book-selves.jpg",
    title: "Book self",
    price: "1150",
    company: "Modenza",
    catagory: "furnitures",
    description:
      "Elevate your living space with the Bookshelf – a perfect blend of form and function. This beautifully crafted bookshelf offers ample storage while adding a touch of sophistication to any room.",
  },
  {
    id: "p7",
    image: "/src/assets/dining-table.jpg",
    title: "Dining Table with chairs",
    price: "1799",
    company: "Luxora",
    catagory: "tables",
    description:
      "Elevate your dining experience with the Dining Table, a perfect blend of sophistication and functionality. Crafted with precision from premium solid wood, this dining table showcases the beauty of natural grain patterns, bringing warmth and elegance to any dining space.",
  },
  {
    id: "p8",
    image: "/src/assets/glass-table.jpg",
    title: "Glass table",
    price: "371",
    company: "Modenza",
    catagory: "tables",
    description:
      "Elevate your dining experience with the Dining Table, a perfect blend of sophistication and functionality. Crafted with precision from premium solid wood, this dining table showcases the beauty of natural grain patterns, bringing warmth and elegance to any dining space.",
  },
  {
    id: "p9",
    image: "/src/assets/king-bed.jpg",
    title: "King Bed",
    price: "1999",
    company: "Luxora",
    catagory: "beds",
    description:
      "Elevate your dining experience with the Dining Table, a perfect blend of sophistication and functionality. Crafted with precision from premium solid wood, this dining table showcases the beauty of natural grain patterns, bringing warmth and elegance to any dining space.",
  },
  {
    id: "p10",
    image: "/src/assets/lounge-chair.jpg",
    title: "Lounge Chair",
    price: "699",
    company: "Comfora",
    catagory: "chairs",
    description:
      "Elevate your dining experience with the Dining Table, a perfect blend of sophistication and functionality. Crafted with precision from premium solid wood, this dining table showcases the beauty of natural grain patterns, bringing warmth and elegance to any dining space.",
  },
  {
    id: "p11",
    image: "/src/assets/sofa.jpg",
    title: "Living Room Sofa",
    price: "1500",
    company: "Comfora",
    catagory: "sofas",
    description:
      "Elevate your dining experience with the Dining Table, a perfect blend of sophistication and functionality. Crafted with precision from premium solid wood, this dining table showcases the beauty of natural grain patterns, bringing warmth and elegance to any dining space.",
  },
  {
    id: "p12",
    image: "/src/assets/study-chair.jpg",
    title: "Recliner Chair",
    price: "799",
    company: "Luxora",
    catagory: "chairs",
    description:
      "Elevate your dining experience with the Dining Table, a perfect blend of sophistication and functionality. Crafted with precision from premium solid wood, this dining table showcases the beauty of natural grain patterns, bringing warmth and elegance to any dining space.",
  },
  {
    id: "p13",
    image: "/src/assets/home-sofa.jpg",
    title: "Contemporary Sofa",
    price: "799",
    company: "Homestead",
    catagory: "sofas",
    description:
      "Elevate your dining experience with the Dining Table, a perfect blend of sophistication and functionality. Crafted with precision from premium solid wood, this dining table showcases the beauty of natural grain patterns, bringing warmth and elegance to any dining space.",
  },
];

export const FEATURED_PRODUCTS = featuredProducts();

function featuredProducts() {
  const products: ProductItemType[] = [];

  for (let i = 0; i < 3; i++) {
    let index = Math.floor(Math.random() * ALL_PRODUCTS_ITEMS.length);
    const item = { ...ALL_PRODUCTS_ITEMS[index] };

    const existingItem = products.some((product) => product.id === item.id);

    if (!existingItem) {
      products.push(item);
    } else {
      if (index === 0) index++;
      else if (index === ALL_PRODUCTS_ITEMS.length - 1) index--;
      else index++;

      products.push({ ...ALL_PRODUCTS_ITEMS[index] });
    }
  }

  return products;
}
