import express from 'express';
import cors from 'cors';
import usersRoutes from './routes/users';

const app = express();

const corsHandler = cors({
  origin: ['http://localhost:3000'],
});
app.use(corsHandler);
app.use(express.json());

app.use('/users', usersRoutes);

export default app;
