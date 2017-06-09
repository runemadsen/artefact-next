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
