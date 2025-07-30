export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  techStack: string[];
  image: string;
  projectLink?: string;
  githubLink: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "youtube-insights",
    name: "YouTube Insights",
    description:
      "AI-powered YouTube analytics with sentiment analysis and SEO optimization",
    longDescription:
      "YouTube Insights is a full-stack web application leveraging Google Gemini and YouTube Data API to provide creators, marketers, and analysts with real-time sentiment analysis, trending insights, and AI-generated SEO suggestions. Features include performance metrics, emotional tone detection in comments, and intelligent tag generation—all presented in a modern, responsive UI.",
    techStack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express.js",
      "YouTube Data API",
      "Google Gemini API",
    ],
    image:
      "https://raw.githubusercontent.com/IsteakShupto/youtube-insights/refs/heads/main/extras/project-banner.png",
    projectLink: "https://yt-insights.netlify.app/",
    githubLink: "https://github.com/IsteakShupto/youtube-insights",
    featured: true,
  },
  {
    id: "devlop-me",
    name: "Devlop.me",
    description:
      "Responsive developer business UI with dark mode and modular architecture",
    longDescription:
      "Devlop.me is a modern, fully responsive portfolio UI built with React and TypeScript, inspired by a Figma prototype. It features dark/light mode toggling, animated elements, skeleton loaders, accessibility enhancements, and modular file architecture. Includes clean code practices, semantic HTML, and error boundaries for production-level UI development.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Error Boundary",
      "Prettier",
    ],
    image: "https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg",
    projectLink: "https://devlopme.netlify.app/",
    githubLink: "https://github.com/IsteakShupto/devlop.me",
    featured: true,
  },
  {
    id: "sorting-visualizer",
    name: "Sorting Algorithm Visualizer",
    description:
      "Interactive visualizer for classic sorting algorithms with speed and size controls",
    longDescription:
      "An educational web app that visually demonstrates sorting algorithms like Bubble Sort, Merge Sort, Quick Sort, Selection Sort, and Insertion Sort. Built with React and TypeScript, it features adjustable animation speed, array size customization, clean UI, and smooth step-by-step animations. Ideal for students and educators to understand algorithm mechanics interactively.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "HTML5", "Vite"],
    image:
      "https://raw.githubusercontent.com/IsteakShupto/sorting-algos-visualizer/refs/heads/main/screenshots/sorting-visualizer-1.png",
    projectLink: "https://sorting-algorithms-vis.netlify.app/",
    githubLink: "https://github.com/IsteakShupto/sorting-algos-visualizer",
    featured: true,
  },
  {
    id: "aesthestore",
    name: "Aesthestore",
    description:
      "Minimalist sticker & notebook shop with Stripe checkout and modern UI",
    longDescription:
      "Aesthestore is a sleek and aesthetic online store built with Next.js 15, featuring secure Stripe payment integration, real-time cart updates, and a clean component-based UI using ShadCN. Users can browse dynamic products, manage a global cart, and experience a seamless checkout flow. Designed with modular code, ESLint, TypeScript, and Tailwind CSS for developer efficiency.",
    techStack: [
      "Next.js",
      "Stripe",
      "ShadCN UI",
      "Tailwind CSS",
      "React Context API",
      "Axios",
      "TypeScript",
      "ESLint",
    ],
    image:
      "https://raw.githubusercontent.com/IsteakShupto/aesthestore/refs/heads/main/public/screenshots/img-1.png",
    projectLink: "https://aesthestore.vercel.app/",
    githubLink: "https://github.com/IsteakShupto/aesthestore",
    featured: true,
  },
  {
    id: "flashtype",
    name: "FlashType: Typing Performance Tracker",
    description:
      "Track your typing speed, accuracy, and error rate with visual analytics and saved history",
    longDescription:
      "FlashType is a full-stack typing speed test app built with React and Node.js that records WPM, raw WPM, accuracy, and error percentage. It features a real-time typing interface, chart-based performance analytics using Chart.js, and persistent session handling via http-only cookies. All past results are saved and viewable in a dashboard with detailed breakdowns for each test.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "Chart.js",
      "Tailwind CSS",
      "HttpOnly Cookies",
      "TypeScript",
    ],
    image:
      "https://raw.githubusercontent.com/IsteakShupto/flashtype/refs/heads/main/screenshots/img-3.png",
    githubLink: "https://github.com/IsteakShupto/flashtype",
    featured: false,
  },
  {
    id: "workout-tracker",
    name: "Workout Tracker App",
    description:
      "Minimal workout tracker with local progress storage and day-based split",
    longDescription:
      "A simple and intuitive workout tracker built with React and TypeScript, following a Push-Pull-Legs split routine. Users can log max weights, track daily progress, mark workouts as complete, and store all data persistently using localStorage. Features include responsive UI components, Tailwind styling, and complete offline usability.",
    techStack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "localStorage",
    ],
    image:
      "https://raw.githubusercontent.com/IsteakShupto/gym_workout_tracker/refs/heads/main/public/images/img-1.png",
    githubLink: "https://github.com/IsteakShupto/gym_workout_tracker",
    featured: false,
  },
  {
    id: "ai-code-reviewer",
    name: "AI-Powered Code Reviewer",
    description:
      "AI code review web app with markdown feedback and animal-themed personas",
    longDescription:
      "This full-stack AI-based code reviewer lets users submit code snippets and receive structured, markdown-formatted reviews generated by Google's Gemini SDK. Users can choose from playful animal personas (like Cat, Dog, Bird) that give feedback in sections such as Issues Found, Suggestions, and Final Thoughts. Built with React, Redux Toolkit, Express.js, and the Gemini SDK, it supports syntax highlighting, persistent state management, and an interactive UI.",
    techStack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Gemini SDK",
      "react-markdown",
      "rehype-highlight",
      "dotenv",
    ],
    image: "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg",
    githubLink: "https://github.com/IsteakShupto/ai-code-reviewer",
    featured: false,
  },
  {
    id: "langverse",
    name: "Langverse – Real-Time Voice Translator",
    description:
      "Multilingual translator app with voice input powered by Gemini AI",
    longDescription:
      "Langverse is a real-time multi-language translation app with voice and text input support. Built using React, Redux Toolkit, and Express.js, it integrates Google Gemini for AI-based translation. Users can speak or type in English and receive instant translations in languages like Bengali, Arabic, French, and Spanish. The app includes auto-submission on speech end, a chat-like interface, and state management via RTK Query.",
    techStack: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Vite",
      "TailwindCSS",
      "Express.js",
      "Node.js",
      "Google Gemini API",
      "react-speech-recognition",
    ],
    image:
      "https://images.pexels.com/photos/18069696/pexels-photo-18069696.png",
    githubLink: "https://github.com/IsteakShupto/langverse",
    featured: false,
  },
];
