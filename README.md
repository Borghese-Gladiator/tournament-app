# Tournament App
Streamline setting up tournaments for your friends and collecting money

## Table of Contents


## Features

### Pages
- authenticate.js - shows register and login components
- join.js - shows join tournament page when user clicks on tournament invite link
- protected pages
  - dashboard.js - shows profile, tournament participation, and created tournaments
  - create_tournament.js

## Architecture
Isolated Monorepo
- Next.js frontend in JavaScript => deploy to Vercel?
  - Apollo Client to send GraphQL requests
- Apollo Server backend in TypeScript => deploy to Heroku?

### Next.js Frontend
- `npx create-next-app client`
- `npm install @mui/material @emotion/react @emotion/styled` - Material UI 5
- `npm i @mui/icons-material`
- Layout.js
  - Navbar.js - responsive and   
    - AuthModa.js

- wrote up public pages - authenticate.js, join.js
- wrote up protected pages - \[id\].js, \[id\]/create_tournament.js

#### Client Bug Fixes
- https://stackoverflow.com/questions/56622246/react-material-ui-modal-typeerror-cannot-read-property-hasownproperty-of-unde => DONE, modal needs content inside a div

### Apollo Server Backend
- `npm init -y`
- `npm i apollo-server graphql`
- `touch index.js` and add basic code from first-apollo-server app

### Coding Standards
- Linting
  - frontend - ESLint
  - backend - ESLint with tsconfig.json
- Testing
  - frontend
    - Jest unit tests written per function
    - Optional: Jest and React Testing Library for page
  - backend
    - Jest unit tests written per GraphQL operation

### Bootstrapping Notes
- Client
  - `npx create-next-app client`
- Server
  - `npm init -y`
  - `touch .gitignore` [https://github.com/github/gitignore/blob/main/Node.gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)


## Glossary
Isolated Monorepo - A repository that contains components that are completely isolated to the directory they are contained in (eg. JS frontend and Python backend)

Shared Monorepo - A repository that contains components that share code or configuration from the root directory (eg. Yarn workspace or Lerna project)