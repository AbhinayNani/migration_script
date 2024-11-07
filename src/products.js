import axios from "axios";
import https from "https";
import adidas from "./adidas.json" assert { type: "json" };
import nike from "./try.json" assert { type: "json" };

async function createProducts() {
  const api = `https://qa-admin-api.ecoyaan.com/v1/Product`;

  for (const product of nike) {
    const res = await axios.post(api, product, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

createProducts();

export { createProducts };
