import axios from "axios";
import https from "https";

async function createBrands() {
  const api = `https://qa-admin-api.ecoyaan.com/v1/BrandGallery`;

  for (let i = 0; i < 100; i++) {
    const response = await axios.post(
      api,
      [
        {
          brand_fk: i,
          is_primary: true,
          resource:
            "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          description: "Satyameva Jayate",
          type: 1,
          resolution: 0,
        },
        {
            brand_fk: i,
            is_primary: true,
            resource:
              "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Satyameva Jayate",
            type: 1,
            resolution: 0,
          },{
            brand_fk: i,
            is_primary: true,
            resource:
              "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Satyameva Jayate",
            type: 1,
            resolution: 0,
          },{
            brand_fk: i,
            is_primary: true,
            resource:
              "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Satyameva Jayate",
            type: 1,
            resolution: 0,
          },{
            brand_fk: i,
            is_primary: true,
            resource:
              "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Satyameva Jayate",
            type: 1,
            resolution: 0,
          },{
            brand_fk: i,
            is_primary: true,
            resource:
              "https://images.pexels.com/photos/10853637/pexels-photo-10853637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            description: "Satyameva Jayate",
            type: 1,
            resolution: 0,
          },
      ],
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
  }
}

createBrands();
