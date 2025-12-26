import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid ko ab 3 columns me kar diya hai (Socials hata diya) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">CourseStore</h3>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Hum provide karte hain best quality notes aur courses taaki aap
              apne career me aage badh sakein.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-indigo-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal (Policy) */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-indigo-400">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar - Simple & Clean */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} CourseStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
