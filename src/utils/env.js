import { config } from "dotenv";

config();

export default function host_name() {
  return process.env.HOST;
}
