# th2

Simple Node.js + Express API for managing students with MySQL.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root with:
   ```env
   DB_HOST=<your_mysql_host>
   DB_PORT=<your_mysql_port>
   DB_USER=<your_mysql_user>
   DB_PASSWORD=<your_mysql_password>
   DB_NAME=<your_database_name>
   ```
3. Start the server:
   ```bash
   node server/express.js
   ```

## API Endpoints

- `GET /students` - list all students
- `GET /students/:id` - get student by ID
- `POST /students` - add a student
- `PUT /students/:id` - update a student
- `DELETE /students/:id` - delete a student

## Notes

- The server listens on port `9999`.
- Use `Content-Type: application/json` for `POST` and `PUT` requests.
