import { NavLink } from "@remix-run/react";
import { ChevronRight } from "lucide-react";

interface Product {
  id: number;
  title: string;
  image: string;
  currentPrice: string;
  originalPrice: string;
  discount: string;
  stylesAvailable: number;
  badge: "PROMOTIONS" | "FULL-STOCK";
}

const products: Product[] = [
  {
    id: 1,
    title: "T-Shirt White Kids",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=687&auto=format&fit=crop",
    currentPrice: "GHS 50.00",
    originalPrice: "GHS 100",
    discount: "50%",
    stylesAvailable: 2,
    badge: "PROMOTIONS",
  },
  {
    id: 2,
    title: "Sneakers White",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=687&auto=format&fit=crop",
    currentPrice: "GHS 50.00",
    originalPrice: "GHS 100",
    discount: "50%",
    stylesAvailable: 2,
    badge: "FULL-STOCK",
  },
  {
    id: 3,
    title: "Shirt Blue Women",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=687&auto=format&fit=crop",
    currentPrice: "GHS 50.00",
    originalPrice: "GHS 100",
    discount: "50%",
    stylesAvailable: 2,
    badge: "PROMOTIONS",
  },
  {
    id: 4,
    title: "Comfort Curves",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=687&auto=format&fit=crop",
    currentPrice: "GHS 50.00",
    originalPrice: "GHS 100",
    discount: "50%",
    stylesAvailable: 2,
    badge: "FULL-STOCK",
  },
  {
    id: 5,
    title: "White Jeans",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b9a71f6004f?q=80&w=687&auto=format&fit=crop",
    currentPrice: "GHS 50.00",
    originalPrice: "GHS 100",
    discount: "50%",
    stylesAvailable: 1,
    badge: "FULL-STOCK",
  },
];

export default function TrendingProducts() {
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[4/5]">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-sm sm:text-base lg:text-lg leading-tight">
          {product.title}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg sm:text-xl">
            {product.currentPrice}
          </span>
          <span className="text-gray-500 line-through text-sm sm:text-base">
            {product.originalPrice}
          </span>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm">
          {product.stylesAvailable} Style
          {product.stylesAvailable !== 1 ? "s" : ""} Available
        </p>
      </div>
    </div>
  );
}
