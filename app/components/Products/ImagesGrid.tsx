import { useEffect } from "react";
import { AllProductsImages } from "~/data/text.en";

const ImagesGrid = ({ products }: { products: typeof AllProductsImages }) => {
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 pt-4">
      {products.map((item, index) => (
        <div
          key={index}
          className="bg-black text-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 skewElem"
        >
          <div className="relative aspect-[4/5]">
            <img
              src={item.imageUrl}
              alt={item.plantName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <h2 className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">
              {item.plantName}
            </h2>
            <p className="text-xs sm:text-sm">{item.category}</p>
            {item.sizesAvailable?.length !== 0 && (
              <p className="text-sm text-yellow-500">
                Sizes Available:{" "}
                {item.sizesAvailable.map((each, index) => (
                  <span key={index} className="mr-2">
                    {each}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;
