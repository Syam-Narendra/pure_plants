import { useNavigate, useSearchParams } from "@remix-run/react";
import { forwardRef, useCallback, useEffect, useRef, useState } from "react";

const SearchBox = forwardRef<HTMLDivElement>((props, ref) => {
  const navigate = useNavigate();
  const [oldParams] = useSearchParams();
  const initialSearch = oldParams.get("query") || "";
  const [inputValue, setInputValue] = useState(initialSearch);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const updateSearch = useCallback((searchValue: string) => {
    const searchParams = new URLSearchParams(location.search);
    if (searchValue) {
      searchParams.set("query", searchValue);
    } else {
      searchParams.delete("query");
    }

    navigate(`/products?${searchParams.toString()}`, {
      replace: true,
    });
  }, [navigate]);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      if (inputValue !== initialSearch) {
        updateSearch(inputValue);
      }
    }, 300); // adjust debounce delay here
  }, [inputValue, updateSearch, initialSearch]);

  return (
    <div ref={ref} className="sticky bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-2">Our Catalogue</h1>
        <input
          type="text"
          placeholder="Search catalogue..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-4 py-2 rounded-xl border bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-400 w-full sm:w-80"
        />
      </div>
    </div>
  );
});

SearchBox.displayName = "SearchBox";

export default SearchBox;
