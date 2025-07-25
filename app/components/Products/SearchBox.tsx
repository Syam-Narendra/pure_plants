import { useNavigate, useSearchParams } from "@remix-run/react";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";
import { businessName, categories } from "~/data/text.en";
export default function SearchBox() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const catParams = searchParams.get("cat")?.split(",").filter(Boolean) ?? [];
  const [selectedCategories, setselectedCategories] =
    useState<string[]>(catParams);

  const oldQuery = searchParams.get("query") as string;
  const updateSearch = (searchValue: string) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("query", searchValue);
    navigate(`/products?${searchParams.toString()}`, {
      replace: true,
    });
  };

  const handleCategoryToggle = (label: string) => {
    setselectedCategories((prev) => {
      const newCategories = prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label];

      const searchParams = new URLSearchParams(location.search);
      searchParams.set("cat", newCategories.join(","));
      navigate(`/products?${searchParams.toString()}`, {
        replace: true,
      });

      return newCategories;
    });
  };

  const getDisplayText = () => {
    if (selectedCategories.length === 0) return "All";
    if (selectedCategories.length === 1) return selectedCategories[0];
    return `${selectedCategories.length} selected`;
  };

  return (
    <div className="w-full bg-gray-900">
      <div className="bg-black px-4 py-2">
        <div className="flex items-center gap-2 max-w-7xl mx-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="w-[30%] max-w-52">
              <Button
                variant="outline"
                className="bg-black text-gray-200 border-gray-600 rounded-l-md rounded-r-none min-w-[60px] justify-between"
              >
                <span className="truncate">{getDisplayText()}</span>
                <ChevronDown className="h-4 w-4 ml-1 flex-shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64 max-h-80 overflow-y-auto p-2 bg-black border-gray-700">
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div
                    key={index.toString()}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded"
                  >
                    <Checkbox
                      className="bg-[#3B3B3B] border border-gray-400"
                      id={category.linkName}
                      checked={selectedCategories.includes(category.linkName)}
                      onCheckedChange={() =>
                        handleCategoryToggle(category.linkName)
                      }
                    />
                    <label
                      htmlFor={category.linkName}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer flex-1 text-gray-200"
                    >
                      {category.linkName}
                    </label>
                  </div>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <form
            className="flex flex-1"
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.target as HTMLFormElement);
              const data = Object.fromEntries(form.entries()) as {
                query: string;
              };
              updateSearch(data.query);
            }}
          >
            <Input
              type="text"
              name="query"
              placeholder={`Search ${businessName}`}
              defaultValue={oldQuery}
              className="rounded-none bg-black border-gray-600 text-gray-200 placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400"
            />
            <Button
              className="bg-orange-400 hover:bg-orange-500 text-gray-900 rounded-l-none rounded-r-md px-4"
              type="submit"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
