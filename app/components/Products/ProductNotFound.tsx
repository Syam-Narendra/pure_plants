import NotFoundImage from "./data/images/no-products-found.png";

const ProductsNotFound = () => (
  <div className="h-96 p-5 m-5 flex justify-center content-center items-center flex-col">
    <img src={NotFoundImage} alt="no products found" className="h-96 w-96" />
    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-10 mb-6 px-4 flex items-center justify-center gap-2">
      Oops! No Plants found — Clear filters & try again 🌿
    </h1>
  </div>
);
export default ProductsNotFound;
