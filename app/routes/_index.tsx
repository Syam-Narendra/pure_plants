import type { LinksFunction, MetaFunction } from "@remix-run/node";
import BackgroundSlide from "~/Components/BackgroundSlide";
import Footer from "~/Components/Footer";
import HomePageMainImages from "~/Components/HomePageMainImages";
import { NavBar } from "~/Components/Navbar";
import VideoPage from "~/Components/VideoHomePage";
export const meta: MetaFunction = () => [{ title: "Pure Plants" }];

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
];

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <NavBar isHome={true} />
      <VideoPage />
      <HomePageMainImages />
      <BackgroundSlide />
      <Footer />
    </div>
  );
};

export default Index;
