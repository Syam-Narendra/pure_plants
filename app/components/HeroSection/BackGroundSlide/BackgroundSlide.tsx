import { services } from "~/data/text.en";
import { ScrollVelocityBg } from "./VerticalScroll";
export default function BackgroundSlide() {
  return (
    <div className="relative w-full h-[50vh] min-h-[300px] bg-black text-white flex items-center justify-center perspective-[1000px] ">
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
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
        <ScrollVelocityBg />
      </div>
    </div>
  );
}
