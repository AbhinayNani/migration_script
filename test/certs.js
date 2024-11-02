import axios from "axios";
import https from "https";
import adidas from "./certs.json" assert { type: "json" };

async function createCerts() {
  const api = `https://localhost:5174/api/Certification`;

  for (const product of adidas) {
    const res = await axios.post(api, product, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}
createCerts();

export { createCerts };
