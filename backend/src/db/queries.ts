import { QueryResult } from 'pg';
import Debug from 'debug';
import pool from './connection';

export function get(
  table: string,
  column: string,
  where: string,
  callback: (err: Error, queryResult: QueryResult) => void,
): void {
  const query = `SELECT ${column} FROM ${table} ${where ? `WHERE ${where}` : ''}`;
  Debug('api')(query);
  pool.query(query, (err, queryResult) => {
    callback(err, queryResult);
  });
}

export const a = 2;
