import axios from "axios";
import https from "https";

const accounts = [
  {
    seller_fk: 1,
    name: "Nike Sales",
    email: "contact@nike.com",
    description: "Global leader in sportswear and athletic apparel.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 1,
    name: "Nike Purchase",
    email: "contact@nike.com",
    description: "Global leader in sportswear and athletic apparel.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 1,
    name: "Nike Inventory",
    email: "contact@nike.com",
    description: "Global leader in sportswear and athletic apparel.",
    type: 2,
    status: 0,
  },
  {
    seller_fk: 2,
    name: "Adidas Sales",
    email: "info@adidas.com",
    description: "Global leader in the sporting goods industry.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 2,
    name: "Adidas Purchase",
    email: "info@adidas.com",
    description: "Global leader in the sporting goods industry.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 2,
    name: "Adidas Inventory",
    email: "info@adidas.com",
    description: "Global leader in the sporting goods industry.",
    type: 2,
    status: 0,
  },
  {
    seller_fk: 3,
    name: "Levi's Sales",
    email: "support@levis.com",
    description: "Iconic denim and casual wear brand.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 3,
    name: "Levi's Purchase",
    email: "support@levis.com",
    description: "Iconic denim and casual wear brand.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 3,
    name: "Levi's Inventory",
    email: "support@levis.com",
    description: "Iconic denim and casual wear brand.",
    type: 2,
    status: 0,
  },
  {
    seller_fk: 4,
    name: "H&M Sales",
    email: "info@hm.com",
    description: "Fast-fashion brand offering stylish clothing.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 4,
    name: "H&M Purchase",
    email: "info@hm.com",
    description: "Fast-fashion brand offering stylish clothing.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 4,
    name: "H&M Inventory",
    email: "info@hm.com",
    description: "Fast-fashion brand offering stylish clothing.",
    type: 2,
    status: 0,
  },
  {
    seller_fk: 5,
    name: "Zara Sales",
    email: "contact@zara.com",
    description: "Trendy clothing brand known for its chic styles.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 5,
    name: "Zara Purchase",
    email: "contact@zara.com",
    description: "Trendy clothing brand known for its chic styles.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 5,
    name: "Zara Inventory",
    email: "contact@zara.com",
    description: "Trendy clothing brand known for its chic styles.",
    type: 2,
    status: 0,
  },
];

async function createAccounts() {
  const api = `${process.env.HOST}v1/InventoryAccount`;

  for (const account of accounts) {
    const res = await axios.post(api, account, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

export { createAccounts };
