import { useDynamicImport } from "~/hooks/DynamicImport";

export default function BackgroundSlide() {
  const Marquee = useDynamicImport<React.ComponentType<any>>(
    () => import("react-fast-marquee")
  );

  const images = [
    "/404-image.png",
    "https://plus.unsplash.com/premium_photo-1664193516160-27a3fa05901e?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1530968464165-7a1861cbaf9f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677530604826-badbdca29b3a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const services = [
    "Indoor",
    "Outdoor Plants",
    "Flowering Plants",
    "Decorative Plants",
  ];

  if (!Marquee) return null;

  return (
    <div className="relative w-full h-[50vh] min-h-[300px] bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="absolute z-20 left-4 sm:left-0 sm:right-0 sm:mx-auto sm:w-fit flex flex-col">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-helvetica mb-2 text-left">
          Our Services:
        </p>
        <div className="text-left">
          {services.map((serviceName, index) => (
            <h1
              key={index}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-helvetica uppercase leading-tight opacity-90"
            >
              {serviceName}
            </h1>
          ))}
        </div>
  </div>

      <div className="absolute inset-0 z-0">
        <Marquee speed={80} gradient={false} className="h-full">
          {images.map((src, index) => (
            <div
              key={index}
              className="w-[80vw] h-[45vw] sm:w-[40vw] sm:h-[22.5vw] md:w-[30vw] md:h-[16.875vw] mx-2 sm:mx-4 flex-none bg-cover bg-center"
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