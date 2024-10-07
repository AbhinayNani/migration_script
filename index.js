import { config } from "dotenv";
import { createBrands } from "./test/brands.js";
import { createManufacturers } from "./test/manufacturers.js";
import { createWarehouses } from "./test/warehouses.js";
import { createAccounts } from "./test/accounts.js";

config();
createBrands();
createManufacturers();
createWarehouses();
createAccounts();