import Header from "@/components/Header";
import Head from "next/head";
import Hero from "@/components/hero";

{/* COMMENTED:
import Referral from "@/components/referral";
*/}
export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      

    <Head>
    <title>World Mobile Referral Guide</title>
    <meta
      name="description"
      content="Learn how to participate in World Mobile's referral opportunities."
    />

        <link rel="canonical" href="https://worldmobilereferral.com/" />
      </Head>
      
      <Hero />
      {/* COMMENTED:
      < Referral />
       */}

    </main>
  );
}
