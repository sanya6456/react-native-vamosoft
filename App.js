import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";
import { NativeWindStyleSheet } from "nativewind";
import Navigation from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const link = from([
  new HttpLink({
    uri: "https://graphql.contentful.com/content/v1/spaces/uqc7pcypi89w",
    headers: {
      Authorization: "Bearer yhXbILxafWv4IJnL5B9IQ9DVqHTVJzIfxTzNS3n4kls",
    },
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

const App = () => (
  <ApolloProvider client={client}>
    <StatusBar style="auto" />
    <View className="pb-12" />
    <Navigation />
  </ApolloProvider>
);

export default App;
