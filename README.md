# NestJS Efrei

NestJS Api, featuring a crud for users, a Logger in a dynamic module and a middleware creating custom request headers

## Installation

Clone the repository using

SSH
```bash
  git clone git@github.com:Rom2-ls/nestjs-efrei.git
```

HTTPS
```bash
  git clone https://github.com/Rom2-ls/nestjs-efrei.git
```

Enter the folder using
```bash
  cd nestjs-efrei
```

Launch the project with :

Docker

```bash
  docker compose build
  docker compose up -d
```

Without Docker

```bash
  npm install
  npm run build
  npm run start:dev
```

Once the project is running follow the link

http://localhost:3000

## All usable routes

#### GET

- /                --> Root route
- /users           --> Retrieves a list of users
- /users/id        --> Retrieves a specific user by ID
- /not-implemented --> Placeholder for a route that is not implemented yet

#### POST
- /users --> Creates a user

#### PUT
- /users/id --> Updates a user

#### DELETE
- /users/id --> Deletes a users