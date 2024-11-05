import axios from "axios";
import https from "https";

const brands = [
  {
    seller_fk: 1,
    name: "Nike",
    description:
      "Leading global athletic footwear and apparel brand known for innovation and performance.",
    email: "nike@brand.com",
    phone_code: "+1",
    phone_number: "123-456-7890",
    country_id: 1,
  },
  {
    seller_fk: 2,
    name: "Adidas",
    description:
      "Global leader in the sporting goods industry, offering a wide range of athletic apparel, footwear, and accessories.",
    email: "adidas@brand.com",
    phone_code: "+1",
    phone_number: "123-456-7891",
    country_id: 1,
  },
  {
    seller_fk: 3,
    name: "Levi's",
    description:
      "Iconic denim brand known for producing high-quality jeans and apparel for over 150 years.",
    email: "levis@brand.com",
    phone_code: "+1",
    phone_number: "123-456-7892",
    country_id: 1,
  },
  {
    seller_fk: 4,
    name: "H&M",
    description:
      "Fast-fashion clothing brand offering stylish and affordable apparel and accessories.",
    email: "hm@brand.com",
    phone_code: "+1",
    phone_number: "123-456-7893",
    country_id: 1,
  },
  {
    seller_fk: 5,
    name: "Zara",
    description:
      "Trendy clothing brand offering chic and modern styles for women, men, and children.",
    email: "zara@brand.com",
    phone_code: "+1",
    phone_number: "123-456-7894",
    country_id: 1,
  },
  {
    seller_fk: 6,
    name: "Pantaloons",
    description:
      "One of India's leading fashion retailers offering trendy clothing and accessories for all age groups.",
    email: "pantaloons@brand.com",
    phone_code: "+91",
    phone_number: "987-654-3210",
    country_id: 1,
  },
  {
    seller_fk: 7,
    name: "FabIndia",
    description:
      "Indian brand offering ethnic and contemporary apparel, home decor, and accessories.",
    email: "fabindia@brand.com",
    phone_code: "+91",
    phone_number: "987-654-3211",
    country_id: 1,
  },
  {
    seller_fk: 8,
    name: "Max Fashion",
    description:
      "Popular retail brand offering affordable and fashionable clothing for men, women, and children.",
    email: "maxfashion@brand.com",
    phone_code: "+91",
    phone_number: "987-654-3212",
    country_id: 1,
  },
  {
    seller_fk: 9,
    name: "Shoppers Stop",
    description:
      "Leading department store chain in India, offering apparel, accessories, and lifestyle products.",
    email: "shoppersstop@brand.com",
    phone_code: "+91",
    phone_number: "987-654-3213",
    country_id: 1,
  },
  {
    seller_fk: 10,
    name: "Reliance Trends",
    description:
      "Leading fashion retail chain in India offering trendy and affordable clothing for all age groups.",
    email: "reliancetrends@brand.com",
    phone_code: "+91",
    phone_number: "987-654-3214",
    country_id: 1,
  },
];

async function createBrands() {
  const dct = {
    0: "Zero",
    1: "Onyx",
    2: "Twilight",
    3: "Spectre",
    4: "Que Miras",
    5: "Spyder",
    6: "Rebel",
    7: "Villain",
    8: "Sapphire",
    9: "Gothic",
  };
  const api = `https://localhost:5001/v1/Brand`;

  for (const brand of brands) {
    for (let i = 0; i < 10; i++) {
      const br = { ...brand, name: brand.name + " " + dct[i] };
      const response = await axios.post(api, br, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      });
    }
  }
}

createBrands();

export { createBrands };
