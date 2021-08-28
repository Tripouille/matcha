import { Pool } from 'pg';
import Debug from 'debug';

const debug = Debug('api');

debug('before connection');
export default new Pool({
  user: 'admin',
  host: 'postgres',
  database: 'db',
  password: 'admin',
  port: 5432,
});
