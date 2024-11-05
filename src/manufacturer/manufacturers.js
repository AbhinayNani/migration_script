import axios from "axios";
import https from "https";

const manufacturers = [
  {
    seller_fk: 1,
    name: "Nike Manufacturing",
    description:
      "Global leader in athletic footwear, apparel, and equipment manufacturing.",
    logo: "https://www.nike.com/favicon.ico",
    email: "nike@manufacturing.com",
    phone_code: "+1",
    phone_number: "123-456-7890",
    country_id: 1,
  },
  {
    seller_fk: 2,
    name: "Adidas Manufacturing",
    description:
      "Manufacturing high-quality athletic footwear and apparel worldwide.",
    logo: "https://www.adidas.com/favicon.ico",
    email: "adidas@manufacturing.com",
    phone_code: "+1",
    phone_number: "123-456-7891",
    country_id: 1,
  },
  {
    seller_fk: 3,
    name: "Levi's Manufacturing",
    description:
      "Iconic denim manufacturer producing high-quality jeans and apparel.",
    logo: "https://www.levi.com/favicon.ico",
    email: "levis@manufacturing.com",
    phone_code: "+1",
    phone_number: "123-456-7892",
    country_id: 1,
  },
  {
    seller_fk: 4,
    name: "H&M Manufacturing",
    description:
      "Fast-fashion clothing manufacturer with a focus on global distribution.",
    logo: "https://www.hm.com/favicon.ico",
    email: "hm@manufacturing.com",
    phone_code: "+1",
    phone_number: "123-456-7893",
    country_id: 1,
  },
  {
    seller_fk: 5,
    name: "Zara Manufacturing",
    description:
      "Global fashion retailer with a focus on manufacturing chic and trendy styles.",
    logo: "https://www.zara.com/favicon.ico",
    email: "zara@manufacturing.com",
    phone_code: "+1",
    phone_number: "123-456-7894",
    country_id: 1,
  },
  {
    seller_fk: 6,
    name: "Pantaloons Manufacturing",
    description:
      "Leading manufacturer of trendy and affordable clothing for men, women, and kids.",
    logo: "https://www.pantaloons.com/favicon.ico",
    email: "pantaloons@manufacturing.com",
    phone_code: "+91",
    phone_number: "987-654-3210",
    country_id: 1,
  },
  {
    seller_fk: 7,
    name: "FabIndia Manufacturing",
    description:
      "Manufacturer of ethnic and contemporary apparel, home decor, and accessories.",
    logo: "https://www.fabindia.com/favicon.ico",
    email: "fabindia@manufacturing.com",
    phone_code: "+91",
    phone_number: "987-654-3211",
    country_id: 1,
  },
  {
    seller_fk: 8,
    name: "Max Fashion Manufacturing",
    description:
      "Affordable and fashionable clothing manufacturer for men, women, and children.",
    logo: "https://www.maxfashion.com/favicon.ico",
    email: "maxfashion@manufacturing.com",
    phone_code: "+91",
    phone_number: "987-654-3212",
    country_id: 1,
  },
  {
    seller_fk: 9,
    name: "Shoppers Stop Manufacturing",
    description:
      "Manufacturer of high-quality apparel, accessories, and lifestyle products.",
    logo: "https://www.shoppersstop.com/favicon.ico",
    email: "shoppersstop@manufacturing.com",
    phone_code: "+91",
    phone_number: "987-654-3213",
    country_id: 1,
  },
  {
    seller_fk: 10,
    name: "Reliance Trends Manufacturing",
    description:
      "Manufacturer of trendy and affordable clothing for all age groups in India.",
    logo: "https://www.reliancetrends.com/favicon.ico",
    email: "reliancetrends@manufacturing.com",
    phone_code: "+91",
    phone_number: "987-654-3214",
    country_id: 1,
  },
];

async function createManufacturers() {
  const api = `https://qa-admin-api.ecoyaan.com/v1/Manufacturer`;

  for (const manufacturer of manufacturers) {
    const res = await axios.post(api, manufacturer, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

createManufacturers();

export { createManufacturers };
