import "tailwindcss/tailwind.css";
import {FunctionComponent} from "react";
import {useApollo} from "../src/lib/apolloClient";
import {AppProps} from "next/app";
import {ApolloProvider, NormalizedCacheObject} from "@apollo/client";

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const { initialApolloState } = pageProps as {
    initialApolloState: NormalizedCacheObject | null;
  };
  const apolloClient = useApollo(initialApolloState);

  return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
  );
};

export default App;
