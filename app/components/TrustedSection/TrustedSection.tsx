import { HeroSection } from "./Scroll";
import { Sparkles } from "./sparkles";

const TrustedSection = () => {
  return (
    <div className=" w-full overflow-hidden bg-black h-fit">
      <div className="mx-auto mt-32 w-full">
        <div className="text-center text-3xl text-foreground">
          <span className=" text-indigo-200">Trusted by experts.{"  "}</span>
          <span className="text-indigo-200">Used by the leaders.</span>
        </div>
        <HeroSection />
      </div>

      <div className="relative -mt-32 h-96 w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8350e8,transparent_70%)] before:opacity-40" />
        <div className="absolute -left-1/2 top-1/2 aspect-[1/0.7] z-10 w-[200%] rounded-[100%] border-t border-white/20 bg-zinc-900" />
        <Sparkles
          density={1200}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
};

export default TrustedSection;
