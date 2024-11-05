import axios from "axios";
import https from "https";

const productClaims = [
  {
    name: "Reusable",
    description:
      "These Products are designed to be used multiple times, reducing the need for single-use items. It is 100% vegan and plastic-free, contributing to a more sustainable lifestyle.",
    weight: 0.8,
    regulationList: [
      "Global Sustainability Guidelines",
      "Eco-friendly Standards",
    ],
    suggestionList: [
      "Use multiple times to reduce waste",
      "Ideal for eco-conscious consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Vegan",
    description:
      "No animal-derived materials or ingredients are used in its production. It is also free from plastic, making it environmentally friendly.",
    weight: 0.9,
    regulationList: [
      "Vegan Certification Guidelines",
      "Cruelty-Free Standards",
    ],
    suggestionList: [
      "Suitable for vegan lifestyle",
      "Perfect for cruelty-free consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Energy-Efficient",
    description:
      "This product is designed to consume minimal energy during use, helping to lower your carbon footprint. It supports energy conservation and promotes eco-friendly living.",
    weight: 0.85,
    regulationList: [
      "Energy Efficiency Regulations",
      "Environmental Impact Reduction Guidelines",
    ],
    suggestionList: [
      "Reduce energy consumption in daily use",
      "Saves electricity",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Sustainable",
    description:
      "This product is made from 100% recycled materials and produced using eco-friendly processes that reduce waste, energy, and water usage, minimizing its environmental footprint",
    weight: 1.0,
    regulationList: [
      "Sustainable Production Regulations",
      "Circular Economy Standards",
    ],
    suggestionList: [
      "Supports a sustainable lifestyle",
      "Perfect for eco-conscious shoppers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Upcycled",
    description:
      "This product is upcycled from 100% recycled materials and made using eco-friendly processes that reduce waste, energy, and water usage, minimizing its environmental footprint.",
    weight: 0.75,
    regulationList: [
      "Upcycling Certification Guidelines",
      "Circular Economy Standards",
    ],
    suggestionList: [
      "Contributes to reducing waste",
      "Ideal for environmentally conscious consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Zero Waste",
    description:
      "This product is upcycled from 100% recycled materials and crafted through zero-waste processes that minimize energy, water usage, and waste, reducing its environmental impact",
    weight: 0.95,
    regulationList: [
      "Zero Waste Certification Standards",
      "Environmental Sustainability Guidelines",
    ],
    suggestionList: [
      "Helps reduce overall waste production",
      "Perfect for zero-waste advocates",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Made From Recycled Materials",
    description:
      "This product is made from 100% recycled materials and produced using eco-friendly processes that minimize waste, energy, and water usage, reducing its overall environmental impact.",
    weight: 0.9,
    regulationList: ["Recycling Standards", "Circular Economy Guidelines"],
    suggestionList: [
      "Reduces the need for new raw materials",
      "Ideal for eco-friendly consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "100% Cotton",
    description:
      "This product is made from 100% cotton, sourced sustainably to ensure minimal environmental impact and promote eco-friendly farming practices",
    weight: 0.85,
    regulationList: [
      "Cotton Production Standards",
      "Eco-friendly Cotton Certification",
    ],
    suggestionList: [
      "Natural, breathable fabric for everyday use",
      "Ideal for sensitive skin",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Non Toxic",
    description:
      "This product is made from non-toxic materials, ensuring safety for both the environment and consumers while reducing harmful chemical exposure.",
    weight: 0.9,
    regulationList: [
      "Non-toxic Materials Certification",
      "Safety Standards for Consumer Products",
    ],
    suggestionList: [
      "Perfect for families with young children",
      "Safe for use on sensitive skin",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "DYE Free",
    description:
      "This product is dye-free, made with natural materials to reduce chemical use and minimize environmental impact.",
    weight: 0.8,
    regulationList: [
      "Eco-friendly Dye Standards",
      "Non-toxic Certification for Consumer Products",
    ],
    suggestionList: [
      "Ideal for people with skin sensitivities",
      "Helps reduce environmental impact of dyeing process",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Water Efficient",
    description:
      "This product is made using water-efficient processes, reducing water consumption and minimizing its environmental footprint.",
    weight: 0.75,
    regulationList: [
      "Water Conservation Guidelines",
      "Water Efficiency Standards",
    ],
    suggestionList: [
      "Helps reduce water wastage during use",
      "Contributes to sustainability efforts",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Cruelty free",
    description:
      "This product is cruelty-free, ensuring no animal testing or harm is involved in its development, promoting ethical and humane practices.",
    weight: 1.0,
    regulationList: [
      "Cruelty-Free Certification Standards",
      "Animal Welfare Guidelines",
    ],
    suggestionList: [
      "Perfect for ethical consumers",
      "Supports animal rights and welfare",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Plastic Free",
    description:
      "This product is plastic-free, made with sustainable materials to reduce plastic waste and minimize environmental impact",
    weight: 1.0,
    regulationList: [
      "Plastic-Free Certification Guidelines",
      "Environmental Sustainability Standards",
    ],
    suggestionList: [
      "Helps eliminate plastic pollution",
      "Great choice for eco-conscious consumers",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
  {
    name: "Organic",
    description:
      "This product is made from 100% organic materials, grown without synthetic pesticides or fertilizers, promoting soil health and environmental sustainability.",
    weight: 0.95,
    regulationList: ["Organic Certification Standards", "Non-GMO Guidelines"],
    suggestionList: [
      "Perfect for organic food lovers",
      "Supports organic farming practices",
    ],
    isVerificationRequired: true,
    productClaimQueries: [],
  },
];

async function createProductClaims() {
  const api = "https://qa-admin-api.ecoyaan.com/v1/ProductClaim";

  for (const productClaim of productClaims) {
    const res = await axios.post(api, productClaim, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}

createProductClaims();

export { createProductClaims };
