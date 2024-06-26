import { ApolloLink, createHttpLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { onError } from "@apollo/client/link/error";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getAuthSession } from "@/lib/auth";

export const authLink = setContext(async (_, { headers }) => {
  const session = await getAuthSession();
  if (session?.user.token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${session.user.token}`,
      },
    };
  } else {
    return { headers };
  }
});

const errorLink = onError((errors) => {
  const { graphQLErrors, networkError } = errors;
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const { getClient } = registerApolloClient(() => {
  const httpLink = createHttpLink({
    uri: process.env.HASURA_GQL_URL,
  });

  const link = ApolloLink.from([authLink, errorLink, httpLink]);

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
});
