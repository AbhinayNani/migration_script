import axios from "axios";
import https from "https";

const accounts = [
  // Accounts for Nike
  {
    seller_fk: 1,
    name: "Nike Sales Account 1",
    email: "nike.sales1@example.com",
    description:
      "Sales representative for Nike, managing retail relationships.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 1,
    name: "Nike Purchase Account 1",
    email: "nike.purchase1@example.com",
    description:
      "Responsible for purchasing raw materials for Nike manufacturing.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 1,
    name: "Nike Inventory Account 1",
    email: "nike.inventory1@example.com",
    description: "Inventory manager for tracking and overseeing Nike stock.",
    type: 2,
    status: 0,
  },

  // Accounts for Adidas
  {
    seller_fk: 2,
    name: "Adidas Sales Account 1",
    email: "adidas.sales1@example.com",
    description: "Sales representative handling customer accounts for Adidas.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 2,
    name: "Adidas Purchase Account 1",
    email: "adidas.purchase1@example.com",
    description: "Handles procurement and purchasing for Adidas production.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 2,
    name: "Adidas Inventory Account 1",
    email: "adidas.inventory1@example.com",
    description: "Responsible for managing Adidas inventory and stock levels.",
    type: 2,
    status: 0,
  },

  // Accounts for Levi's
  {
    seller_fk: 3,
    name: "Levi's Sales Account 1",
    email: "levis.sales1@example.com",
    description:
      "Sales representative managing accounts for Levi's denim products.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 3,
    name: "Levi's Purchase Account 1",
    email: "levis.purchase1@example.com",
    description:
      "Responsible for purchasing raw denim and materials for Levi's.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 3,
    name: "Levi's Inventory Account 1",
    email: "levis.inventory1@example.com",
    description:
      "Inventory management for Levi's to ensure proper stock levels.",
    type: 2,
    status: 0,
  },

  // Accounts for H&M
  {
    seller_fk: 4,
    name: "H&M Sales Account 1",
    email: "hm.sales1@example.com",
    description:
      "Sales representative for H&M, responsible for increasing sales.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 4,
    name: "H&M Purchase Account 1",
    email: "hm.purchase1@example.com",
    description: "Purchasing manager for H&M's clothing and accessory stock.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 4,
    name: "H&M Inventory Account 1",
    email: "hm.inventory1@example.com",
    description: "Responsible for the day-to-day inventory management for H&M.",
    type: 2,
    status: 0,
  },

  // Accounts for Zara
  {
    seller_fk: 5,
    name: "Zara Sales Account 1",
    email: "zara.sales1@example.com",
    description: "Sales account manager for Zara, handling retail business.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 5,
    name: "Zara Purchase Account 1",
    email: "zara.purchase1@example.com",
    description: "Purchasing coordinator for Zara's fashion collection.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 5,
    name: "Zara Inventory Account 1",
    email: "zara.inventory1@example.com",
    description:
      "Responsible for inventory and stock control for Zara products.",
    type: 2,
    status: 0,
  },

  // Accounts for Pantaloons
  {
    seller_fk: 6,
    name: "Pantaloons Sales Account 1",
    email: "pantaloons.sales1@example.com",
    description: "Sales representative managing Pantaloons' retail accounts.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 6,
    name: "Pantaloons Purchase Account 1",
    email: "pantaloons.purchase1@example.com",
    description: "Handles Pantaloons' purchasing and supplier relations.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 6,
    name: "Pantaloons Inventory Account 1",
    email: "pantaloons.inventory1@example.com",
    description: "Inventory and stock management for Pantaloons stores.",
    type: 2,
    status: 0,
  },

  // Accounts for FabIndia
  {
    seller_fk: 7,
    name: "FabIndia Sales Account 1",
    email: "fabindia.sales1@example.com",
    description:
      "Sales representative handling FabIndia's customer relationships.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 7,
    name: "FabIndia Purchase Account 1",
    email: "fabindia.purchase1@example.com",
    description:
      "Responsible for purchasing raw materials and apparel for FabIndia.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 7,
    name: "FabIndia Inventory Account 1",
    email: "fabindia.inventory1@example.com",
    description: "Inventory management for FabIndia stores across India.",
    type: 2,
    status: 0,
  },

  // Accounts for Max Fashion
  {
    seller_fk: 8,
    name: "Max Fashion Sales Account 1",
    email: "maxfashion.sales1@example.com",
    description:
      "Sales account manager for Max Fashion, overseeing retail sales.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 8,
    name: "Max Fashion Purchase Account 1",
    email: "maxfashion.purchase1@example.com",
    description: "Purchasing manager for Max Fashion apparel and accessories.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 8,
    name: "Max Fashion Inventory Account 1",
    email: "maxfashion.inventory1@example.com",
    description: "Inventory coordinator for Max Fashion's retail stores.",
    type: 2,
    status: 0,
  },

  // Accounts for Shoppers Stop
  {
    seller_fk: 9,
    name: "Shoppers Stop Sales Account 1",
    email: "shoppersstop.sales1@example.com",
    description:
      "Sales account manager responsible for Shoppers Stop's retail operations.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 9,
    name: "Shoppers Stop Purchase Account 1",
    email: "shoppersstop.purchase1@example.com",
    description:
      "Purchasing manager for Shoppers Stop stores and product assortment.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 9,
    name: "Shoppers Stop Inventory Account 1",
    email: "shoppersstop.inventory1@example.com",
    description:
      "Responsible for the inventory and stock levels at Shoppers Stop.",
    type: 2,
    status: 0,
  },

  // Accounts for Reliance Trends
  {
    seller_fk: 10,
    name: "Reliance Trends Sales Account 1",
    email: "reliancetrends.sales1@example.com",
    description:
      "Sales account manager overseeing Reliance Trends' sales operations.",
    type: 0,
    status: 0,
  },
  {
    seller_fk: 10,
    name: "Reliance Trends Purchase Account 1",
    email: "reliancetrends.purchase1@example.com",
    description:
      "Purchasing manager for Reliance Trends clothing and accessories.",
    type: 1,
    status: 0,
  },
  {
    seller_fk: 10,
    name: "Reliance Trends Inventory Account 1",
    email: "reliancetrends.inventory1@example.com",
    description: "Inventory manager ensuring stock levels for Reliance Trends.",
    type: 2,
    status: 0,
  },
];

async function createAccounts() {
  const api = `https://localhost:5001/v1/InventoryAccount`;

  for (const account of accounts) {
    const res = await axios.post(api, account, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

createAccounts();

export { createAccounts };
