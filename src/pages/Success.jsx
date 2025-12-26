import React from "react";
import { useParams, Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Download, Send } from "lucide-react"; // Send icon Telegram ke liye
import { courses } from "../courses";

const Success = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  // Agar galti se koi galat ID daal de ya bina ID ke aaye
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Something went wrong!
          </h2>
          <Link to="/" className="text-indigo-600 hover:underline">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl text-center max-w-lg w-full border border-gray-100 animate-fade-in-up">
        {/* Success Icon */}
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-8">
          <ShieldCheck className="h-12 w-12 text-green-600" />
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-500 mb-6">You have successfully purchased:</p>

        {/* Course Name Highlight */}
        <div className="bg-indigo-50 text-indigo-800 px-4 py-3 rounded-xl font-bold text-lg mb-8 border border-indigo-100">
          {course.title}
        </div>

        {/* --- MAIN ACTION: TELEGRAM LINK --- */}
        <div className="bg-blue-50 p-6 rounded-2xl mb-8 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-2 text-lg">
            👇 Access Your Content
          </h3>
          <p className="text-blue-700 text-sm mb-4">
            Neeche diye gaye button par click karke turant private Telegram
            channel join karein jahan saare notes upload kiye gaye hain.
          </p>

          <a
            href={course.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-6 py-4 bg-[#229ED9] text-white rounded-xl font-bold text-lg hover:bg-[#1A8LB5] transition-all shadow-lg hover:shadow-[#229ED9]/40 transform hover:-translate-y-1"
          >
            <Send className="mr-2" size={24} />
            Join Telegram Channel
          </a>
          <p className="text-xs text-blue-400 mt-3">
            Link sirf ek baar use karein. Share na karein.
          </p>
        </div>

        <Link
          to="/"
          className="text-gray-400 hover:text-gray-600 text-sm font-medium flex items-center justify-center gap-1"
        >
          <ArrowRight size={14} className="rotate-180" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
