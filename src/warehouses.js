import axios from "axios";
import https from "https";

const warehouses = [
  {
    seller_fk: 101,
    name: "Nike Warehouse",
    description: "Leading global athletic footwear and apparel brand.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 101,
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
    seller_fk: 102,
    name: "Adidas Warehouse",
    description: "Global leader in the sporting goods industry.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 102,
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
    seller_fk: 103,
    name: "Levi's Warehouse",
    description: "Iconic denim brand known for quality jeans.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 103,
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
    seller_fk: 104,
    name: "H&M",
    description: "Fast-fashion brand offering stylish clothing.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 104,
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
    seller_fk: 105,
    name: "Zara",
    description: "Trendy clothing brand known for its chic styles.",
    latitude: 90,
    longitude: 90,
    status: 0,
    address: {
      seller_fk: 105,
      name: "Zara's Warehouse",
      address1: "2-3-4-5-6-7-8-9-10",
      address2: "Street address",
      city: "Hyderabad",
      zipcode: "500013",
      state: "TS",
      country_fk: 1,
    },
  },
];

async function createWarehouses() {
  const api = `https://qa-admin-api.ecoyaan.com/v1/Warehouse`;

  for (const warehouse of warehouses) {
    const res = await axios.post(api, warehouse, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

export { createWarehouses };
