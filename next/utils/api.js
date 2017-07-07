import fetch from 'isomorphic-unfetch'

// POST request
// -----------------------------------------------------

export const postRequest = async (url, body) => {

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

// GraphQL
// -----------------------------------------------------

export const graphqlRequest = async (query, req) => {

  let params = {
    method: 'POST',
    body: JSON.stringify({
      query: query
    }),
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  // If this call is made from the server, grab the next.js cookie
  // holding the sessionId, and pass it to the API via a header.
  if(req && req.cookies && req.cookies['artefact.sid']) {
    params.headers['X-Session-Id'] = req.cookies['artefact.sid'];
  }

  const res = await fetch(API_BASE_URL + '/graphql', params)
  return res
}
