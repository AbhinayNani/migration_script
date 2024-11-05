import axios from "axios";
import https from "https";

const certs =
  [
    {
      name: "ECOCERT Organic",
      logo: "https://example.com/logo1.png",
      description:
        "ECOCERT Organic certification guarantees that baby products are made from at least 95% organic ingredients, free from synthetic chemicals, and produced with environmentally responsible practices.",
      weight: 0.95,
      category_fk: 2,
      validity: "1095.00:00:00", // 3 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Certified B Corporation",
      logo: "https://example.com/logo2.png",
      description:
        "Certified B Corporation ensures that a company meets high standards of social and environmental performance, accountability, and transparency. Ideal for brands in the baby and maternity sector focused on sustainability.",
      weight: 0.9,
      category_fk: 2,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
    {
      name: "National Eczema Association (NEA) Seal of Acceptance",
      logo: "https://example.com/logo3.png",
      description:
        "The NEA Seal of Acceptance is given to products that meet rigorous standards for treating and preventing eczema, making it perfect for baby skincare products.",
      weight: 0.92,
      category_fk: 2,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Global Organic Textile Standard (GOTS)",
      logo: "https://example.com/logo4.png",
      description:
        "GOTS certification ensures that baby clothing and textiles are made from organic fibers, produced in a socially and environmentally responsible manner, with a focus on sustainable practices.",
      weight: 0.93,
      category_fk: 2,
      validity: "1095.00:00:00", // 3 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Hypoallergenic Certified",
      logo: "https://example.com/logo5.png",
      description:
        "Hypoallergenic certification ensures that baby products are specially formulated to minimize the risk of allergic reactions, ideal for sensitive baby skin.",
      weight: 0.94,
      category_fk: 2,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
  ] +
  [
    {
      name: "Leaping Bunny Certified",
      logo: "https://example.com/logo1.png",
      description:
        "Leaping Bunny is a global standard for cruelty-free certification, ensuring that products are not tested on animals during production.",
      weight: 0.95,
      category_fk: 3,
      validity: "1095.00:00:00", // 3 years in days
      type: 0,
      status: 0,
    },
    {
      name: "USDA Organic",
      logo: "https://example.com/logo2.png",
      description:
        "USDA Organic certification ensures that products are made with ingredients grown without synthetic pesticides or fertilizers, and meet strict organic farming guidelines.",
      weight: 0.9,
      category_fk: 3,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Cosmos Organic",
      logo: "https://example.com/logo3.png",
      description:
        "Cosmos Organic certification guarantees that products meet high organic standards and are free from harmful chemicals, making them safe for skin and the environment.",
      weight: 0.92,
      category_fk: 3,
      validity: "1095.00:00:00", // 3 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Fair Trade Certified",
      logo: "https://example.com/logo4.png",
      description:
        "Fair Trade certification ensures that beauty products are sourced from ethical, sustainable practices, guaranteeing fair wages and safe working conditions for workers.",
      weight: 0.88,
      category_fk: 3,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Vegan Certified",
      logo: "https://example.com/logo5.png",
      description:
        "Vegan certification guarantees that no animal-derived ingredients are used in the production of the product, supporting cruelty-free and sustainable beauty practices.",
      weight: 0.93,
      category_fk: 3,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
  ] +
  [
    {
      name: "Green Seal Certified",
      logo: "https://example.com/logo1.png",
      description:
        "Green Seal certification ensures that products meet rigorous environmental standards for sustainability, performance, and safety in the home and kitchen care industry.",
      weight: 0.85,
      category_fk: 4,
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "EPA Safer Choice",
      logo: "https://example.com/logo2.png",
      description:
        "The EPA Safer Choice label identifies cleaning products that are safer for human health and the environment, ideal for kitchen and home care products.",
      weight: 0.9,
      category_fk: 4,
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "Fair Trade Certified",
      logo: "https://example.com/logo3.png",
      description:
        "Fair Trade certification ensures that kitchen and home care products are produced under fair labor conditions, with a focus on sustainability and ethical sourcing.",
      weight: 0.88,
      category_fk: 4,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Cradle to Cradle Certified",
      logo: "https://example.com/logo4.png",
      description:
        "Cradle to Cradle certification ensures that products are designed with circularity in mind, with materials that can be safely reused, recycled, or composted.",
      weight: 0.87,
      category_fk: 4,
      validity: "1095.00:00:00", // 3 years in days
      type: 0,
      status: 0,
    },
    {
      name: "USDA Organic",
      logo: "https://example.com/logo5.png",
      description:
        "USDA Organic certification guarantees that kitchen care products are made with ingredients that are grown and processed according to federal organic standards.",
      weight: 0.92,
      category_fk: 4,
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
  ] +
  [
    {
      name: "PETA-Approved Vegan",
      logo: "https://example.com/logo1.png",
      description:
        "PETA-Approved Vegan certification ensures that no animal-derived materials are used in the making of the bags and accessories, promoting cruelty-free and sustainable fashion.",
      weight: 0.95,
      category_fk: 5,
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "Global Recycle Standard (GRS)",
      logo: "https://example.com/logo2.png",
      description:
        "The Global Recycle Standard certification verifies that products contain recycled content and are produced with environmentally responsible methods, ideal for bags and accessories made from recycled materials.",
      weight: 0.93,
      category_fk: 5,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
    {
      name: "Vegan Trademark",
      logo: "https://example.com/logo3.png",
      description:
        "The Vegan Trademark certifies that the bags and accessories are free from animal-derived materials such as leather, silk, and wool, ensuring a 100% vegan product.",
      weight: 0.9,
      category_fk: 5,
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "Cradle to Cradle Certified",
      logo: "https://example.com/logo4.png",
      description:
        "Cradle to Cradle Certified ensures that the materials used in the bags and accessories are recyclable and can be returned to the production cycle, promoting circular economy principles.",
      weight: 0.92,
      category_fk: 5,
      validity: "1095.00:00:00", // 3 years in days
      type: 0,
      status: 0,
    },
    {
      name: "ISO 14021: Environmental Claims",
      logo: "https://example.com/logo5.png",
      description:
        "ISO 14021 certification ensures that products labeled as recyclable or made from recycled materials meet the international environmental standards for authenticity and transparency.",
      weight: 0.91,
      category_fk: 5,
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
  ] +
  [
    {
      name: "ISO 22000: Food Safety Management System",
      logo: "https://example.com/logo1.png",
      description:
        "ISO 22000 certification ensures that food safety management systems are in place to identify hazards, control risks, and ensure safe food handling throughout the food supply chain.",
      weight: 0.95,
      category_fk: 6, // Food & Beverages category (assuming category_fk = 6)
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "HACCP (Hazard Analysis and Critical Control Points)",
      logo: "https://example.com/logo2.png",
      description:
        "HACCP certification focuses on identifying and controlling food safety hazards from production to consumption, ensuring products are safe and free from contamination.",
      weight: 0.93,
      category_fk: 6, // Food & Beverages category (assuming category_fk = 6)
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "FDA Approved",
      logo: "https://example.com/logo3.png",
      description:
        "FDA Approval certifies that food products meet the safety standards established by the U.S. Food and Drug Administration, ensuring that they are safe for consumption.",
      weight: 0.9,
      category_fk: 6, // Food & Beverages category (assuming category_fk = 6)
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "GMP (Good Manufacturing Practices)",
      logo: "https://example.com/logo4.png",
      description:
        "GMP certification ensures that food products are manufactured in controlled conditions, using quality materials and following hygienic practices to ensure food safety.",
      weight: 0.91,
      category_fk: 6, // Food & Beverages category (assuming category_fk = 6)
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "BRC Global Standards (Food Safety)",
      logo: "https://example.com/logo5.png",
      description:
        "BRC Global Standards certification assures that food products comply with rigorous food safety and quality management requirements, recognized globally.",
      weight: 0.92,
      category_fk: 6, // Food & Beverages category (assuming category_fk = 6)
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
    {
      name: "SQF (Safe Quality Food)",
      logo: "https://example.com/logo6.png",
      description:
        "SQF certification is an internationally recognized food safety program that assures consumers that food products are produced, processed, and handled according to strict safety standards.",
      weight: 0.89,
      category_fk: 6, // Food & Beverages category (assuming category_fk = 6)
      validity: "730.00:00:00", // 2 years in days
      type: 0,
      status: 0,
    },
    {
      name: "FSSAI (Food Safety and Standards Authority of India)",
      logo: "https://example.com/fssai-logo.png",
      description:
        "FSSAI certification ensures that food products sold in India meet safety, hygiene, and nutritional standards set by the Food Safety and Standards Authority of India (FSSAI). This certification is mandatory for food businesses in India.",
      weight: 0.94,
      category_fk: 6, // Food & Beverages category (assuming category_fk = 6)
      validity: "365.00:00:00", // 1 year in days
      type: 0,
      status: 0,
    },
  ];

async function createCerts() {
  const api = `https://localhost:5174/api/Certification`;

  for (const cert of certs) {
    const res = await axios.post(api, cert, {
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
  }
}
createCerts();

export { createCerts };
