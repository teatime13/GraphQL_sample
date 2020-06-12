var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
//Roote reslver
var root = {
    message: () => 'Hello World!'
};
// Create an express server add a GraphQL endpoint
var app = express();
app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true  // graphqlと思っていたためはじめgraphql: trueにしたため{"errors":[{"message":"Must provide query string."}]}というのが出ていた
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));

