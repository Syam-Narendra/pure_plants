import type { LinksFunction, MetaFunction } from "@remix-run/node";
import BackgroundSlide from "~/components/HeroSection/BackGroundSlide/BackgroundSlide";
import Footer from "~/components/Footer";
import HomePageMainImages from "~/components/HeroSection/HomePageMainImages";
import { NavBar } from "~/components/Navbar";
import VideoPage from "~/components/HeroSection/VideoHomePage";
import StickyScroll from "~/components/HeroSection/StickyScroll";
import { CircularTestimonialsDemo } from "~/components/Testimonial/TestimonialCards";
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
      <StickyScroll/>
      <CircularTestimonialsDemo/>
      <TrustedSection/>
      <Footer />
    </div>
  );
};

export default Index;
