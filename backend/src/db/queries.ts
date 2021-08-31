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
  Debug('api')(`'${query}'`);
  pool.query(query, (err, queryResult) => {
    callback(err, queryResult);
  });
}

type Entries = { [key: string]: string };
export function insert(
  table: string,
  entries: Entries,
  callback: (err: Error, queryResult: QueryResult) => void,
): void {
  const keys = Object.keys(entries).join(', ');
  const values = Object.values(entries);
  const variables = Array(values.length)
    .fill(1)
    .map((v, i) => `$${v + i}`)
    .join(', ');
  const query = {
    text: `INSERT INTO ${table}(${keys}) VALUES(${variables})`,
    values,
  };
  Debug('api')(query);
  pool.query(query, (err, queryResult) => {
    callback(err, queryResult);
  });
}
