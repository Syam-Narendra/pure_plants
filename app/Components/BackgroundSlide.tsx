import { useDynamicImport } from "~/hooks/DynamicImport";
import { MarqueeProps } from "react-fast-marquee";
import { backGroundSlideImages, services } from "~/data/text.en";
export default function BackgroundSlide() {
  const Marquee = useDynamicImport<React.ComponentType<MarqueeProps>>(
    () => import("react-fast-marquee")
  );

  if (!Marquee) return null;

  return (
    <div className="relative w-full h-[50vh] min-h-[300px] bg-black text-white flex items-center justify-center perspective-[1000px] ">
      <div className="absolute z-20 left-4 sm:left-0 sm:right-0 sm:mx-auto sm:w-fit flex flex-col">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-helvetica mb-2 text-left">
          Our Services:
        </p>
        <div className="text-left">
          {services.map((serviceName, index) => (
            <h1
              key={index}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-helvetica uppercase leading-tight opacity-90"
            >
              {serviceName}
            </h1>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <Marquee speed={80} gradient={false} className="h-full">
          {backGroundSlideImages.map((src, index) => (
            <div
              key={index}
              className="w-[80vw] h-[45vw] sm:w-[40vw] sm:h-[22.5vw] md:w-[30vw] md:h-[16.875vw] mx-6 sm:mx-12 flex-none bg-cover bg-center transform [transform-style:preserve-3d]"
              style={{
                backgroundImage: `url(${src})`,
              }}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
