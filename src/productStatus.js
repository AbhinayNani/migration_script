async function updateProductStatus() {
  const api = "https://qa-admin-api.ecoyaan.com/v1/Product";

  for (let i = 2; i < 66; i++) {
    const res = await axios.post(
      api,
      {
        product_fk: i,
        description: "Product Approved",
        status: 2,
      },
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
  }
}

updateProductStatus();
