import { useEffect, useState } from "react";

const ProductsImagesGrid = () => {
  const [search, setSearch] = useState("");

  const products = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    name: `Item ${i + 1}`,
    price: (Math.random() * 1000 + 100).toFixed(0),
    rating: (Math.random() * 2 + 3).toFixed(1),
    image: `https://picsum.photos/600/600?random=${i + 1}`,
  }));

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const GSAP = (await import("gsap")).default;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;

        GSAP.registerPlugin(ScrollTrigger);

        const proxy = { skew: 0 },
          skewSetter = GSAP.quickSetter(".skewElem", "skewY", "deg");
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
        });

        GSAP.set(".skewElem", {
          transformOrigin: "right center",
          force3D: true,
        });
      })();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search catalogue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-gray-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-black text-white rounded-2xl shadow-lg skewElem w-[400px]"
          >
            <img src={item.image} alt={item.name} className="rounded-2xl"/>
            <div className="p-4">
              <h2 className="text-lg text-white font-bold mb-1">{item.name}</h2>
              <p className="text-sm text-white mb-1">₹{item.price}</p>
              <p className="text-sm text-yellow-600">⭐ {item.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsImagesGrid;
