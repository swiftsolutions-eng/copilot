import fetch from 'cross-fetch'
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client'
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

export const fetchRoles = async (
  uri: string,
  secret: string
): Promise<{ id: string; name: string }[]> => {
  const apolloClient = createApolloClient(uri, secret)

  const { data } = await apolloClient.query({
    query: gql`
      query {
        user_role {
          id
          name
        }
      }
    `,
  })

  return data?.user_role ?? []
}
