import React from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section (Clicking this also goes to Home) */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <BookOpen className="text-white h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              CourseStore
            </span>
          </Link>

          {/* Right Side - Sirf 'All Courses' link bacha hai */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              All Courses
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
