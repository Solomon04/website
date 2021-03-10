import "tailwindcss/tailwind.css";
import {FunctionComponent, useEffect} from "react";
import {useApollo} from "../src/lib/apolloClient";
import {AppProps} from "next/app";
import {ApolloProvider, NormalizedCacheObject} from "@apollo/client";
import {useRouter} from "next/router";
import * as Fathom from 'fathom-client';

const App: FunctionComponent<AppProps> = ({Component, pageProps}) => {
    const {initialApolloState} = pageProps as {
        initialApolloState: NormalizedCacheObject | null;
    };
    const apolloClient = useApollo(initialApolloState);

    const router = useRouter();
    useEffect(() => {
        // Initialize Fathom when the app loads
        Fathom.load("MKYFJHXW", {
            includedDomains: ['kingsolomon.me'],
        });

        function onRouteChangeComplete() {
            Fathom.trackPageview()
        }

        // Record a pageview when route changes
        router.events.on('routeChangeComplete', onRouteChangeComplete);

        // Unassign event listener
        return () => {
            router.events.off('routeChangeComplete', onRouteChangeComplete)
        }
    }, []);

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
};

export default App;
