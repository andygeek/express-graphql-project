const { buildSchema } = require('graphql');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT || 3000;

const schema = buildSchema(`
  type Query {
    "Retorna un Hello"
    hello: String,
    "Retorna un saludo"
    saludo: String
  }
`);

const resolvers = {
  hello: () => {
    return 'Hola mundo';
  },
  saludo: () => {
    return 'Hola a todos';
  },
};

app.use(
  '/api',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`);
});
