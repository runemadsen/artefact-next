# Artefact

## Setup

These are good packages to install in Atom:
- language-styled-jsx

## Local development

First create a `.env` file in your repo with the needed vars.

Then, run the following command in the terminal:
`createdb artefact`

Then, install the dependencies:
`npm install`

Then, migrate the database:
`npm run migrate`

`npm run dev` and open `localhost:3000`

## Dynamic Routing

This app uses [`next-routes`](https://github.com/fridays/next-routes) to allow for dynamic routing. Therefore, use the `Link` and `Router` classes from that repo instead of the native ones from Next.

## GraphQL API

To read up on why we use connections, edges, and nodes, take a look at [this article](http://graphql.org/learn/pagination/).

To investigate the graphql API, visit `localhost:4000/graphql` for an interactive API explorer.
