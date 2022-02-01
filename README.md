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

### Testing

- Run the following commands to build and start a local server for cypress to use, and run cypress:

```bash
npm run build
npm run start
npm run cypress
```

- In cypress's interactive tool, run the tests
