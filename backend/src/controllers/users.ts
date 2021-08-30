import { debug } from 'debug';
import { Request, Response } from 'express';
import * as db from '../db/queries';

const handleError = (err: Error, res: Response) => {
  debug('api')(`DB query on users : ${err.toString()}`);
  res.status(500).json({ error: 'Something failed !' });
};

export const getUsers = (req: Request, res: Response): void => {
  db.get('users', '*', null, (err, queryResult) => {
    if (err) {
      handleError(err, res);
    } else {
      res.status(200).json(queryResult.rows);
    }
  });
};

export const getUserById = (req: Request, res: Response): void => {
  db.get('users', '*', `id = ${req.params.id}`, (err, queryResult) => {
    if (err) {
      handleError(err, res);
    } else if (queryResult.rowCount === 0) {
      res.status(404).json({ error: 'Unknown user' });
    } else {
      res.status(200).json(queryResult.rows);
    }
  });
};

const allowedEntries = ['alias', 'email', 'password'];
export const createUser = (req: Request, res: Response): void => {
  const filteredBody = Object.entries(req.body).filter(([k]) => allowedEntries.includes(k));
  debug('api')(filteredBody);
  db.insert(
    'users',
    {
      alias: 'test_alias',
      email: 'test_email',
      password: 'test_password',
    },
    (err) => {
      if (err) {
        handleError(err, res);
      } else {
        res.status(200).json({ message: 'Successfully created the user' });
      }
    },
  );
};
