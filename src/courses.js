// src/courses.js
export const courses = [
    {
      id: 1,
      title: "AKTU All Subject Notes Available",
      price: "₹99.00",
      originalPrice: "₹1,999", // ✅ Added Dynamic Original Price
      description: "📚 AKTU Complete Notes & Quantum Access All Subjects\n\nIs package ke through aap AKTU ke almost saare subjects ke notes + quantum (question banks) access kar sakte ho. Ye notes B.Tech ke sabhi years ke liye useful hain.",
      features: [
        "Mathematics (M1, M2, M4)",
        "Physics",
        "Operating System (OS)",
        "Computer Networks (CN)",
        "DBMS",
        "DAA (Design & Analysis of Algorithms)",
        "Software Engineering (SE)",
        "Software Project Management (SPM)",
        "Web Technology",
        "Cloud Computing",
        "Artificial Intelligence (AI)",
        "Machine Learning (ML)",
        "Deep Learning",
        "Image Analytics",
        "Python Programming",
        "Computer Graphics",
        "Cryptography & Network Security",
        "Internet of Things (IoT)",
        "Natural Language Processing (NLP)",
        "VLSI Technology",
        "Basic Signals & Systems (BSS)",
        "Electrical Engineering",
        "Electronics (1st Year)",
        "Energy Science / Renewable Energy",
        "FME (Mechanical)",
        "Material Science",
        "PPS",
        "Constitution of India (COI)",
        "Soft Skills",
        "Technical Communication",
        "All Subjects PYQs (Previous Year Questions)"
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      
      // Links
      paymentLink: "https://rzp.io/rzp/eY0gOvP",
      proofLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE", 
      telegramLink: "https://t.me/Aktu_Notes_Quantum_book",

      // Reviews (Authenticity Focused)
      reviews: [
        { 
          id: 101, 
          user: "Vikas Dubey", 
          rating: 5, 
          comment: "Bhai genuine hai, maine check kiya. Ye wahi same notes hain jo hume chahiye the.", 
          date: "1 day ago" 
        },
        { 
          id: 102, 
          user: "Simran Kaur", 
          rating: 5, 
          comment: "Mujhe laga fake hoga par saari Quantum aur Notes folders me proper organized hain. Sahi hai.", 
          date: "3 days ago" 
        },
        { 
          id: 103, 
          user: "Rahul M.", 
          rating: 4, 
          comment: "Content ekdum accurate hai. Syllabus se match kar raha hai pura. Trusted.", 
          date: "1 week ago" 
        }
      ]
    },
    {
      id: 2,
      title: "Python for Data Science",
      price: "₹3,499",
      originalPrice: "₹8,000", // ✅ Added Dynamic Original Price
      description: "Data Science aur Machine Learning seekhein Python ke saath using Pandas and NumPy.",
      features: ["Python Basics", "Data Analysis", "ML Projects", "Career Guidance"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      
      paymentLink: "https://razorpay.me/payment_link_2",
      proofLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE",
      telegramLink: "https://t.me/+XyZ12345678",

      reviews: [
        { id: 201, user: "Aman V.", rating: 5, comment: "Course structure wahi hai jo promise kiya tha. Achha content hai.", date: "2 days ago" },
        { id: 202, user: "Sneha G.", rating: 5, comment: "Genuine material hai, saare resources working hain.", date: "1 month ago" }
      ]
    },
    {
      id: 3,
      title: "UI/UX Design Masterclass",
      price: "₹2,999",
      originalPrice: "₹6,500", // ✅ Added Dynamic Original Price
      description: "Figma aur Adobe XD ke saath professional designs banana seekhein.",
      features: ["Design Theory", "Figma Mastery", "Portfolio Building", "Freelancing Tips"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
      
      paymentLink: "https://razorpay.me/payment_link_3",
      proofLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE",
      telegramLink: "https://t.me/+MnOpQrStUvWxYz",

      reviews: [
        { id: 301, user: "Riya S.", rating: 5, comment: "Files ekdum high quality hain. Sahi material mila.", date: "5 days ago" },
        { id: 302, user: "Karan T.", rating: 4, comment: "Useful resources hain, worth the money.", date: "3 weeks ago" }
      ]
    }
  ];