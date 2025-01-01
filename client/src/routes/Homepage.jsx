import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-9 flex flex-col gap-4 text-whit min-h-screen px-4 md:px-8">
      {/* BREADCRUMB */}
      <div className="flex gap-4 text-gray-400">
        <Link
          to="/"
          className="hover:text-blue-400 transition-all duration-300"
        >
          Home
        </Link>
        <span>•</span>
        <span>Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Titles */}
        <div>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Articulate: Express with Clarity
          </h1>
          <p className="mt-8 text-md md:text-xl text-gray-300">
            Your go-to space for clear and practical software development
            insights.
          </p>
        </div>
        {/* Animated Button */}
        <Link to="write" className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest text-gray-300 animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%" fill="white">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%" fill="white">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div>
        <h1 className="my-8 text-2xl border-b border-gray-700 pb-2">
          Recent Posts
        </h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
