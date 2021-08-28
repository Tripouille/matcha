import debugConstructor from 'debug';
import dotenv from 'dotenv';
import app from './app';

const debug = debugConstructor('api');
dotenv.config();
const port = Number(process.env.SERVER_PORT);

app.listen(port, () => {
  debug(`Server started on port : ${port}`);
});

debug('test');
