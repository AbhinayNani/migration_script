import axios from "axios";
import https from "https";

const productClaims = [
  {
    name: "Paraffin-Free",
    description:
      "This product is free from paraffin, ensuring it is gentle and non-toxic.",
    weight: 150,
    regulationList: ["Paraffin-Free"],
    suggestionList: [
      "Suitable for sensitive skin",
      "Ideal for environmentally conscious consumers",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Petrochemical-free",
    description:
      "Free from harmful petrochemicals, this product ensures a healthier choice for your skin.",
    weight: 180,
    regulationList: ["Petrochemical-free"],
    suggestionList: [
      "Perfect for eco-conscious individuals",
      "Suitable for everyday use",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Formaldehyde-free",
    description:
      "This product is free of formaldehyde, ensuring it is safe and gentle for your skin.",
    weight: 140,
    regulationList: ["Formaldehyde-free"],
    suggestionList: [
      "Safe for daily use",
      "Ideal for individuals with sensitive skin",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Synthetic Color Free",
    description:
      "The product contains no synthetic colorants, offering a natural appearance.",
    weight: 160,
    regulationList: ["Synthetic Color Free"],
    suggestionList: [
      "Suitable for individuals seeking natural beauty products",
      "Best for those with sensitivities to artificial colors",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Synthetic Fragrance Free",
    description:
      "This product is free from synthetic fragrances, making it ideal for sensitive individuals.",
    weight: 190,
    regulationList: ["Synthetic fragrance free"],
    suggestionList: [
      "Perfect for people with fragrance sensitivities",
      "Gentle enough for sensitive skin",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Sulfates Free (SLS Free)",
    description:
      "No sulfates are present in this product, making it a safer choice for your skin and hair.",
    weight: 170,
    regulationList: ["Sulfates free (SLS Free)"],
    suggestionList: [
      "Gentle on skin and hair",
      "Ideal for sensitive skin or dry hair",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Phthalates Free",
    description:
      "This product is phthalates-free, ensuring it is safer for both your skin and the environment.",
    weight: 200,
    regulationList: ["Phthalates free"],
    suggestionList: [
      "Safe for sensitive skin",
      "Great for eco-friendly and health-conscious individuals",
    ],
    isVerificationRequired: true,
  },
  {
    name: "PABA-Free",
    description:
      "No PABA (para-aminobenzoic acid) is used in this product, making it a safer choice for skin protection.",
    weight: 160,
    regulationList: ["PABA-Free"],
    suggestionList: ["Great for sunscreen formulations", "Safe for daily use"],
    isVerificationRequired: true,
  },
  {
    name: "Parabens Free",
    description:
      "This product is free from parabens, reducing potential risks associated with preservatives.",
    weight: 180,
    regulationList: ["Parabens Free"],
    suggestionList: [
      "Ideal for those avoiding preservatives",
      "Safe for individuals with sensitive skin",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Palm Oil-Free",
    description:
      "The product is free from palm oil, promoting ethical sourcing and environmental sustainability.",
    weight: 150,
    regulationList: ["Palm Oil-Free"],
    suggestionList: [
      "Great for those supporting sustainable practices",
      "Good for vegan and cruelty-free routines",
    ],
    isVerificationRequired: true,
  },
  {
    name: "Alcohol-Free",
    description:
      "This product is free from alcohol, making it gentler on the skin and suitable for all skin types.",
    weight: 170,
    regulationList: ["Alcohol-Free"],
    suggestionList: [
      "Ideal for individuals with dry or sensitive skin",
      "Best for daily use",
    ],
    isVerificationRequired: true,
  },
];

async function createProductClaims() {
  const api = "https://localhost:5001/v1/ProductClaim";

  for (const productClaim of productClaims) {
    const res = await axios.post(api, productClaim, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiJiMjAyYzRiNy00ZDM3LTRkYTctODFjNy0zNTQ0YmRjMmMxOTciLCJUb2tlbklkIjoiMSIsInRva2VuX3R5cGUiOiJwZXJzb24iLCJCdXNpbmVzc0lkIjoiMSIsIklzQWRtaW4iOiIxIiwiRXhwaXJ5IjoiMTczNDcwNTE5NCIsIm5iZiI6MTczNDcwMTU5NCwiZXhwIjoxNzM0NzA1MTk0LCJpc3MiOiJodHRwOi8vZWNveWFhbi5jb20ifQ.03l9msSgBsmYgKE4J5v3kGA6D_BxgtYae5dhSyH-v0E`, // Include the token in the header
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });

    console.log(res);
  }
}

createProductClaims();

export { createProductClaims };
