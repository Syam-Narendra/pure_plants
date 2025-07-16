/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { categories, plantSizes } from "~/data/text.en";

const FilterBox = () => {
  const [showAvailability, setShowAvailability] = useState(true);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    []
  );
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleAvailabilityToggle = (label: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <div
      className={`
        relative md:sticky md:top-36 
        bg-black text-white border border-gray-700 rounded-lg 
        p-4 z-30
        w-[90%] h-fit max-w-xs mx-auto mt-6 overflow-y-auto
      `}
    >
      <h2 className="text-xl font-semibold mb-6 text-center md:text-left">
        Filters
      </h2>

      {/* Size Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
          Size
        </h3>
        <div className="flex flex-wrap gap-2 border-b border-gray-700 pb-4">
          {plantSizes.map((size: string, index: number) => (
            <button
              key={index}
              onClick={() => handleSizeToggle(size)}
              className={`border p-2 text-sm font-medium transition-colors ${
                selectedSizes.includes(size)
                  ? "bg-white text-black border-white"
                  : "border-white text-white"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3
          className="text-sm font-semibold uppercase tracking-wide mb-1 flex justify-between items-center cursor-pointer"
          onClick={() => setShowAvailability((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setShowAvailability((prev) => !prev);
            }
          }}
        >
          Categories
          <span
            className={`transform transition-transform text-sm ${
              showAvailability ? "rotate-180" : ""
            }`}
          >
            ⌃
          </span>
        </h3>

        <AnimatePresence initial={false}>
          {showAvailability && (
            <motion.div
              key="availability"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden space-y-2"
            >
              {categories.map((item) => (
                <label
                  key={item.linkName}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      onChange={() => handleAvailabilityToggle(item.linkName)}
                      checked={selectedAvailability.includes(item.linkName)}
                      className="w-5 h-5 border border-gray-400 rounded-sm accent-white bg-black"
                    />
                    <span className="text-sm">{item.linkName}</span>
                  </div>
                  <span className="text-sm text-blue-500 font-medium">
                    ({item.availableTypes})
                  </span>
                </label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FilterBox;
