import fetch from 'cross-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: 'https://hasura-argo.swiftsolutions.id/v1/graphql',
  fetch,
})

const authLink = setContext(async () => {
  return {
    headers: {
      'x-hasura-admin-secret': 'gSMVwVRktCv9JS4R',
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default apolloClient
