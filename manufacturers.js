import axios from "axios";
import https from "https";

const manufacturers = [
  {
    owner_id: 1,
    name: "Nike",
    description: "Leading global athletic footwear and apparel brand.",
    logo: "https://example.com/logos/nike.png",
    email: "info@nike.com",
    phone_code: "+1",
    phone_number: "1234567890",
    country_id: 1,
  },
  {
    owner_id: 2,
    name: "Adidas",
    description: "Global leader in the sporting goods industry.",
    logo: "https://example.com/logos/adidas.png",
    email: "contact@adidas.com",
    phone_code: "+1",
    phone_number: "1234567891",
    country_id: 1,
  },
  {
    owner_id: 3,
    name: "Levi's",
    description: "Iconic denim brand known for quality jeans.",
    logo: "https://example.com/logos/levis.png",
    email: "support@levi.com",
    phone_code: "+1",
    phone_number: "1234567892",
    country_id: 1,
  },
  {
    owner_id: 4,
    name: "H&M",
    description: "Fast-fashion brand offering stylish clothing.",
    logo: "https://example.com/logos/hm.png",
    email: "hello@hm.com",
    phone_code: "+1",
    phone_number: "1234567893",
    country_id: 1,
  },
  {
    owner_id: 5,
    name: "Zara",
    description: "Trendy clothing brand known for its chic styles.",
    logo: "https://example.com/logos/zara.png",
    email: "info@zara.com",
    phone_code: "+1",
    phone_number: "1234567894",
    country_id: 1,
  },
];

async function createManufacturers() {
  const api = `${process.env.HOST}v1/Manufacturer`;

  const aptCalls = [];

  for (const manufacturer of manufacturers) {
    aptCalls.push(
      axios.post(api, manufacturer, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
    );
  }

  try {
    const response = await axios.all(aptCalls);
  } catch (error) {
    console.log(error);

    console.log(error.message);
    //
  }
}


export { createManufacturers };
