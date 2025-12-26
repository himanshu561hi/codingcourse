// import React, { useState, useRef } from "react";
// import { Star, User, Send, Loader2 } from "lucide-react";
// import emailjs from "@emailjs/browser";

// const CourseReviews = ({ reviews: initialReviews = [] }) => {
//   // Local state taaki naya review turant dikhe
//   const [reviews, setReviews] = useState(initialReviews);
//   const [rating, setRating] = useState(5);
//   const [loading, setLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const form = useRef();

//   const sendReview = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // 1. Email Bhejna (EmailJS)
//     // Apne IDs yahan replace karein 👇
//     emailjs
//       .sendForm(
//         "service_lk9b0yf", // e.g. service_xyz
//         "template_1ih1by7", // e.g. template_abc
//         form.current,
//         "TVYGsfBS-Q0BOSukd" // e.g. user_12345
//       )
//       .then(
//         (result) => {
//           console.log(result.text);

//           // 2. Form se data nikalna UI update ke liye
//           const formData = new FormData(form.current);
//           const newReview = {
//             id: Date.now(), // Random ID
//             user: formData.get("user_name") || "Anonymous",
//             rating: rating,
//             comment: formData.get("message"),
//             date: "Just Now",
//           };

//           // 3. UI Update (List me add karna)
//           setReviews([newReview, ...reviews]);
//           setSubmitted(true);
//           setLoading(false);
//           e.target.reset(); // Form clear
//         },
//         (error) => {
//           console.log(error.text);
//           setLoading(false);
//           alert("Review send nahi hua. Internet check karein.");
//         }
//       );
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
//       <h3 className="text-2xl font-bold text-gray-900 mb-8">
//         Student Reviews ({reviews.length})
//       </h3>

//       {/* Review List */}
//       <div className="grid gap-6 mb-12">
//         {reviews.length > 0 ? (
//           reviews.map((review) => (
//             <div
//               key={review.id}
//               className="bg-gray-50 p-6 rounded-2xl border border-gray-100 animate-fade-in-up"
//             >
//               <div className="flex justify-between items-start mb-2">
//                 <div className="flex items-center gap-3">
//                   <div className="bg-indigo-100 p-2 rounded-full">
//                     <User size={20} className="text-indigo-600" />
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">{review.user}</h4>
//                     <p className="text-xs text-gray-500">{review.date}</p>
//                   </div>
//                 </div>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       size={14}
//                       className={`${
//                         i < review.rating
//                           ? "text-yellow-400 fill-current"
//                           : "text-gray-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <p className="text-gray-700 ml-11">{review.comment}</p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No reviews yet. Be the first!</p>
//         )}
//       </div>

//       {/* --- ADD REVIEW FORM --- */}
//       <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg max-w-2xl">
//         <h4 className="font-bold text-xl mb-6 text-gray-900">
//           Apna Review Dein
//         </h4>

//         {submitted ? (
//           <div className="bg-green-50 p-4 rounded-xl text-green-700 font-medium text-center">
//             ✅ Review Submitted Successfully! (Ye page refresh hone tak dikhega)
//           </div>
//         ) : (
//           <form ref={form} onSubmit={sendReview} className="space-y-4">
//             {/* Name Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Apna Naam
//               </label>
//               <input
//                 type="text"
//                 name="user_name"
//                 required
//                 className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 placeholder="Eg. Rahul Kumar"
//               />
//             </div>

//             {/* Hidden field for Course Name (Optional, agar template me chahiye) */}
//             <input type="hidden" name="course_name" value="Current Course" />

//             {/* Rating Select */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Rating
//               </label>
//               <div className="flex gap-2">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <button
//                     key={star}
//                     type="button"
//                     onClick={() => setRating(star)}
//                     className={`text-2xl transition-colors ${
//                       star <= rating ? "text-yellow-400" : "text-gray-300"
//                     }`}
//                   >
//                     ★
//                   </button>
//                 ))}
//               </div>
//               {/* Hidden input to send rating in email */}
//               <input type="hidden" name="rating" value={rating} />
//             </div>

//             {/* Comment Box */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Review
//               </label>
//               <textarea
//                 name="message"
//                 required
//                 className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
//                 rows="3"
//                 placeholder="Aapko ye course kaisa laga?"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
//             >
//               {loading ? (
//                 <>
//                   {" "}
//                   <Loader2 className="animate-spin" /> Sending...{" "}
//                 </>
//               ) : (
//                 <>
//                   {" "}
//                   Submit Review <Send size={18} />{" "}
//                 </>
//               )}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CourseReviews;





import React, { useState, useRef } from 'react';
import { Star, User, Send, Loader2, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const CourseReviews = ({ reviews: initialReviews = [] }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const form = useRef();

  const sendReview = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
         "service_lk9b0yf", // e.g. service_xyz
         "template_1ih1by7", // e.g. template_abc
         form.current,
         "TVYGsfBS-Q0BOSukd" // e.g. user_12345
       )
      .then((result) => {
          const formData = new FormData(form.current);
          
          // UI update ke liye object (Privacy: Phone/Email public nahi dikhayenge)
          const newReview = {
            id: Date.now(),
            user: formData.get('user_name') || "Anonymous",
            rating: rating,
            comment: formData.get('message'),
            date: "Just Now"
          };

          setReviews([newReview, ...reviews]);
          setSubmitted(true);
          setLoading(false);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert("Error: Check internet connection.");
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Student Reviews ({reviews.length})</h3>
      
      {/* Review List */}
      <div className="grid gap-6 mb-12">
        {reviews.length > 0 ? (
           reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                      <div className="bg-indigo-100 p-2 rounded-full">
                          <User size={20} className="text-indigo-600" />
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-900">{review.user}</h4>
                          <p className="text-xs text-gray-500">{review.date}</p>
                      </div>
                  </div>
                  <div className="flex">
                      {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className={`${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
                      ))}
                  </div>
              </div>
              <p className="text-gray-700 ml-11">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>

      {/* --- UPDATED FORM --- */}
      <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg max-w-2xl">
        <h4 className="font-bold text-xl mb-6 text-gray-900">Apna Review Dein</h4>
        
        {submitted ? (
            <div className="bg-green-50 p-4 rounded-xl text-green-700 font-medium text-center">
                ✅ Review Submitted Successfully!
            </div>
        ) : (
            <form ref={form} onSubmit={sendReview} className="space-y-4">
                
                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 text-gray-400" size={18} />
                        <input type="text" name="user_name" required className="w-full pl-10 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Enter your name" />
                    </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="email" name="user_email" required className="w-full pl-10 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@example.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                            <input type="tel" name="user_phone" required className="w-full pl-10 border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="+91 9876543210" />
                        </div>
                    </div>
                </div>

                {/* Rating */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" onClick={() => setRating(star)} className={`text-2xl transition-colors ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>★</button>
                        ))}
                    </div>
                    <input type="hidden" name="rating" value={rating} />
                </div>

                {/* Comment */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Review</label>
                    <textarea name="message" required className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-500 outline-none" rows="3" placeholder="Write your feedback..."></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400">
                    {loading ? <><Loader2 className="animate-spin" /> Sending...</> : <>Submit Review <Send size={18} /></>}
                </button>
            </form>
        )}
      </div>
    </div>
  );
};

export default CourseReviews;