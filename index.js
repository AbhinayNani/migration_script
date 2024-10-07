import { createBrands } from "./brands.js";
import { config } from "dotenv";
import { createManufacturers } from "./manufacturers.js";

config();
createBrands();
createManufacturers();