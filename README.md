# MoJack Media

This repository contains the beginnings of a dynamic blogging website. The `public/` directory holds static HTML, CSS, and JavaScript files, while the `server/` directory contains a simple Express backend.

## Getting Started

1. **Install Node dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm start
   ```
   The server will serve files from the `public/` directory and expose placeholder API routes under `/api`.

## Next Steps

- Replace the in-memory data structures in `server/server.js` with a real database (MongoDB, PostgreSQL, etc.).
- Implement authentication so only you can create or edit projects and entries.
- Build an admin interface that allows creating projects, uploading images, and managing suggestions directly from the browser.
- Expand the frontend to load and display data from the API routes.
- Implement comment storage using your database or Firebase.
- Add styling and integrate advertisement slots in the layout.
