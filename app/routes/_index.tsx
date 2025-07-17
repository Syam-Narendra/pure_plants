import type { LinksFunction, MetaFunction } from "@remix-run/node";
import BackgroundSlide from "~/components/BackgroundSlide";
import Footer from "~/components/Footer";
import HomePageMainImages from "~/components/HomePageMainImages";
import { NavBar } from "~/components/Navbar";
import VideoPage from "~/components/VideoHomePage";
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
      <Footer />
    </div>
  );
};

export default Index;
