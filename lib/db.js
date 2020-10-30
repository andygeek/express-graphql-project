const { MongoClient } = require('mongodb');
const { DB_USER, DB_PASSWD, DB_HOST, DB_NAME } = process.env;

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
let connection;

async function connectDB() {
  if (connection) return connection.db();
  let client;
  try {
    client = new MongoClient(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    connection = await client.connect();
  } catch (error) {
    console.error('Could not connect to db', mongoUrl, error);
  }
  return connection.db();
}

module.exports = connectDB;