import { configDotenv } from "dotenv"

configDotenv();

// export const variable           = process.env.ENVIROMENT_KEY;

// app

export const ConfiguredApp          = process.env.APP;
export const secretKey              = process.env.SECRET;

// database
export const databaseName           = process.env.DB_NAME;
export const databaseHost           = process.env.DB_HOST;
export const databasePort           = process.env.DB_PORT;
export const databasePassword       = process.env.DB_PASSWORD;