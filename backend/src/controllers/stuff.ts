import { Request, Response } from 'express';

export const getThing = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'from createThing' });
};

export const createThing = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'successful get' });
};
