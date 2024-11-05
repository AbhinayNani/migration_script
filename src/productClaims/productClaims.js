import axios from "axios";
import https from "https";

const productClaims = [
  {
    name: "Reusable",
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
    description: "100% vegan & plastic free",
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
  const api = "https://localhost:5001/v1/ProductClaim";

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
