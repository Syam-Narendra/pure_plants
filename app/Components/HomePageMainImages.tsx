import { heading, homePageImages, tagLine } from "~/data/text.en";
import { useEffect, useRef } from "react";

export default function HomePageMainImages() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollY = window.scrollY;
        const translateX = -scrollY * 0.2;
        scrollContainerRef.current.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <div className="mx-auto">
        <div className="flex justify-center overflow-hidden p-8">
          <div
            ref={scrollContainerRef}
            className="flex flex-row gap-4 md:gap-6 lg:gap-8 transition-transform duration-300 ease-out"
          >
            {homePageImages.map((url, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-gray-100 flex-shrink-0"
                style={{ width: "300px" }}
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={url}
                    alt="Model in flowing black fabric with dramatic pose"
                    className="h-full w-full object-cover object-left transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: "0% 50%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center lg:mt-12">
          <h1 className="text-2xl font-light tracking-wider text-white md:text-3xl lg:text-4xl">
            {heading}
          </h1>
          <p className="mt-2 text-sm text-gray-400 md:text-base">{tagLine}</p>
        </div>
      </div>
    </div>
  );
}
