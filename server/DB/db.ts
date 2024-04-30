import {Client} from "pg";
import { readFileSync } from "fs";
import * as dotenv from "dotenv";
dotenv.config();

const client = new Client({
  connectionString: process.env.AIVEN_POSTGRES_CONNECTION_STRING,
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT!), // Default PostgreSQL port is 5432

  ssl: {
    rejectUnauthorized: false,
    ca: readFileSync("../server/ca.pem").toString(),
  },
});

export default client;
