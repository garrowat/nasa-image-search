# Welcome to NASA Images Search

Note: This is currently a partial implementation and is not searching the API or offering paginated results interaction.

## Goals

- Try out Remix
- Use Apollo and GQL with Remix
- Complete the challenge of creating a paginated NASA image search gallery

- [Demo](https://vercel.com/garrowat/nasa-image-search/HJp4M6xFu7UaghEPCzcZzC38qv7B)

## Thoughts

- Remix turned out to be a poor choice for this project's constraints (GraphQL, 5 hours)
  - While there are a couple of examples out there, using Remix with Apollo is not well documented
  - Remix's docs claim that its data conventions make such data libraries unnecessary (so I might have been better off using GQL + remix, without a data lib like Apollo)
  - Time constraints were tight for me since I had to both learn Remix (not too hard) and GQL/Apollo (harder)
- I think I needed to set up an Apollo server with a data source within the app, rather than just try to pass fetched data into the resolver
  - I'd definitely like to learn more about Apollo, it seems like a neat way to manage server state with a GQL API (I've enjoyed using React Query, also a state management library)
- I may try finishing this challenge on my own time without GQL, as time allows, just as a good first Remix project
  - Remix handles form submission in a neat way via actions and I'd like to see that in action

## Installation

After cloning the repo, run `npm install` and then `npm run dev`. Open `http://localhost:3000` in your browser.

## Deployment

This app is set up to be deployed to Vercel, so you only need to fork and then [import the repo into Vercel](https://vercel.com/new). After that, deployment will be automatic.
