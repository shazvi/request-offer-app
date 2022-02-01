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

## Implementation

### How I would do things differently

- I used bootstrap to speed up the layout building process (since I'm already familiar with it). But of course in a real project we would use existing styling tools (eg: tailwind) with existing style guidelines.
- I used `react-hook-form` library for easier and quicker form management. But depending on the requirements of a real world application, it might be better to not rely on third party libraries if we can write the functionality ourselves.
- It's better to have a Country selector dropdown instead of a text field. It is easier to manage on the backend when the country value is a known string.
- It might be more intuitive to have the "Send Offer Request" button below the price estimate section.

### Things to be completed (if I had more time)

I'd be happy to discuss these implementations during a walkthrough

- File upload
- Server side validation. Client side validation isn't completely safe. Malicious users can easily circumvent it.
- Check browser compatibility with all popular browsers
- "Select Timeline" dropdown styling
- "Creative briefing" tooltip styling
