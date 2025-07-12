import { NavBar } from "~/Components/Navbar";
import VideoPage from "~/Components/VideoHomePage";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import ScrollImage from "~/Components/ScrollImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const meta: MetaFunction = () => [{ title: "Pure Plants" }];

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
];

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <NavBar />
      <VideoPage />
      <ScrollImage />
       {/* <VideoPage /> */}
    </div>
  );
};

export default Index;
