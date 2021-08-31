import Debug from 'debug';
import app from './app';

const debug = Debug('api');

const port = Number(process.env.SERVER_PORT);

app.listen(port, () => {
  debug(`Server started on port : ${port}`);
});
