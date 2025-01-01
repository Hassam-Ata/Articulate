import { Link } from "react-router-dom";

const SkeletonPostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12 animate-pulse">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3 bg-gray-300 h-48 rounded-2xl"></div>

      {/* details */}
      <div className="flex flex-col gap-4 w-[70%]">
        <div className="h-8 bg-gray-300 rounded-md w-3/4"></div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
        </div>
        <div className="h-6 bg-gray-300 rounded-md w-full"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
      </div>
    </div>
  );
};

export default SkeletonPostListItem;
