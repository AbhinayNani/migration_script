import axios from "axios";
import https from "https";

const clothingBrands = [
  {
    seller_fk: 1,
    name: "Nike",
    description: "Global leader in sportswear and athletic apparel.",
    email: "contact@nike.com",
    phone_code: "+91",
    phone_number: "9998887777",
    country_id: 1,
  },
  {
    seller_fk: 2,
    name: "Adidas",
    description: "Innovative sportswear and lifestyle brand.",
    email: "info@adidas.com",
    phone_code: "+91",
    phone_number: "8887776666",
    country_id: 1,
  },
  {
    seller_fk: 3,
    name: "Levi's",
    description: "Iconic denim and casual wear brand.",
    email: "support@levis.com",
    phone_code: "+91",
    phone_number: "7776665555",
    country_id: 1,
  },
  {
    seller_fk: 4,
    name: "H&M",
    description: "Affordable and stylish clothing and accessories.",
    email: "info@hm.com",
    phone_code: "+91",
    phone_number: "5554443333",
    country_id: 1,
  },
  {
    seller_fk: 5,
    name: "Zara",
    description: "Trendy and fashionable clothing for all seasons.",
    email: "contact@zara.com",
    phone_code: "+91",
    phone_number: "6665554444",
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
  const api = `https://qa-admin-api.ecoyaan.com/v1/Brand`;

  for (const brand of clothingBrands) {
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

export { createBrands };