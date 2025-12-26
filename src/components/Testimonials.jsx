import React from "react";
import { Star, Quote } from "lucide-react";
import { courses } from "../courses"; // ✅ Data import kiya

const Testimonials = () => {
  // Logic: Har course me se reviews nikaal kar ek badi list bana rahe hain
  // Aur usme Course ka naam bhi add kar rahe hain taaki pata chale kiska review hai
  const allReviews = courses.flatMap((course) =>
    (course.reviews || []).map((review) => ({
      ...review,
      courseName: course.title, // Review ke sath course ka naam bhi jod diya
    }))
  );

  // Sirf pehle 3-6 reviews dikhayenge (Mix)
  const displayedReviews = allReviews.slice(0, 3);

  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Students Ki Rai
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Dekhiye humare students alag-alag courses ke baare me kya kehte
            hain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedReviews.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-4 right-4 text-indigo-100 h-10 w-10" />

              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  {item.user.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {item.user}
                  </h4>
                  <p className="text-xs text-indigo-600 font-medium truncate max-w-[150px]">
                    {item.courseName}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${
                      i < item.rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                "{item.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
