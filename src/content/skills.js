export const skillGroups = [
  {
    id: "languages",
    number: "01",
    label: "Languages",
    items: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    id: "backend",
    number: "02",
    label: "Backend",
    items: ["Node.js", "Express", "REST APIs"],
  },
  {
    id: "databases",
    number: "03",
    label: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    id: "ai-ml",
    number: "04",
    label: "AI / Machine Learning",
    subgroups: [
      {
        label: "Machine Learning Algorithms",
        items: [
          "Linear Regression",
          "Logistic Regression",
          "Decision Trees",
          "Random Forest",
          "Support Vector Machines",
          "K-Nearest Neighbors",
        ],
      },
      {
        label: "Deep Learning",
        items: [
          "Neural Networks",
          "CNNs",
          "RNNs",
          "LSTMs",
        ],
      },
      {
        label: "Computer Vision",
        items: [
          "YOLO / YOLOv8",
          "OpenCV",
          "Object Detection",
        ],
      },
      {
        label: "ML / Data Ecosystem",
        items: [
          "Scikit-learn",
          "NumPy",
          "Pandas",
          "PyTorch",
          "Gradio",
          "Streamlit",
        ],
      },
    ],
  },
  {
    id: "fundamentals",
    number: "05",
    label: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "OOP",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    id: "tools",
    number: "06",
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "Visual Studio Code", "Postman", "Vite"],
  },
];
