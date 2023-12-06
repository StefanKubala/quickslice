import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-gradient-to-r from-yellow-400 to-red-600 ... px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-[5px]">
        🍕Quickslice
      </Link>

      <SearchOrder />
    </header>
  );
}
