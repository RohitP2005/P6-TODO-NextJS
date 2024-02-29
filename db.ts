import { Pool, QueryResult } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT), 
  ssl: true
});

interface QueryResultRow {
  [key: string]: any;
}

export async function query(text: string, params?: any[]): Promise<QueryResultRow[]> {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}
export interface TaskResult  {
    task_no: number;
    task: string;
  }
