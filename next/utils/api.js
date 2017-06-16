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

const graphqlQuery = async (req, query) => {

  let params = {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query
    })
  }

  // If this call is made from the server, grab the next.js cookie
  // holding the sessionId, and pass it to the API via a header.
  if(req && req.cookies && req.cookies['artefact.sid']) {
    params.headers['X-Session-Id'] = req.cookies['artefact.sid'];
  }

  const res = await fetch(API_BASE_URL + '/graphql', params)

  return res
}

// TODO: GraphQL Mutation
// -----------------------------------------------------

export {
  postRequest,
  graphqlQuery
}
