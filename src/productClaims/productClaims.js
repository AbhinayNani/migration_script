import axios from "axios";
import https from "https";

const productClaims = [
  {
    id: 1,
    name: "Reusable",
    description:
      "These Products are designed to be used multiple times, reducing the need for single-use items. It is 100% vegan and plastic-free, contributing to a more sustainable lifestyle.",
    weight: 0.8,
    regulations: ["Global Sustainability Guidelines", "Eco-friendly Standards"],
    suggestions: [
      "Use multiple times to reduce waste",
      "Ideal for eco-conscious consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 2,
    name: "Vegan",
    description:
      "No animal-derived materials or ingredients are used in its production. It is also free from plastic, making it environmentally friendly.",
    weight: 0.9,
    regulations: ["Vegan Certification Guidelines", "Cruelty-Free Standards"],
    suggestions: [
      "Suitable for vegan lifestyle",
      "Perfect for cruelty-free consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 3,
    name: "Energy-Efficient",
    description:
      "This product is designed to consume minimal energy during use, helping to lower your carbon footprint. It supports energy conservation and promotes eco-friendly living.",
    weight: 0.85,
    regulations: [
      "Energy Efficiency Regulations",
      "Environmental Impact Reduction Guidelines",
    ],
    suggestions: [
      "Reduce energy consumption in daily use",
      "Saves electricity",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 4,
    name: "Sustainable",
    description:
      "This product is made from 100% recycled materials and produced using eco-friendly processes that reduce waste, energy, and water usage, minimizing its environmental footprint",
    weight: 1.0,
    regulations: [
      "Sustainable Production Regulations",
      "Circular Economy Standards",
    ],
    suggestions: [
      "Supports a sustainable lifestyle",
      "Perfect for eco-conscious shoppers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 5,
    name: "Upcycled",
    description:
      "This product is upcycled from 100% recycled materials and made using eco-friendly processes that reduce waste, energy, and water usage, minimizing its environmental footprint.",
    weight: 0.75,
    regulations: [
      "Upcycling Certification Guidelines",
      "Circular Economy Standards",
    ],
    suggestions: [
      "Contributes to reducing waste",
      "Ideal for environmentally conscious consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 6,
    name: "Zero Waste",
    description:
      "This product is upcycled from 100% recycled materials and crafted through zero-waste processes that minimize energy, water usage, and waste, reducing its environmental impact",
    weight: 0.95,
    regulations: [
      "Zero Waste Certification Standards",
      "Environmental Sustainability Guidelines",
    ],
    suggestions: [
      "Helps reduce overall waste production",
      "Perfect for zero-waste advocates",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 7,
    name: "Recycled",
    description:
      "This product is made from 100% recycled materials and produced using eco-friendly processes that minimize waste, energy, and water usage, reducing its overall environmental impact.",
    weight: 0.9,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 8,
    name: "100% Cotton",
    description:
      "This product is made from 100% cotton, sourced sustainably to ensure minimal environmental impact and promote eco-friendly farming practices",
    weight: 0.85,
    regulations: [
      "Cotton Production Standards",
      "Eco-friendly Cotton Certification",
    ],
    suggestions: [
      "Natural, breathable fabric for everyday use",
      "Ideal for sensitive skin",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 9,
    name: "Toxin Free",
    description:
      "This product is made from non-toxic materials, ensuring safety for both the environment and consumers while reducing harmful chemical exposure.",
    weight: 0.9,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 10,
    name: "Dye Free",
    description:
      "This product is dye-free, made with natural materials to reduce chemical use and minimize environmental impact.",
    weight: 0.8,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 11,
    name: "Water Efficient",
    description:
      "This product is made using water-efficient processes, reducing water consumption and minimizing its environmental footprint.",
    weight: 0.75,
    regulations: [
      "Water Conservation Guidelines",
      "Water Efficiency Standards",
    ],
    suggestions: [
      "Helps reduce water wastage during use",
      "Contributes to sustainability efforts",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 12,
    name: "Cruelty-free",
    description:
      "This product is cruelty-free, ensuring no animal testing or harm is involved in its development, promoting ethical and humane practices.",
    weight: 1.0,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 13,
    name: "Plastic Free",
    description:
      "This product is plastic-free, made with sustainable materials to reduce plastic waste and minimize environmental impact",
    weight: 1.0,
    regulations: [
      "Plastic-Free Certification Guidelines",
      "Environmental Sustainability Standards",
    ],
    suggestions: [
      "Helps eliminate plastic pollution",
      "Great choice for eco-conscious consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 14,
    name: "Organic",
    description:
      "This product is made from 100% organic materials, grown without synthetic pesticides or fertilizers, promoting soil health and environmental sustainability.",
    weight: 0.95,
    regulations: ["Organic Certification Standards", "Non-GMO Guidelines"],
    suggestions: [
      "Perfect for organic food lovers",
      "Supports organic farming practices",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 15,
    name: "Paraffin-Free",
    description:
      "This product is free from paraffin, ensuring it is gentle and non-toxic.",
    weight: 150.0,
    regulations: ["Paraffin-Free"],
    suggestions: [
      "Suitable for sensitive skin",
      "Ideal for environmentally conscious consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 16,
    name: "Petrochemical-free",
    description:
      "Free from harmful petrochemicals, this product ensures a healthier choice for your skin.",
    weight: 180.0,
    regulations: ["Petrochemical-free"],
    suggestions: [
      "Perfect for eco-conscious individuals",
      "Suitable for everyday use",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 17,
    name: "Formaldehyde-free",
    description:
      "This product is free of formaldehyde, ensuring it is safe and gentle for your skin.",
    weight: 140.0,
    regulations: ["Formaldehyde-free"],
    suggestions: [
      "Safe for daily use",
      "Ideal for individuals with sensitive skin",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 18,
    name: "Synthetic Color Free",
    description:
      "The product contains no synthetic colorants, offering a natural appearance.",
    weight: 160.0,
    regulations: ["Synthetic Color Free"],
    suggestions: [
      "Suitable for individuals seeking natural beauty products",
      "Best for those with sensitivities to artificial colors",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 19,
    name: "Synthetic fragrance free",
    description:
      "This product is free from synthetic fragrances, making it ideal for sensitive individuals.",
    weight: 190.0,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 20,
    name: "Sulfates free (SLS Free)",
    description:
      "No sulfates are present in this product, making it a safer choice for your skin and hair.",
    weight: 170.0,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 21,
    name: "Phthalates free",
    description:
      "This product is phthalates-free, ensuring it is safer for both your skin and the environment.",
    weight: 200.0,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 22,
    name: "PABA-Free",
    description:
      "No PABA (para-aminobenzoic acid) is used in this product, making it a safer choice for skin protection.",
    weight: 160.0,
    regulations: ["PABA-Free"],
    suggestions: ["Great for sunscreen formulations", "Safe for daily use"],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 23,
    name: "Parabens free",
    description:
      "This product is free from parabens, reducing potential risks associated with preservatives.",
    weight: 180.0,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 24,
    name: "Palm Oil-free",
    description:
      "The product is free from palm oil, promoting ethical sourcing and environmental sustainability.",
    weight: 150.0,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 25,
    name: "Alcohol-free",
    description:
      "This product is free from alcohol, making it gentler on the skin and suitable for all skin types.",
    weight: 170.0,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 26,
    name: "Natural",
    description:
      "This product is made with 100% natural materials, free from synthetic additives and chemicals, offering a more sustainable and eco-friendly alternative.",
    weight: 0.9,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 27,
    name: "Sustainable Packaging",
    description:
      "This product features packaging made from eco-friendly, recyclable, or biodegradable materials, reducing its environmental footprint and promoting sustainability.",
    weight: 0.5,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 28,
    name: "Chemical-Free",
    description:
      "This product is completely free from harmful chemicals, using only natural, safe ingredients to ensure both consumer health and environmental safety.",
    weight: 0.7,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    id: 29,
    name: "Locally Sourced",
    description:
      "This product is made using materials sourced from local suppliers, supporting regional economies, reducing carbon footprint, and ensuring the freshness and quality of ingredients.",
    weight: 0.6,
    regulations: [],
    suggestions: [],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
];

async function createProductClaims() {
  const api = "https://qa-admin-api.ecoyaan.com/v1/ProductClaim";

  for (const productClaim of productClaims) {
    const res = await axios.post(api, productClaim, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI5Y2JiNjJlNy1kN2VlLTQwZDQtYmNkYy1hMjJjOTE0MGUyODciLCJUb2tlbklkIjoiMTc1IiwidG9rZW5fdHlwZSI6InBlcnNvbiIsIkJ1c2luZXNzSWQiOiIxIiwiSXNBZG1pbiI6IjEiLCJFeHBpcnkiOiIxNzM0NzA5MTc0IiwibmJmIjoxNzM0NzA1NTc0LCJleHAiOjE3MzQ3MDkxNzQsImlzcyI6Imh0dHA6Ly9lY295YWFuLmNvbSJ9.qKrcSAsvcwOM8sRM28RIfK9TOYDfcTaeSsmV8cn9Xi4`, // Include the token in the header
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
