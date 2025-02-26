import Header from "@/components/Header";
import Head from "next/head";

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

    </main>
  );
}
