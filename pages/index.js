import Head from "next/head";
import PPPBar, { usePPP } from "../components/PPPBar";
import SiteHeader from "../components/SiteHeader";
import SiteHero from "../components/SiteHero";
import BigReasons from "../components/BigReasons";
import VSCode from "../components/VSCode/VSCode";
import Pricing from "../components/Pricing";
import TimeIsMoney from "../components/TimeIsMoney";
import BetterDevFooter from "../components/BetterDevFooter";
import Reasons from "../components/Reasons";
import CommandPalette from "../components/CommandPalette";

export default function Home() {
  const { coupon, discount, country, finalPrice } = usePPP(35);

  return (
    <>
      <Head>
        <title>Productive VS Code 🔥</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CommandPalette />
      {/* <PPPBar price={35} /> */}
      {/* <SiteHeader /> */}

      <main className="space-y-60">
        <SiteHero />
        <Reasons />
        <BigReasons />
        <VSCode />
        <TimeIsMoney />

        {/* what youll learn */}
        <Pricing coupon={coupon} discount={discount} price={finalPrice} />

        {/* whats in the course */}
        {/* faq */}
        {/* who am i */}
      </main>

      <footer></footer>
      <BetterDevFooter />
    </>
  );
}
