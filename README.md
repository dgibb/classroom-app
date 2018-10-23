# Classroom App

A basic crud app to get familiar with the basics of postgres, relational database concepts, knex, and backend development in node.

### Prerequisites

Have an instance of postgres running that you can connect to to use for this app.

## Getting Started

* Download or clone the repository
* cd into the project directory
* run `npm install` to install dependencies
* create a .env file from the .env.sample by duplicating and changing the details to fit your environment
* run database migrations with `npm run migrate-rollback` then `npm run migrate-latest`
* seed database with `npm run knex-seed`
* start the app with `npm run start`
