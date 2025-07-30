import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Settings } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Globe,
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "SCSS",
        "Material-UI",
        "Bootstrap",
        "Hero UI",
        "Framer Motion",
      ],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Backend & Full Stack",
      icon: Settings,
      skills: [
        "Node.js",
        "Express.js",
        "Django",
        "Django Rest Framework",
        "REST APIs",
        "AI Agents",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Databases & ORMs",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Prisma",
        "Mongoose",
        "SQLite",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Programming & browser Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "C++", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const tools = [
    "Git & GitHub",
    "Docker",
    "Render",
    "Railway",
    "Vercel",
    "Netlify",
    "Postman",
    "VS Code",
    "Figma",
    "Sentry",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across different
            domains of software development and engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Development Tools & Platforms
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 text-indigo-800 dark:text-indigo-300 rounded-full font-medium hover:shadow-md transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Always Learning</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current
              with the latest tools, frameworks, and best practices in software
              development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
