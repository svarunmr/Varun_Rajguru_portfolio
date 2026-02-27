export const projects = [
  {
    title: "Cauli-Det-cauliflower-disease-detection",
    shortDescription:
      "Computer vision system for real-time crop disease detection.",
    description:
      "Built a YOLOv8-based computer vision system to detect and classify crop diseases from images, enabling early diagnosis and reducing manual inspection effort.",
    problem:
      "Manual crop disease detection is time-consuming and error-prone, especially for large farms.",
    approach: [
      "Collected and preprocessed labeled crop images",
      "Trained a YOLOv8 model for multi-class detection",
      "Integrated real-time inference using OpenCV",
      "Built an interactive UI using Gradio",
    ],
    highlights: [
      "Real-time inference",
      "Scalable model pipeline",
      "Production-oriented design",
    ],
    tech: ["Python", "YOLOv8", "OpenCV", "Gradio"],
    github: "https://github.com/your-username/vegetable-disease-detection",
    demo: "",
  },

  {
    title: "Snake Game AI",
    shortDescription:
      "Autonomous AI agent for the classic Snake game.",
    description:
      "Developed an autonomous Snake Game AI using pathfinding and decision-making algorithms to optimize survival and gameplay efficiency.",
    problem:
      "Manual control of the Snake game limits optimization and does not demonstrate algorithmic decision-making.",
    approach: [
      "Modeled the game grid as a state space",
      "Used pathfinding to reach food safely",
      "Handled edge cases like self-trapping",
      "Optimized movement decisions for longevity",
    ],
    highlights: [
      "Algorithmic decision-making",
      "Edge case handling",
      "High survival consistency",
    ],
    tech: ["C", "Algorithms", "Pathfinding"],
    github: "https://github.com/your-username/snake-ai",
    demo: "",
  },

  {
    title: "FinAI – AI-Powered Finance Tracker",
    shortDescription:
      "Full-stack personal finance tracker with AI-based financial insights.",
    description:
      "FinAI is a MERN-based personal finance application that securely syncs bank transactions and provides AI-powered financial advice using GPT-4o.",
    problem:
      "Managing personal finances manually is error-prone and lacks actionable insights.",
    approach: [
      "Built full-stack MERN application",
      "Integrated Plaid API for real-time bank sync",
      "Designed AI financial advisor using GPT-4o",
      "Implemented secure authentication with Clerk",
      "Visualized spending patterns using charts",
    ],
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Plaid API",
      "GPT-4o",
    ],
    github: "https://github.com/svarunmr",
    images: [],
  },

  {
    title: "Wealth Pilot – AI Mutual Fund Assistant",
    shortDescription:
      "AI-based mutual fund recommendation and analysis system.",
    description:
      "Wealth Pilot assists users in selecting suitable mutual funds using machine learning models and real-time financial data.",
    problem:
      "Retail investors struggle to analyze mutual funds and market trends effectively.",
    approach: [
      "Used Random Forest and KNN for fund recommendations",
      "Integrated real-time Yahoo Finance data",
      "Built interactive Streamlit UI",
      "Visualized insights using Plotly",
    ],
    tech: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Plotly",
      "Yahoo Finance API",
    ],
    github: "https://github.com/svarunmr",
    images: [],
  },

  {
    title: "Rythmic – Web-Based Music Player",
    shortDescription:
      "Full-stack music streaming platform with admin & user modules.",
    description:
      "Rythmic is a database-driven web music player supporting playlists, listening history, and admin content management.",
    problem:
      "Managing music metadata and playlists requires strong relational database design.",
    approach: [
      "Designed normalized MySQL schema",
      "Built user & admin modules",
      "Implemented playlists and listening history",
      "Ensured data consistency across entities",
    ],
    tech: [
      "MySQL",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/svarunmr",
    images: [],
  },

  {
    title: "HealthyHeart – Heart Disease Prediction System",
    shortDescription:
      "Machine learning-based heart disease risk prediction web application.",
    description:
      "HealthyHeart is a Streamlit-based machine learning application that predicts the likelihood of heart disease using clinical health indicators.",
    problem:
      "Early detection of heart disease is critical, but traditional diagnosis requires expert clinical analysis.",
    approach: [
      "Preprocessed health dataset",
      "Trained classification model",
      "Serialized model using Pickle",
      "Built Streamlit interface for prediction",
    ],
    highlights: [
      "Real-time prediction",
      "End-to-end ML pipeline",
      "Interactive UI",
    ],
    tech: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "NumPy",
      "Pickle",
    ],
    github: "https://github.com/svarunmr",
    demo: "",
    images: [],
  },

  {
    title: "AutoFinanceAI – Enterprise-Grade AI Finance Platform",
    shortDescription:
      "Production-level AI-powered financial management and analytics platform.",
    description:
      "AutoFinanceAI is a scalable React-based financial platform enabling expense tracking, analytics, and AI-powered insights with enterprise-ready architecture.",
    problem:
      "Modern finance platforms require scalability, intelligence, and secure architecture.",
    approach: [
      "Designed scalable React frontend",
      "Implemented modular architecture",
      "Integrated AI financial insights",
      "Optimized performance and state management",
      "Built secure backend communication",
    ],
    highlights: [
      "Enterprise-ready architecture",
      "AI-powered insights",
      "Scalable modular design",
    ],
    tech: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/svarunmr",
    demo: "",
    images: [],
  },

  {
    title: "Smart Inventory & Supply Chain Management System",
    shortDescription:
      "Data-driven inventory and supply chain optimization platform.",
    description:
      "A system designed to optimize stock levels, track product flow, and improve operational efficiency using structured database management.",
    problem:
      "Inefficient inventory systems lead to overstocking, understocking, and operational delays.",
    approach: [
      "Designed relational database schema",
      "Implemented CRUD operations",
      "Built analytics dashboard",
      "Applied inventory optimization logic",
    ],
    highlights: [
      "Inventory tracking",
      "Supply chain optimization",
      "Scalable system design",
    ],
    tech: [
      "Database Management",
      "Backend Development",
      "Web Technologies",
    ],
    github: "https://github.com/svarunmr",
    demo: "",
    images: [],
  },

  {
    title: "SignaSense – AI-Powered Sign Language Translator",
    shortDescription:
      "Real-time deep learning-based hand sign recognition system.",
    description:
      "SignaSense translates hand gestures into text using a hybrid CNN + LSTM deep learning architecture powered by real-time OpenCV video capture.",
    problem:
      "Communication barriers exist between sign language users and non-signers.",
    approach: [
      "Captured gesture sequences using OpenCV",
      "Extracted spatial features using CNN",
      "Modeled temporal dependencies using LSTM",
      "Built real-time inference pipeline",
    ],
    highlights: [
      "Real-time translation",
      "Hybrid CNN + LSTM architecture",
      "Low-latency inference",
    ],
    tech: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "CNN",
      "LSTM",
      "Deep Learning",
    ],
    github: "https://github.com/svarunmr",
    demo: "",
    images: [],
  },
];