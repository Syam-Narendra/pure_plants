import { NavBar } from "~/Components/Navbar";
import VideoPage from "~/Components/VideoHomePage";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "~/Components/Footer";
import BackgroundSlide from "~/Components/BackgroundSlide";
import HomePageMainImages from "~/Components/HomePageMainImages";
export const meta: MetaFunction = () => [{ title: "Pure Plants" }];

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
];

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <NavBar />
      <VideoPage />
      <HomePageMainImages />
      <BackgroundSlide/>
      <Footer />
    </div>
  );
};

export default Index;
