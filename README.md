This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

# Shadcn/ui
A UI library built using Stitches.js & Emotion.sh (with Tailwind  CSS). It is designed to be used in conjunction with

A UI library built using Stitches (v4), which is a CSS-in-JS solution that allows you to style your components
A UI library built using Stitches CSS in TypeScript. Built specifically for building design systems.    
   ```npx shadcn-ui@latest init```

__change font in layout.txt__

  ```import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Mono({ subsets: ["latin"] ,
weight:['400','500','600']});```

 ** here i changed the font
 ** add custom fonts like this :

  ``` return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased",IBMPlex.variable)}> // here i changed 
        {children}
        </body>
    </html>
  );```


  # config uring tailwind css
  __create a new config file__
  touch tailwind.conf.js

  __add this to your conf filter
  