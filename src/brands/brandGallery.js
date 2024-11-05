import axios from "axios";
import https from "https";

const gallery = [
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/13236691/pexels-photo-13236691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 0,
    resolution: 1,
  },
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/13236691/pexels-photo-13236691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 0,
    resolution: 2,
  },
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/13236691/pexels-photo-13236691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 0,
    resolution: 3,
  },
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/13236691/pexels-photo-13236691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 0,
    resolution: 4,
  },
  // First Image
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 1,
  },
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 2,
  },
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 3,
  },
  {
    brand_fk: 1,
    is_primary: true,
    resource:
      "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 4,
  },
  //  Second Image
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1307128/pexels-photo-1307128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 1,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1307128/pexels-photo-1307128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 2,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1307128/pexels-photo-1307128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 3,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1307128/pexels-photo-1307128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 4,
  },
  // Third Image
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 1,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 2,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 3,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/1124466/pexels-photo-1124466.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 4,
  },
  //  Fourth Image
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/27299906/pexels-photo-27299906/free-photo-of-a-pair-of-pink-soccer-shoes-next-to-a-soccer-ball.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 1,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/27299906/pexels-photo-27299906/free-photo-of-a-pair-of-pink-soccer-shoes-next-to-a-soccer-ball.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 2,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/27299906/pexels-photo-27299906/free-photo-of-a-pair-of-pink-soccer-shoes-next-to-a-soccer-ball.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 3,
  },
  {
    brand_fk: 1,
    is_primary: false,
    resource:
      "https://images.pexels.com/photos/27299906/pexels-photo-27299906/free-photo-of-a-pair-of-pink-soccer-shoes-next-to-a-soccer-ball.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Nike, Just Do It",
    type: 1,
    resolution: 4,
  },
];

async function createNikeGallery() {
  const api = `https://localhost:5001/v1/BrandGallery`;

  for (let i = 1; i <= 10; i++) {
    const response = await axios.post(
      api,
      gallery.map((g) => ({ ...g, brand_fk: i })),
      {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );
  }
}

createNikeGallery();
