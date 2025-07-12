import { NavBar } from "~/Components/Navbar";
import VideoPage from "~/Components/VideoHomePage";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Pure Plants" }];

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.png", type: "image/png" },
];

const Index: React.FC = () => {
  return (
    <div>
      <div className="relative min-h-screen bg-[#f5f3f0]">
        <NavBar />
        <VideoPage />
      </div>
    </div>
  );
};

export default Index;
