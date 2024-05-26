import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Steps from "../components/home/Steps";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AssetsYouCanTrade from "../components/home/AssetsYouCanTrade";
import Features from "../components/home/Features";
import TradeWithUs from "../components/home/TradeWithUs";
import Plans from "../components/home/Plans";
import Platforms from "../components/home/Platforms";
import WhyTradeCrypto from "../components/home/WhyTradeCrypto";
import FairPricing from "../components/home/FairPricing";
import Reviews from "../components/home/Reviews";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <WhyChooseUs />
      <Features />
      <AssetsYouCanTrade />
      <WhyTradeCrypto />
      <FairPricing />
      <TradeWithUs />
      <Plans />
      <Reviews />
      {/* <Stats /> */}
      <Steps />
      <Platforms />
    </MainLayout>
  );
}
