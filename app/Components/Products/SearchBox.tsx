import { forwardRef, useState } from "react";

const SearchBox = forwardRef<HTMLDivElement>((props, ref) => {
  const [search, setSearch] = useState("");

  return (
    <div ref={ref} className="sticky bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-2">Our Catalogue</h1>
        <input
          type="text"
          placeholder="Search catalogue..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded-xl border bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-80"
        />
      </div>
    </div>
  );
});

SearchBox.displayName = "SearchBox";

export default SearchBox;
