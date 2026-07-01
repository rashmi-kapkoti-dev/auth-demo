# auth-demo

A simple full-stack app for learning authentication with Google login.

## Stack

- **Client:** React, Vite, React Router
- **Server:** Express, MongoDB, JWT

## Project structure

```
auth-demo/
├── client/   # React frontend
└── server/   # Express API
```

## Setup

Create `client/.env`:

```
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

Create `server/.env`:

```
PORT=5000
MONGODB_URI=your-mongodb-uri
GOOGLE_CLIENT_ID=your-google-client-id
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
CLIENT_URL=http://localhost:3000
```

Use the same Google Client ID in both files.

In Google Cloud Console, add `http://localhost:3000` as an authorized JavaScript origin.

## How to start the app

1. Clone the repo and open the project folder.

2. Install dependencies (only needed the first time):

```bash
cd client
npm install

cd ../server
npm install
```

3. Add your `.env` files in `client/` and `server/` (see above).

4. Start the **server** first:

```bash
cd server
npm run dev
```

You should see:

```
MongoDB Connected
Server running on http://localhost:5000
```

5. Open a **second terminal** and start the **client**:

```bash
cd client
npm run dev
```

The app opens at http://localhost:3000 (Vite may open it in your browser automatically).

6. Click **Sign in with Google** on the login page.

7. After a successful login, you are redirected to `/dashboard`.

### URLs

| Service  | URL                      |
| -------- | ------------------------ |
| Frontend | http://localhost:3000    |
| Backend  | http://localhost:5000    |

### Stop the app

Press `Ctrl + C` in each terminal to stop the client and server.

## API

- `POST /api/auth/google` — Google login. Sets access and refresh tokens as HTTP-only cookies.
- `POST /api/auth/logout` — Clears auth cookies.
- `GET /api/users/me` — Returns the logged-in user (protected).
- `GET /api/admin/panel` — Admin-only endpoint (protected + RBAC).

## Roles

Users get the `user` role by default. Set `ADMIN_EMAIL` in `server/.env` to your Google account email to get the `admin` role on login.
