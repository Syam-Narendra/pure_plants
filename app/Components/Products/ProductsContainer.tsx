import { useEffect, useState } from "react";
import FilterBox from "./FilterBox";
import ImagesGrid from "./ImagesGrid";

const ProductsContainer = () => {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
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
      <div className="sticky top-[96px] z-40 bg-black shadow-md">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold mb-2">Our Catalogue</h1>
          <input
            type="text"
            placeholder="Search catalogue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl border bg-gray-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-80"
          />
        </div>
      </div>
      <div className="h-28 sm:h-24"></div>

      <div className="p-4 top-[300px] container mx-auto px-4 flex flex-col md:flex-row gap-6">
        <FilterBox />
        <div className="flex-1">
          <ImagesGrid />
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
