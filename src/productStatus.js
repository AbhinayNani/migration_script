async function updateProductStatus() {
  const api = "https://localhost:5001/v1/Product";

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
