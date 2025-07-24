import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import Footer from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import FilterBox from "~/components/Products/FilterBox";
import SearchBox from "~/components/Products/SearchBox";

export const meta: MetaFunction = ({ location }) => {
  const catParams =
    new URLSearchParams(location.search).get("cat")?.split(",")[0] || "Catalogue"

  return [{ title: catParams }];
};
const ProductsPage = () => {
  const [searchBoxHeight, setSearchBoxHeight] = useState(0);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (searchBoxRef.current) {
        setSearchBoxHeight(searchBoxRef.current.offsetHeight);
      }
    }
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <NavBar isHome={false} />
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
            <Outlet context={{ searchBoxHeight }} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductsPage;
