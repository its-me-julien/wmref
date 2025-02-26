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
    <title>World Mobile Referral</title>
        <meta
          name="description"
          content="World Mobile Referral Code"
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
