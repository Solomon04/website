import {useMemo} from 'react';
import {ApolloClient, ApolloLink, HttpLink, InMemoryCache, NormalizedCacheObject,} from '@apollo/client';
import {GetServerSidePropsContext} from 'next';

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient(context?: GetServerSidePropsContext) {
    const linkConfig = [];
    const isServer = typeof window === 'undefined';

    const httpLink = new HttpLink({
        uri: 'https://graphql.cosmicjs.com/v2', // Server URL (must be absolute)
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    });
    linkConfig.push(httpLink);

    return new ApolloClient({
        link: ApolloLink.from(linkConfig),
        cache: new InMemoryCache({}),
    });
}

export function initializeApollo(
    initialState: NormalizedCacheObject | null = null,
    context?: GetServerSidePropsContext
): ApolloClient<NormalizedCacheObject> {
    const _apolloClient = apolloClient ?? createApolloClient(context);

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();
        // Restore the cache using the data passed from getStaticProps/getServerSideProps
        // combined with the existing cached data
        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') {
        return _apolloClient;
    }
    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = _apolloClient;
    }

    return _apolloClient;
}

export function useApollo(
    initialState: NormalizedCacheObject | null
): ApolloClient<NormalizedCacheObject | null> {
    return useMemo(() => initializeApollo(initialState), [initialState]);
}
