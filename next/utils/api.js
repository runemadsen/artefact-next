import fetch from 'isomorphic-unfetch'

// POST request
// -----------------------------------------------------

const postRequest = async (url, body) => {

  const res = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  return res

}

// GraphQL Query
// -----------------------------------------------------

const graphqlQuery = async (query) => {

  const res = await fetch(API_BASE_URL + '/graphql', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query
    })
  })

  return res
}

// TODO: GraphQL Mutation
// -----------------------------------------------------

export {
  postRequest,
  graphqlQuery
}
