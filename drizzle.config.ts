import {defineConfig} from "drizzle-kit";

import {config} from "./src/config.js";

import "dotenv/config";

export default defineConfig({
    out: "./src/db/migrations",
    schema: "./src/db/schema.ts",
    dialect: "turso",
    dbCredentials: {
        url: process.env.DATABASE_URL || "", //config.db.url || "",
    },
});
