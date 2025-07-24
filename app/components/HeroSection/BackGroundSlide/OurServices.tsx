import { services } from "~/data/text.en";
import { ScrollVelocityBg } from "./HorizontalScroll";

export default function OurServices() {
  return (
    <div className="relative w-full h-[60vh] min-h-[300px] bg-black text-white flex items-center justify-center perspective-[1000px] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

      <div className="relative z-20 flex flex-col items-start text-left px-4 sm:px-0">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-helvetica mb-2">
          Our Services:
        </p>
        <div>
          {services.map((serviceName, index) => (
            <h1
              key={index}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-helvetica uppercase leading-tight opacity-90"
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
