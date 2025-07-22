import { NavLink } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import { AllProductsImages } from "~/data/text.en";
import ImagesGrid from "../Products/ImagesGrid";
import { useEffect, useState } from "react";

export default function TrendingProducts() {
  const [visibleCount, setVisibleCount] = useState<number>(6);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window === "undefined") setVisibleCount(6);
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1024) setVisibleCount(8);
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);
    return window.addEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <section className="bg-black text-white py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-wider">
            TRENDING NOW
          </h2>
          <NavLink
            to={"/products"}
            className="bg-transparent flex items-center text-white hover:bg-white hover:text-black text-xs sm:text-sm px-3 py-1 rounded"
          >
            View All <ChevronRight />
          </NavLink>
        </div>

        <ImagesGrid products={AllProductsImages.slice(0,visibleCount)} />
      </div>
    </section>
  );
}
