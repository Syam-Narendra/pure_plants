import { useEffect, useRef, useState } from "react";
import FilterBox from "./FilterBox";
import ImagesGrid from "./ImagesGrid";
import SearchBox from "./SearchBox";

const ProductsContainer = () => {
  const [searchBoxHeight, setSearchBoxHeight] = useState(0);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (searchBoxRef.current) {
        setSearchBoxHeight(searchBoxRef.current.offsetHeight);
      }
      const isMobile = window.innerWidth <= 768;
      if (isMobile) return;

      (async () => {
        try {
          const GSAP = (await import("gsap")).default;
          const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

          GSAP.registerPlugin(ScrollTrigger);

          const proxy = { skew: 0 };
          const skewSetter = GSAP.quickSetter(".skewElem", "skewY", "deg");
          const clamp = GSAP.utils.clamp(-20, 20);

          ScrollTrigger.create({
            onUpdate: (self) => {
              const skew = clamp(self.getVelocity() / -200);
              if (Math.abs(skew) > Math.abs(proxy.skew)) {
                proxy.skew = skew;
                GSAP.to(proxy, {
                  skew: 0,
                  duration: 0.8,
                  ease: "power3",
                  overwrite: true,
                  onUpdate: () => skewSetter(proxy.skew),
                });
              }
            },
            refreshPriority: 1,
          });

          GSAP.set(".skewElem", {
            transformOrigin: "right center",
            force3D: true,
          });
        } catch (error) {
          console.error("GSAP failed to load:", error);
        }
      })();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-4 container mx-auto flex flex-col md:flex-row gap-6">
        <div className="hidden md:block">
          <FilterBox />
        </div>

        <div className="flex flex-col mt-20 w-full">
          <SearchBox ref={searchBoxRef} />
          <div className="block md:hidden mt-4">
            <FilterBox />
          </div>

          <ImagesGrid height={searchBoxHeight} />
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
