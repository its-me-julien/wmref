import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />

        {/* Favicon & App Icons */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

       {/* Open Graph / Facebook Meta Tags */}
       <meta property="og:title" content="World Mobile Referral Guide - How to Participate?" />
       <meta
        property="og:description"
        content="Learn how to participate in World Mobile's referral opportunities."
      />


        <meta property="og:url" content="https://worldmobilereferral.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://worldmobilereferral.com/social.png" />

{/* Twitter Meta Tags */}
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="World Mobile Referral Guide - How to Participate?" />
<meta
  name="twitter:description"
  content="Learn how to participate in World Mobile's referral opportunities."
/>
<meta name="twitter:image" content="https://mobilerefer.com/social.png" />

{/* Structured Data (JSON-LD for SEO) */}
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "World Mobile Referral Guide",
  "url": "https://mobilerefer.com/",
  "logo": "https://mobilerefer.com/web-app-manifest-512x512.png",
  "description": "Learn how to participate in World Mobile's referral opportunities."
})}} />

      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
