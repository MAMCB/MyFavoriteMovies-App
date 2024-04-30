import { Pool } from "pg";

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT!), // Default PostgreSQL port is 5432
  ssl: {
    ca: process.env.PGSSLCERT,
  },
});

export default pool;
