import Footer from "~/Components/Footer";
import { NavBar } from "~/Components/Navbar";
import ProductsContainer from "~/Components/Products/ProductsContainer";

const ProductsPage = () => (
  <div className="bg-black min-h-screen">
    <NavBar isHome={false} />
    <ProductsContainer />
    <Footer />
  </div>
);

export default ProductsPage;
