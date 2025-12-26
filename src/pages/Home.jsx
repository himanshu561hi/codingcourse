import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { courses } from "../courses"; // Data import kar rahe hain

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <header className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Premium Courses
        </h1>
        <p className="text-gray-600 text-lg">
          Apni career journey start karein hamare top-rated courses ke saath.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-500 mb-6 flex-1 text-sm leading-relaxed">
                {course.description.substring(0, 90)}...
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-indigo-600">
                  {course.price}
                </span>
                <Link
                  to={`/course/${course.id}`}
                  className="bg-gray-900 text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
