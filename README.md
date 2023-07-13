# plarium-assignment

Build a simplified REST API application for a gaming company.

## Installation

### PostgreSQL

**MacOS**

- [Postgres.app](https://postgresapp.com/)
- [Postico](https://eggerapps.at/postico2/)

#### Configure

- [connect to postgres locally](https://eggerapps.at/postico/docs/v1.0.2/connect-to-local-postgresql-server.html)

Create a database `postgres` and execute the following command:

```sql
CREATE SCHEMA game;
```

### Run the project

1. update .env file to your params

2. install node version v16.19.0

3. Run the following in order

- first run "npm i" & "npm run dev"
- Go to Postico/PgAdmin and import the "game_actions.csv" to "game"."game_actions" model(please make sure to match the cols)

## There are two endpoints available

- GET /user: Obtain information about a user from the service.
- GET /platforms: Obtain information about all platforms from the service
- otherwise will end the connection.
