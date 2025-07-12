import { NavBar } from "~/Components/Navbar";
import VideoPage from "~/Components/VideoHomePage";

const Index = () => {
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
