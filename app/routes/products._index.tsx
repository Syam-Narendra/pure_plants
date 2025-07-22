import { LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ProductsFound from "~/components/Products/FoundProducts";
import ProductsNotFound from "~/components/Products/ProductNotFound";
import { AllProductsImages, Size } from "~/data/text.en";

export const loader: LoaderFunction = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  const sizeParams =
    url.searchParams.get("sizes")?.split(",").filter(Boolean) ?? [];
  const catParams =
    url.searchParams.get("cat")?.split(",").filter(Boolean) ?? [];
  const queryParams = url.searchParams.get("query");

  if (sizeParams.length === 0 && catParams.length === 0 && !queryParams) {
    return AllProductsImages;
  }

  const filteredProducts = AllProductsImages.filter((product) => {
    const categoryMatched =
      catParams.length === 0 || catParams.includes(product.category);

    const sizeMatched =
      sizeParams.length === 0 ||
      sizeParams.some((size) => product.sizesAvailable.includes(size as Size));
    const queryMatched = product.plantName
      .toLocaleLowerCase()
      .includes(queryParams as string);

    return categoryMatched && sizeMatched && queryMatched;
  });

  return filteredProducts;
};

const Product = () => {
  const filteredProducts = useLoaderData<
    typeof loader
  >() as typeof AllProductsImages;
  if (filteredProducts.length === 0) return <ProductsNotFound />;

  return <ProductsFound products={filteredProducts} />;
};

export default Product;
