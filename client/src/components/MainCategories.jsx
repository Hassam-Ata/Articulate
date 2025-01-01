import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-gray-800 rounded-3xl xl:rounded-full p-4 items-center justify-center gap-8 shadow-lg">
      {/* Links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts?sort=trending"
          className="bg-blue-700 text-white rounded-full px-4 py-2 transition-transform transform hover:scale-105 shadow-md"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full px-4 py-2 transition-colors duration-300"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full px-4 py-2 transition-colors duration-300"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full px-4 py-2 transition-colors duration-300"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-full px-4 py-2 transition-colors duration-300"
        >
          Search Engines
        </Link>
      </div>
      <span className="text-xl font-medium text-gray-500">|</span>
      {/* Search */}
      <Search />
    </div>
  );
};

export default MainCategories;
