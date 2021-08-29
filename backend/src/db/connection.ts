import { Pool } from 'pg';

export default new Pool({
  host: 'postgres', // postgres if in docker, localhost in local
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});
