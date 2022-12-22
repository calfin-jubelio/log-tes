import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgresql',
  host: 'localhost',
  database: 'property',
  password: 'codered2132',
  port: 5432,
});

export const query = (text: string, params: any[]) => pool.query(text, params);