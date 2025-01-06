# Express.js 500 Error on Database Query Failure

This repository demonstrates a common error in Express.js applications where a 500 Internal Server Error is thrown instead of a 404 Not Found error when a database query fails to find a resource.  The example uses a simplified database interaction. In a real-world application, you would replace this with your database library's specific methods.

## Bug Description

The provided Express.js route handler fetches a user from a database based on the ID provided in the request parameters. If the user is not found, it should return a 404 error. However, if the database query throws an error (e.g., a connection error or a query error), the Express.js application throws a 500 Internal Server Error without providing any useful information to the client.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Start the server using `node bug.js`.
4. Make a request to `/users/nonexistent-id`.  You will receive a 500 error.

## Solution

The solution involves proper error handling around the database query, catching potential exceptions, and returning the appropriate HTTP status code (404) to the client.  The `bugSolution.js` file demonstrates the corrected code.
