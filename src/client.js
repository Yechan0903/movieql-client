import { ApolloClient, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: "https://4000-yechan0903-graphqlapi-ahho8w6zljt.ws-us106.gitpod.io/",
    cache: new InMemoryCache(),
});



export default client;