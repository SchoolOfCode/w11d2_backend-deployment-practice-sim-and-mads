# Express/Postgres API for Shopping List Data

When attempting to deploy this repo, remember to:

1. locally run the `npm run createTable` script (to set up the required database table).

   - You'll need to have locally set a `DATABASE_URL` environment variable in a `.env` file.

   - Normally you wouldn't interact with production databases from a local machine, but we'll ignore this for now (as we're just focusing on getting things deployed).

2. ensure the `DATABASE_URL` variable is set (not just locally but also wherever you're deploying to).

## Bonus:

Explore as many of the following as you like:

- Extend the API and frontend so that they have more features and continue to talk to one another:
  - A way to mark an item in the database as "completed"
  - Filtering, sorting, paginating of items in the shopping list whilst keeping to a RESTful interface.
- See the best practices for Express (see: https://expressjs.com/en/advanced/best-practice-performance.html) in production and try to implement as many as you can (where appropriate). For example:
  - Logging properly
  - Middlewares like: [helmet](https://www.npmjs.com/package/helmet), rate limiting, etc.
  - [Handling errors/exceptions properly](https://expressjs.com/en/guide/error-handling.html)
- Sanitising/validating/checking (especially user input) in the request (e.g. what's been sent in the `query`, `params`, `body`, `headers`, etc.) using something like: https://www.npmjs.com/package/express-validator

Make sure that you commit, push and deploy small increments of changes/code. Those changes should be reflected automatically, if you have automated deployments enabled.
