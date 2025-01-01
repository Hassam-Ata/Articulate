import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <h1 className="mb-2 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="xl:w-2/3">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block xl:w-1/3`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
