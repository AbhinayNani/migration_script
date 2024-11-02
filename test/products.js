import axios from "axios";
import https from "https";
import adidas from "./adidas.json" assert { type: "json" };
import nike from "./nikeClothes.json" assert { type: "json" };

async function createProducts() {
  const api = `https://localhost:5174/v1/Product`;

  for (const product of adidas) {
    const res = await axios.post(api, product, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }

  for (const product of nike) {
    const res = await axios.post(api, product, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

export { createProducts };
