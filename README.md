This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).


### Topics Covered

- Run the API Project on your Machine
- Setup the Next.js 15.2.1 Project- Create the CRUD API in Next.js 15.2.1 Route Handlers
    - Handle GET and POST Requsts
    - Handle GET, PATCH, and DELETE Requests
- Test the CRUD API
    - Get a Product
    - Add a Cart
    - Get a Cart
- Conclusion

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.


## Backend - API

GET request to /api/product to retrieve the list of products.
GET request to /api/cart to retrieve the list of shopping cart.
POST request to /api/cart o create a new shopping cart (send product in the request body).

## Front End - API

// front/product consume your /api/product
// front/cart consume your /api/cart
// front/product-combination process the function findBestCombination

