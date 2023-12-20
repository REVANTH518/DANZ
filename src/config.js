const dotenv = require('dotenv');

dotenv.config();

const { DB_URL, DB_NAME, DB_PW, DB_PORT, DB_USER, DB_CLUSTER, SERVER_PORT = 8000 } = process.env;
const ENV = process.env.ENVIRONMENT || 'dev';



module.exports = {
  DB_NAME,
  DB_PW,
  DB_PORT,
  DB_USER,
  DB_CLUSTER,
  SERVER_PORT,
  DB_URL
}
