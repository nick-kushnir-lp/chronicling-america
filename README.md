# chronicling-america
SPA about american companies

## Backend Setup

1. **Install Dependencies**: Navigate to the `backend` directory and run:

    ```bash
    npm install
    ```

2. **Set Up Environment Variables**: Create a `.env` file in the `backend` directory with the following content:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/yourdatabase"
    DB_USER=your_db_user
    DB_HOST=localhost
    DB_NAME=your_db_name
    DB_PASSWORD=your_db_password
    DB_PORT=5432
    PORT=3000
    ```


3. **Generate Prisma Client**: This will generate the necessary Prisma client files.

   ```bash
    npx prisma generate
    ```

4. **Migrate Database Schema**: Run the Prisma migration to set up the database schema:

    ```bash
    npx prisma migrate dev --name init
    ```

5. **Import CSV Data**: If you have the `fortune1000_2024.csv` file, before running check if in `scripts/importCsv.ts` you've added your postgresDb credentials
   run the following command to import the data into the database:

    ```bash
    npm run import-csv
    ```

6. **Run the Server**: Start the development server:

    ```bash
    npm run dev
    ```

## Frontend Setup

1. **Install Dependencies**: Navigate to the `frontend` directory and run:

    ```bash
    npm install
    ```

2. **Set Up Environment Variables**: Create a `.env` file in the `frontend` directory with the following content:

    ```env
    VITE_API_BASE_URL=http://localhost:3000/api
    ```

3. **Run the Frontend**: Start the development server:

    ```bash
    npm run dev
    ```

## Running on a Different Machine

To run the project on a different machine:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Follow the backend and frontend setup steps mentioned above.

3. Ensure PostgreSQL is installed and configured correctly on the machine.

4. Make sure the CSV file is available for importing data.

## Notes

- The backend server runs on port `3000` by default.
- The frontend development server runs on port `5173` by default.
- Both frontend and backend should be running concurrently for the application to function correctly.

## License

This project is licensed under the ISC License.
