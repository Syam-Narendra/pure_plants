import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="sticky top-[96px] z-40 bg-black shadow-md">
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
};

export default SearchBox;
