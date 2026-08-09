export const projects = [
  {
    id: "cauli-det-cauliflower-disease-detection",
    slug: "cauli-det-cauliflower-disease-detection",
    title: "Cauli-Det – Cauliflower Disease Detection",
    category: "Computer Vision",
    featured: false,
    shortDescription:
      "YOLOv8-based computer vision system for detecting and classifying diseases in cauliflower leaf images.",
    description:
      "Cauli-Det is a computer vision pipeline for identifying common cauliflower diseases from leaf images. The system uses YOLOv8 to classify four disease/health categories and provides annotated predictions with confidence scores.",
    problem:
      "Early identification of crop diseases can help enable faster intervention. Manual inspection of plant leaves is time-consuming and depends on domain expertise. Cauli-Det explores an image-based approach for automatically identifying common cauliflower diseases from leaf images.",
    approach: [
      "Built a YOLOv8-based detection pipeline around a cauliflower disease dataset",
      "Split images into training and validation sets",
      "Applied random flips, rotations, color adjustments, and resized crops for augmentation",
      "Trained the model for 200 epochs",
      "Evaluated using mAP metrics, class-wise performance, classification reports, and a confusion matrix",
    ],
    highlights: [
      "Trained a YOLOv8s model across four cauliflower disease classes",
      "Automated training and validation dataset preparation",
      "Applied image augmentation to improve training diversity",
      "Evaluated performance using mAP, precision, recall, accuracy, and confusion matrices",
      "Built interactive inference interfaces using Gradio and Streamlit",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "Ultralytics",
      "PyTorch",
      "Gradio",
      "Streamlit",
    ],
    github:
      "https://github.com/svarunmr/Cauli-Det-cauliflower-disease-detection",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "snake-game-ai",
    slug: "snake-game-ai",
    title: "Snake Game AI — Autonomous Pathfinding in C",
    category: "Algorithms / Systems",
    featured: false,
    shortDescription:
      "Terminal-based Snake implementation in C with autonomous pathfinding using A*, BFS, custom heuristics, and body-aware traversal.",
    description:
      "A terminal-based Snake implementation with an autonomous gameplay mode that uses graph-search algorithms to navigate toward food while accounting for obstacles and the snake's changing body state.",
    problem:
      "Finding a path to food is straightforward when the board is static, but Snake introduces a dynamic obstacle: the snake itself. The pathfinder therefore needs to reason about blocked cells, body configuration, board boundaries and optional wraparound movement.",
    approach: [
      "Implemented A* search with configurable heuristics and a BFS alternative. The search maintains per-cell path costs and parent relationships while validating candidate paths against the snake's changing body configuration. Wraparound boards are supported through teleport-aware neighbor and heuristic logic.",
    ],
    highlights: [
      "A* pathfinding with configurable heuristic behavior.",
      "BFS as an alternative shortest-path strategy.",
      "Body-aware path validation.",
      "Custom stack, queue, min-heap and linked data structures.",
      "Configurable board dimensions, obstacles, speed and wraparound mechanics.",
      "Multiple gameplay modes including autonomous and screensaver modes.",
      "Makefile-based build/debug workflow.",
    ],
    technologies: ["C", "A*", "BFS", "Data Structures", "Make"],
    github: "https://github.com/svarunmr/Snake_Game_AI",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "finai-ai-powered-finance-tracker",
    slug: "finai-ai-powered-finance-tracker",
    title: "FinAI – AI-Powered Finance Tracker",
    category: "FinTech",
    featured: false,
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
    highlights: [],
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Plaid API",
      "GPT-4o",
    ],
    github: "",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "wealth-pilot-ai-mutual-fund-assistant",
    slug: "wealth-pilot-ai-mutual-fund-assistant",
    title: "Wealth Pilot – AI Mutual Fund Assistant",
    category: "FinTech",
    featured: false,
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
    highlights: [],
    technologies: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "Plotly",
      "Yahoo Finance API",
    ],
    github: "",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "rythmic-web-based-music-player",
    slug: "rythmic-web-based-music-player",
    title: "Rythmic – Web-Based Music Player",
    category: "Web Development",
    featured: false,
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
    highlights: [],
    technologies: ["MySQL", "PHP", "JavaScript", "HTML", "CSS"],
    github: "",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "healthyheart-heart-disease-prediction-system",
    slug: "healthyheart-heart-disease-prediction-system",
    title: "HealthyHeart – Heart Disease Prediction System",
    category: "Machine Learning",
    featured: false,
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
    technologies: [
      "Python",
      "Machine Learning",
      "Streamlit",
      "NumPy",
      "Pickle",
    ],
    github: "",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "smartledgerai-enterprise-ai-finance-platform",
    slug: "smartledgerai-enterprise-ai-finance-platform",
    title: "SmartLedgerAI – Enterprise-Grade AI Finance Platform",
    category: "FinTech",
    featured: false,
    shortDescription:
      "Production-level AI-powered financial management and analytics platform.",
    description:
      "SmartLedgerAI is a scalable React-based financial platform enabling expense tracking, analytics, and AI-powered insights with enterprise-ready architecture.",
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
    technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Express"],
    github: "",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "smart-inventory-supply-chain-management-system",
    slug: "smart-inventory-supply-chain-management-system",
    title: "Smart Inventory & Supply Chain Management System",
    category: "Supply Chain",
    featured: false,
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
    technologies: [
      "Database Management",
      "Backend Development",
      "Web Technologies",
    ],
    github: "",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },

  {
    id: "signasense-ai-powered-sign-language-translator",
    slug: "signasense-ai-powered-sign-language-translator",
    title: "SignaSense – AI-Powered Sign Language Translator",
    category: "Accessibility & AI",
    featured: false,
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
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "CNN",
      "LSTM",
      "Deep Learning",
    ],
    github: "",
    demo: "",
    images: [],
    status: "",
    date: "",
    metrics: {},
  },
];
