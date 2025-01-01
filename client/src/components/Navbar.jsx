import { useState } from "react";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 md:h-20 flex items-center justify-between text-white px-4 md:px-8 bg-black z-50">
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-4 text-2xl font-bold text-white"
        >
          <span>Articulate</span>
        </Link>
        {/* MOBILE MENU */}
        <div className="md:hidden">
          {/* MOBILE BUTTON */}
          <div
            className="cursor-pointer text-4xl text-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            {/* Change Hamburger Icon */}
            <div className="flex flex-col gap-[5.4px]">
              <div
                className={`h-[3px] rounded-md w-6 bg-white origin-left transition-all ease-in-out ${
                  open && "rotate-45"
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-white transition-all ease-in-out ${
                  open && "opacity-0"
                }`}
              ></div>
              <div
                className={`h-[3px] rounded-md w-6 bg-white origin-left transition-all ease-in-out ${
                  open && "-rotate-45"
                }`}
              ></div>
            </div>
          </div>
          {/* MOBILE LINK LIST */}
          <div
            className={`w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
              open ? "right-0" : "-right-[100%]"
            }`}
          >
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              to="/posts?sort=trending"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition-all duration-300"
            >
              Trending
            </Link>
            <Link
              to="/posts?sort=popular"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400 transition-all duration-300"
            >
              Most Popular
            </Link>

            <SignedOut>
              <Link to="/login">
                <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-blue-600 transition-all duration-300">
                  Login 👋
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "border-2 border-white rounded-full",
                  },
                }}
              />
            </SignedIn>
          </div>
        </div>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link
            to="/"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/posts?sort=trending"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Trending
          </Link>
          <Link
            to="/posts?sort=popular"
            className="hover:text-blue-400 transition-all duration-300"
          >
            Most Popular
          </Link>

          <SignedOut>
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white hover:bg-blue-600 transition-all duration-300">
                Login 👋
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "border-2 border-white rounded-full",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="mt-16 md:mt-20">{/* Main content goes here */}</div>
    </>
  );
};

export default Navbar;
