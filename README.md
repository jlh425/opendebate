npx create-next-app@latest my-app --typescript --tailwind --eslint
    needs eslint-config-next & "next": "13.4.12",
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npm install @clerk/nextjs  follow steps at->https://clerk.com/docs/quickstarts/nextjs
npm i next-themes
npx shadcn-ui@latest add dropdown-menu
npm i -D prisma
    npx prisma init
        everytime we change the .prisma
        npx prisma generate
        npx prisma db push
            if need to reset database use npx prisma migrate reset
npm i @prisma/client

npx prisma studio  -> used in production to see aspects of app like profiles etc

npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form

npm install uploadthing @uploadthing/react react-dropzone    
       see https://docs.uploadthing.com/nextjs/appdir

npm i axios
npm i uuid
npm i -D @types/uuid

npx shadcn-ui@latest add tooltip
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add scroll-area

npm i zustand
npx shadcn-ui@latest add avatar
npm i query-string
npx shadcn-ui@latest add select
npx shadcn-ui@latest add command
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add badge

npm i socket.io
npm i socket.io-client

npx shadcn-ui@latest add popover

npm i @tanstack/react-query
npm i date-fns
npm i livekit
npm i @livekit/components-react
npm install livekit-client @livekit/components-react @livekit/components-styles --save
npm i livekit-server-sdk

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
