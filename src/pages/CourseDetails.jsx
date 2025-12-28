import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle,
  ArrowLeft,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { courses } from "../courses";
import CourseReviews from "../components/CourseReviews"; // Import Reviews

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  // Agar course na mile to Error dikhayein
  if (!course)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Course Not Found
          </h2>
          <Link to="/" className="text-indigo-600 hover:underline">
            Go Back Home
          </Link>
        </div>
      </div>
    );

  // ✅ UPDATED PAYMENT LOGIC
  const handlePayment = () => {
    // 1. Console me print karo
    console.log("Saving Course ID:", course.id);

    // 2. Save karo
    localStorage.setItem("purchasedCourseId", course.id);

    // 3. Check karo ki save hua ya nahi (Turant padh ke dekho)
    const check = localStorage.getItem("purchasedCourseId");

    // 5. Ab Redirect karo
    window.location.href = course.paymentLink;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* --- WRAPPER 1: Back Button --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-indigo-600 font-medium transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-2" /> Back to Courses
        </Link>
      </div>

      {/* --- WRAPPER 2: Main Content --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CARD START */}
        <div className="bg-white w-full rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* --- 1. BANNER IMAGE --- */}
          <div className="w-full h-64 md:h-96 relative">
            {/* Agar image exist karti hai to wo dikhaye, nahi to placeholder */}
            {course.image ? (
              <img
                className="w-full h-full object-cover"
                src={course.image}
                alt={course.title}
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                No Image Available
              </div>
            )}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-12">
            {/* --- 2. HEADER INFO --- */}
            <div className="text-center max-w-4xl mx-auto mb-10">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold tracking-wide uppercase mb-4 border border-indigo-100">
                Professional Course
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                {course.title}
              </h1>
            </div>

            {/* --- 3. PRICING BOX --- */}
            <div className="bg-indigo-50 rounded-2xl p-8 mb-12 border border-indigo-100 max-w-5xl mx-auto text-center shadow-sm">
              <p className="text-indigo-600 text-sm font-bold uppercase tracking-wider mb-2">
                Special Offer Price
              </p>
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-6xl font-extrabold text-gray-900">
                  {course.price}
                </span>

                {/* Original Price */}
                <span className="text-2xl text-gray-400 line-through decoration-2">
                  {course.originalPrice}
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-5 justify-center max-w-3xl mx-auto">
                {/* Proof Button */}
                {course.proofLink && (
                  <a
                    href={course.proofLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-1/2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-indigo-600 text-indigo-700 bg-white hover:bg-indigo-50 transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={20} />
                    View Proofs/Samples
                  </a>
                )}

                {/* Pay Button (Updated Function) */}
                <button
                  onClick={handlePayment}
                  className="w-full md:w-1/2 px-8 py-4 rounded-xl font-bold text-lg text-white bg-indigo-600 shadow-lg hover:bg-indigo-700 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Pay Now & Get Access
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500 flex items-center justify-center gap-1">
                <ShieldCheck size={14} /> 100% Secure Payment via Razorpay
              </p>
            </div>

            {/* --- 4. DESCRIPTION --- */}
            <div className="max-w-4xl mx-auto prose prose-lg text-gray-600 mb-16 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                About the Course
              </h3>
              <p className="whitespace-pre-line leading-relaxed">
                {course.description}
                <br />
                <br />
                Is course mein aapko wo sab kuch milega jo aap dhoond rahe hain.
                Humne kaafi research karke ye content taiyar kiya hai taaki
                aapko best quality material mile. Quality dekhne ke baad hi
                kharidein.
              </p>
            </div>

            {/* --- 5. HIGHLIGHTS SECTION --- */}
            <div className="max-w-7xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
                  <CheckCircle className="text-indigo-600" /> What's Included?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {course.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="bg-green-100 p-2 rounded-full mr-3 flex-shrink-0">
                        <CheckCircle className="text-green-600 w-5 h-5" />
                      </div>
                      <span className="font-semibold text-gray-700 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD END */}

        {/* --- 6. REVIEWS SECTION --- */}
        <div className="mt-12">
          {/* Reviews Component ko reviews pass kiye */}
          <CourseReviews reviews={course.reviews} />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
