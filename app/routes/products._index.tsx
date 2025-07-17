import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ImagesGrid from "~/components/Products/ImagesGrid";
import { AllProductsImages, Size } from "~/data/text.en";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  const sizeParams =
    url.searchParams.get("sizes")?.split(",").filter(Boolean) ?? [];
  const catParams =
    url.searchParams.get("cat")?.split(",").filter(Boolean) ?? [];

  if (sizeParams.length === 0 && catParams.length === 0) {
    return AllProductsImages;
  }

  const catFiltProducts = AllProductsImages.filter((product) => {
    const categoryMatched =
      catParams.length === 0 || catParams.includes(product.category);

    const sizeMatched =
      sizeParams.length === 0 ||
      sizeParams.some((size) => product.sizesAvailable.includes(size as Size));

    return categoryMatched && sizeMatched;
  });

  return catFiltProducts;
};

const Product = () => {
  const filteredProducts = useLoaderData<typeof loader>();

  return <ImagesGrid products={filteredProducts} />;
};

export default Product;
