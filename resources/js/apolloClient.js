
import ApolloClient from "apollo-client";
import { Query, Mutation, Subscription, ApolloConsumer   } from "react-apollo";
import gql from "graphql-tag";
import { ApolloLink, from } from 'apollo-link';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

const customFetch = (uri, options) => {
    let optionsBody = options.body;
    if(typeof optionsBody === 'string') {
        optionsBody = JSON.parse(optionsBody);
    } else {
        let fileLength = Object.keys(JSON.parse(optionsBody.getAll('map'))).length;
        for (let i = 0; i< fileLength; i++) {
            optionsBody.append('files[]' ,optionsBody.get(i));
            optionsBody.delete(i);
        }
        optionsBody.delete('map');
    }
    return axios.post(uri, optionsBody).then(
        data => {
            if(Array.isArray(data.data)) {
                return new Response(JSON.stringify(data.data[0]));
            }
            return new Response(JSON.stringify(data.data));
        }
    );
};
const link = createUploadLink(
    { fetch: customFetch });

const cache = new InMemoryCache();

const beforeMiddleware = new ApolloLink((operation, forward) => {
    NProgress.start();
    return forward(operation);
});

const afterMiddleware = new ApolloLink((operation, forward) => {
    NProgress.done();
    return forward(operation);
});

window.apolloClient = new ApolloClient({
    link: from([
        beforeMiddleware,
        afterMiddleware.concat(link),
    ]),
    cache
});
window.Query = Query;
window.Mutation = Mutation;
window.Subscription = Subscription;
window.ApolloConsumer = ApolloConsumer;
window.gql = gql;




// import { split } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';
// import { WebSocketLink } from 'apollo-link-ws';
// import { getMainDefinition } from 'apollo-utilities';
// const httpLink = new HttpLink({
//     uri: 'http://localhost:3000/graphql'
// });
//
// const wsLink = new WebSocketLink({
//     uri: `ws://localhost:5000/`,
//     options: {
//         reconnect: true
//     }
// });

// const link = split(
//     // split based on operation type
//     ({ query }) => {
//         const { kind, operation } = getMainDefinition(query);
//         return kind === 'OperationDefinition' && operation === 'subscription';
//     },
//     wsLink,
//     httpLink,
// );