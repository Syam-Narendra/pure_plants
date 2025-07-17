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
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4`}
    >
      {products.map((item, index) => (
        <div
          key={index}
          className="bg-black border-gray-900 border text-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[320px] mx-auto skewElem"
        >
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.plantName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-black">
            <h2 className="text-lg font-bold mb-1">{item.plantName}</h2>
            <p className="text-sm mb-1">{item.category}</p>
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
