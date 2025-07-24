import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import BackgroundSlide from "~/components/HeroSection/BackGroundSlide/OurServices";
import HomePageMainImages from "~/components/HeroSection/HomePageMainImages";
import VerticalScroll from "~/components/HeroSection/StickyScroll";
import TrendingProducts from "~/components/HeroSection/TrendingProducts";
import VideoPage from "~/components/HeroSection/VideoHomePage";
import { NavBar } from "~/components/Navbar";
import TrustedSection from "~/components/TrustedSection/TrustedSection";
import { businessName } from "~/data/text.en";

export const meta: MetaFunction = () => [
  {
    title: businessName
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(" "),
  },
];

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar isHome={true} />
      <VideoPage />
      <HomePageMainImages />
      <BackgroundSlide />
      <VerticalScroll />
      <TrendingProducts />
      {/* <CircularTestimonialsDemo /> */}
      <TrustedSection />
      <Footer />
    </div>
  );
};

export default Index;
