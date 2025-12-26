import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { courses } from "../courses"; // Data import
import Testimonials from "../components/Testimonials"; // ✅ Testimonials Component Import

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- HERO SECTION --- */}
      <div className="bg-white pb-16 pt-10 px-6 md:px-12 border-b border-gray-100">
        <header className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-4">
            Start Learning Today
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
            Master Your Skills with <br />
            <span className="text-indigo-600">Premium Resources</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Quality notes, real-world projects, aur expert guidance ke saath
            apni career journey ko next level par le jayein.
          </p>

          {/* Trust Badges (Optional Decoration) */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="flex text-yellow-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <span>Trusted by 1000+ Students</span>
          </div>
        </header>

        {/* --- COURSE GRID --- */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group h-full"
            >
              {/* Image Area */}
              <div className="h-56 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                {/* Price & Action - Pushed to bottom */}
                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">
                      Price
                    </span>
                    <span className="text-2xl font-extrabold text-indigo-600">
                      {course.price}
                    </span>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className="bg-gray-900 text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2 text-sm font-bold shadow-lg shadow-gray-900/20 transform hover:-translate-y-0.5"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- TESTIMONIALS SECTION (Mixed Feedbacks) --- */}
      {/* Ye component automatically 'courses.js' se reviews utha kar mix kar dega */}
      <Testimonials />
    </div>
  );
};

export default Home;
