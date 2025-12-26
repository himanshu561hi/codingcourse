import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ShieldCheck, ArrowRight, Send, Copy, Loader2 } from "lucide-react";
import { courses } from "../courses";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();

  // ✅ MAIN FIX: Yahan hum dono tarah ki ID check kar rahe hain.
  // 'payment_id' (Razorpay Links se aata hai) OR 'razorpay_payment_id' (Custom checkout se)
  const paymentId =
    searchParams.get("payment_id") || searchParams.get("razorpay_payment_id");

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Pehle LocalStorage check karo
    let savedCourseId = localStorage.getItem("purchasedCourseId");

    // ⚠️ TESTING HACK: Agar direct open kiya hai (savedId nahi hai),
    // to testing ke liye Course ID 1 (AKTU) dikha do.
    if (!savedCourseId) {
      savedCourseId = 1;
    }

    if (savedCourseId) {
      const foundCourse = courses.find((c) => c.id === parseInt(savedCourseId));
      setCourse(foundCourse);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-indigo-600 h-8 w-8" />
      </div>
    );
  }

  // Agar fir bhi course na mile (Safety check)
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Error Loading Course
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
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100 animate-fade-in-up">
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6 shadow-sm">
          <ShieldCheck className="h-12 w-12 text-green-600" />
        </div>

        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-500 mb-6">You have successfully purchased:</p>

        <div className="bg-indigo-50 text-indigo-800 px-6 py-4 rounded-xl font-bold text-lg mb-6 border border-indigo-100 shadow-sm">
          {course.title}
        </div>

        {/* Payment Ref ID (Ab ye asli payment par zaroor dikhega) */}
        {paymentId ? (
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-gray-500 bg-gray-50 py-2 rounded-lg">
            <span>
              Ref ID:{" "}
              <span className="font-mono font-bold text-gray-700">
                {paymentId}
              </span>
            </span>
            <button onClick={() => navigator.clipboard.writeText(paymentId)}>
              <Copy size={14} />
            </button>
          </div>
        ) : (
          // Testing Mode Indicator (Sirf tab dikhega jab URL me koi ID nahi hogi)
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-yellow-600 bg-yellow-50 py-2 rounded-lg border border-yellow-100">
            <span>Payment Done</span>
          </div>
        )}

        <div className="bg-[#f0f9ff] p-6 rounded-2xl mb-8 border border-[#bae6fd] shadow-sm">
          <h3 className="font-bold text-[#0c4a6e] mb-2 text-lg">
            👇 Access Your Content
          </h3>
          <p className="text-[#0369a1] text-sm mb-5 leading-relaxed">
            Neeche diye gaye button par click karke turant{" "}
            <strong>Private Telegram Channel</strong> join karein.
          </p>

          <a
            href={course.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center px-6 py-4 bg-[#229ED9] text-white rounded-xl font-bold text-lg hover:bg-[#1A8LB5] transition-all shadow-lg hover:shadow-[#229ED9]/30 transform hover:-translate-y-1 gap-2"
          >
            <Send size={24} />
            Join Telegram Channel
          </a>
        </div>

        <Link
          to="/"
          className="text-gray-400 hover:text-gray-600 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
        >
          <ArrowRight size={16} className="rotate-180" /> Back to All Courses
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
