Refer [here](IMPLEMENTATION.md) for details about implementation

## Getting Started

### Dependencies

- Node.js version 10.13 or later
- MongoDB

### Local setup

- In the root of the repo, rename `.env.local.example` file to `.env.local` and update its content to include your mongodb connection string and database name.
- Execute the following commands in a terminal in the root of the repo:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment (CI/CD)

The application is currently deployed on Vercel and the database is deployed on mongoDB Atlas. Any commit to the Github repo can be automatically deployed to Vercel.
