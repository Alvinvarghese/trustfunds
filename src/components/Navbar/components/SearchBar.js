import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../../ui/input";
import { cn } from "@/lib/utils";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();
  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/campaigns/search/${keyword}`);
  };
  return (
    <form onSubmit={handleSearch} className={cn(props.className)}>
      <Input
        className="navbar_button w-[300px] border-none pl-6 pr-12 text-left"
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search for campaigns..."
      />
    </form>
  );
};

export default SearchBar;
