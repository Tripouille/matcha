import { Request, Response } from 'express';
import Debug from 'debug';
import pool from '../db/connection';

const debug = Debug('api');

export const getUsers = (req: Request, res: Response): void => {
  debug('before query');
  pool.query('SELECT * FROM users', (err, queryResult) => {
    if (err) throw err;
    res.status(200).json(queryResult.rows);
  });
  // res.status(200).json({ message: 'get all users' });
};

export const getUserById = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'get user by id' });
};
