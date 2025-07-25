import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import Footer from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import SearchBox from "~/components/Products/SearchBox";

export const meta: MetaFunction = ({ location }) => {
  const catParams = new URLSearchParams(location.search).get("cat");
  if (!catParams) return [{ title: "Catalogue" }];
  const noOfParams = catParams?.split(",")?.length;

  if (noOfParams > 1) {
    return [{ title: noOfParams.toString() + " Categories" }];
  }
  return [{ title: catParams }];
};
const ProductsPage = () => (
  <div className="bg-black min-h-screen">
    <NavBar isHome={false} />
    <div className="min-h-screen bg-black text-white">
      <div className="p-4 container mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex flex-col mt-20 w-full">
          <SearchBox />
          <Outlet />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ProductsPage;
