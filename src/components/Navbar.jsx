import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              CourseStore
            </span>
          </Link>

          {/* Right Side Icons/Buttons */}
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors hidden md:block"
            >
              All Courses
            </Link>

            {/* Dummy Cart Icon */}
            <button className="relative p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <ShoppingBag size={22} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
                1
              </span>
            </button>

            {/* Login Button */}
            <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all">
              <User size={16} />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
