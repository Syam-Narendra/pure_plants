import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Footer from "~/components/Footer";
import BackgroundSlide from "~/components/HeroSection/BackGroundSlide/BackgroundSlide";
import HomePageMainImages from "~/components/HeroSection/HomePageMainImages";
import VerticalScroll from "~/components/HeroSection/StickyScroll";
import TrendingProducts from "~/components/HeroSection/TrendingProducts";
import VideoPage from "~/components/HeroSection/VideoHomePage";
import { NavBar } from "~/components/Navbar";
import TrustedSection from "~/components/TrustedSection/TrustedSection";

export const meta: MetaFunction = () => [{ title: "Pure Plants" }];

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
