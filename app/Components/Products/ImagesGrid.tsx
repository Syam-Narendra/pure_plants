import { AllProductsImages } from "~/data/text.en";

const ImagesGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {AllProductsImages.map((item, index) => (
      <div
        key={index}
        className="bg-black border-gray-900 border text-white rounded-2xl shadow-lg overflow-hidden w-full max-w-[320px] mx-auto skewElem"
      >
        <div className="aspect-[3/4] w-full overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.plantName}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 bg-black">
          <h2 className="text-lg font-bold mb-1">{item.plantName}</h2>
          <p className="text-sm mb-1">{item.category}</p>
          {item.sizesAvailable && (
            <p className="text-sm text-yellow-500">
              Sizes Available:{" "}
              {item.sizesAvailable.map((each, index) => (
                <span key={index} className="mr-2">
                  {each}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
);
export default ImagesGrid;
