import axios from "axios";
import https from "https";

const warehouses = [
  {
    seller_fk: 1,
    name: "Nike Warehouse",
    description: "Leading global athletic footwear and apparel brand.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 1,
      name: "Nike Warehouse",
      address1: "2-3-4-5-6-7-8-9-10",
      address2: "Street address",
      city: "Hyderabad",
      zipcode: "500013",
      state: "TS",
      country_fk: 1,
    },
  },
  {
    seller_fk: 2,
    name: "Adidas Warehouse",
    description: "Global leader in the sporting goods industry.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 2,
      name: "Adidas Warehouse",
      address1: "2-3-4-5-6-7-8-9-10",
      address2: "Street address",
      city: "Hyderabad",
      zipcode: "500013",
      state: "TS",
      country_fk: 1,
    },
  },
  {
    seller_fk: 3,
    name: "Levi's Warehouse",
    description: "Iconic denim brand known for quality jeans.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 3,
      name: "Levi's Warehouse",
      address1: "2-3-4-5-6-7-8-9-10",
      address2: "Street address",
      city: "Hyderabad",
      zipcode: "500013",
      state: "TS",
      country_fk: 1,
    },
  },
  {
    seller_fk: 4,
    name: "H&M",
    description: "Fast-fashion brand offering stylish clothing.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 4,
      name: "H&M's Warehouse",
      address1: "2-3-4-5-6-7-8-9-10",
      address2: "Street address",
      city: "Hyderabad",
      zipcode: "500013",
      state: "TS",
      country_fk: 1,
    },
  },
  {
    seller_fk: 5,
    name: "Zara",
    description: "Trendy clothing brand known for its chic styles.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 5,
      name: "Zara's Warehouse",
      address1: "2-3-4-5-6-7-8-9-10",
      address2: "Street address",
      city: "Hyderabad",
      zipcode: "500013",
      state: "TS",
      country_fk: 1,
    },
  },
  {
    seller_fk: 6,
    name: "Pantaloons",
    description:
      "One of India's leading fashion retailers offering trendy clothing and accessories for men, women, and kids.",
    latitude: 19.076,
    longitude: 72.8777,
    status: 0,
    address: {
      seller_fk: 6,
      name: "Pantaloons Mumbai Warehouse",
      address1: "Phoenix Market City, Kurla West",
      address2: "Logistics Hub, B2 Floor",
      city: "Mumbai",
      zipcode: "400070",
      state: "Maharashtra",
      country_fk: 1,
    },
  },
  {
    seller_fk: 7,
    name: "FabIndia",
    description:
      "Famous Indian brand offering ethnic and contemporary apparel, home decor, and accessories.",
    latitude: 28.7041,
    longitude: 77.1025,
    status: 0,
    address: {
      seller_fk: 7,
      name: "FabIndia's Delhi Warehouse",
      address1: "Khan Market, Near India Gate",
      address2: "Ground Floor, Sector 3",
      city: "New Delhi",
      zipcode: "110003",
      state: "Delhi",
      country_fk: 1,
    },
  },
  {
    seller_fk: 8,
    name: "Max Fashion",
    description:
      "Popular retail clothing brand offering affordable and fashionable clothing for men, women, and children.",
    latitude: 12.9716,
    longitude: 77.5946,
    status: 0,
    address: {
      seller_fk: 8,
      name: "Max Fashion Bengaluru Warehouse",
      address1: "MG Road, Commercial Street",
      address2: "Max Logistics Center",
      city: "Bengaluru",
      zipcode: "560001",
      state: "Karnataka",
      country_fk: 1,
    },
  },
  {
    seller_fk: 9,
    name: "Shoppers Stop",
    description:
      "A leading department store chain in India offering apparel, accessories, and lifestyle products.",
    latitude: 19.0822,
    longitude: 72.881,
    status: 0,
    address: {
      seller_fk: 9,
      name: "Shoppers Stop Mumbai Warehouse",
      address1: "Andheri East, Off Western Express Highway",
      address2: "Shoppers Stop Warehouse Center",
      city: "Mumbai",
      zipcode: "400093",
      state: "Maharashtra",
      country_fk: 1,
    },
  },
  {
    seller_fk: 10,
    name: "Reliance Trends",
    description:
      "One of India's leading fashion retail chains offering trendy and affordable clothing for all age groups.",
    latitude: 22.5726,
    longitude: 88.3639,
    status: 0,
    address: {
      seller_fk: 10,
      name: "Reliance Trends Kolkata Warehouse",
      address1: "Salt Lake Sector V",
      address2: "Reliance Trends Logistics Park",
      city: "Kolkata",
      zipcode: "700091",
      state: "West Bengal",
      country_fk: 1,
    },
  },
];

async function createWarehouses() {
  const api = "https://localhost:5001/v1/Warehouse";

  for (const warehouse of warehouses) {
    const res = await axios.post(api, warehouse, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

createWarehouses();

export { createWarehouses };
