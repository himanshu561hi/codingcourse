// src/courses.js

// ✅ STEP 1: Pehle apni images ko yahan Import karein
// (Make sure aapne 'src/assets' folder me images save ki hui hain)
import aktuImg from '../src/images/aktu_image.jpg';   // Apni image ka sahi naam likhein
import aimlImg from '../src/images/aiml_image.jpg';   // Apni image ka sahi naam likhein

export const courses = [
    {
      id: 1,
      title: "AKTU All Subject Notes Available",
      price: "₹99.00",
      originalPrice: "₹1,999",
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
      
      // ✅ STEP 2: Imported variable yahan use karein (koi quotes "" nahi lagane)
      image: aktuImg, 
      
      // Links
      paymentLink: "https://rzp.io/rzp/yduLBIC",
      proofLink: "https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE", 
      telegramLink: "https://t.me/Aktu_Notes_Quantum_book",

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
      title: "Prime AIML Course APNA COLLEGE",
      price: "₹199.00",
      originalPrice: "₹8,999",
      description: "Prime : Complete AI/ML Job Preparation\nAI Job Preparation in 4+ Months\nFor AI Engineer & Data Science Jobs\nDoubt support & Multiple Industry Grade Projects",
      features: [
        "AI/ML - Artificial Intelligence & Machine Learning",
        "Python (programming language)",
        "Variables & Operators",
        "Conditional Statements & Loops (Flow Control)",
        "Functions & Lambda Functions",
        "List & List Comprehensions, Tuple, Dictionary & Set",
        "File Handling & JSON Module",
        "Object Oriented Programming (OOPs) - In Detail",
        "Data Collection, Preprocessing & Visualization",
        "NumPy, Pandas, Matplotlib, Seaborn etc.",
        "Machine Learning",
        "Mathematics for AI",
        "Statistics, Probability, Central Limit Theorem etc.",
        "Supervised Learning (Classification & Regression)",
        "Algorithms: Linear Regression, Naive Bayes, KNN, Decision Trees etc.",
        "Unsupervised Learning (Clustering & Association)",
        "Algorithms: Logistic Regression, K-Means, PCA & Dimensionality Reduction",
        "Reinforcement Learning",
        "Additional Concepts: Precision, Recall, F1 Score, Bias-Variance Tradeoff",
        "Scikit-learn & Kaggle",
        "Multiple Machine Learning Projects",
        "Deep Learning",
        "Neural Networks & Terminologies",
        "Forward & Backward Propagation",
        "Perceptron",
        "FNN Architecture (Feed Forward Neural Network)",
        "RNN Architecture (Recurrent Neural Network)",
        "LSTM (Long Short-Term Memory): Need & Advantages",
        "CNN Architecture (Convolutional Neural Network)",
        "Transformers",
        "TensorFlow",
        "PyTorch vs TensorFlow vs Keras",
        "Multiple Deep Learning Projects",
        "GenAI",
        "GenAI & LLM Agents (Large Language Models)",
        "NLP (Natural Language Processing)",
        "GAN (Generative Adversarial Networks)",
        "RAG (Retrieval-Augmented Generation)",
        "Agentic AI",
        "Cursor AI, GitHub Copilot, Claude etc.",
        "Working with OpenAI APIs",
        "AI Engineering Stack",
        "Flask (AI Application Development)",
        "Frontend Fundamentals (HTML, CSS, JavaScript)",
        "SQL for Data Science",
        "Git & GitHub (Version Control)",
        "Docker",
        "Kubernetes",
        "Multiple Minor & Major Projects",
        "Industry-Grade Domain-Specific Projects",
        "Finance Domain Projects",
        "Recommendation Systems",
        "Medical Domain Projects",
        "E-commerce Projects",
        "Media & Content Projects",
        "GenAI Assistant Project",
        "Additional Sessions by AI Industry Professionals"
      ],
      
      // ✅ STEP 2: Imported variable yahan use karein
      image: aimlImg,
      
      // Links
      paymentLink: "https://rzp.io/rzp/p16bukgo",
      proofLink: "", 
      telegramLink: "https://t.me/+LeoOSXBriq5iNzc9",

      reviews: [
        { 
          id: 101, 
          user: "Aman Dubey", 
          rating: 5, 
          comment: "Bhai genuine hai, maine check kiya. Ye wahi same course hain jo hume chahiye the.", 
          date: "1 day ago" 
        },
        { 
          id: 102, 
          user: "Anita", 
          rating: 4, 
          comment: "Mujhe laga fake hoga par saare leactures h.", 
          date: "3 days ago" 
        }
      ]
    }
  ];