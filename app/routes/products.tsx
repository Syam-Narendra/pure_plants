import Footer from "~/Components/Footer";
import { NavBar } from "~/Components/Navbar";
import ProductsImagesGrid from "~/Components/Products/ProductImagesGrid";

const ProductsPage = () => (
  <>
    <NavBar isHome={false} />
    <ProductsImagesGrid />
    <Footer />
  </>
);

export default ProductsPage;
