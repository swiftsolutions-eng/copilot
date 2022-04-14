import fetch from 'cross-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

export const createApolloClient = (uri: string, secret: string) => {
  const httpLink = new HttpLink({
    uri,
    fetch,
  })

  const authLink = setContext(async () => {
    return {
      headers: {
        'x-hasura-admin-secret': secret,
      },
    }
  })

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return apolloClient
}
