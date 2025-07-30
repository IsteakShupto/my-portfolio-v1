import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Trophy, Target, TrendingUp } from "lucide-react";

const ProblemSolving: React.FC = () => {
  const stats = [
    { label: "Problems Solved", value: "1300+", icon: Target },
    { label: "Contests Participated", value: "72+", icon: Trophy },
    { label: "Current Rating", value: "1300", icon: TrendingUp },
    { label: "Max Rating", value: "1300", icon: Trophy },
  ];

  const platforms = [
    {
      name: "Codeforces",
      username: "QuirkSolver",
      rating: "1300 (Pupil)",
      problems: "1200+",
      link: "https://codeforces.com/profile/QuirkSolver",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Vjudge",
      username: "Shupto_006",
      rating: "-",
      problems: "90+",
      link: "https://vjudge.net/user/Shupto_006",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "LeetCode",
      username: "shupto_006",
      rating: "-",
      problems: "90+",
      link: "https://leetcode.com/u/shupto_006",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Problem Solving Journey
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My competitive programming journey spans multiple platforms, with a
            focus on algorithmic problem-solving, data structures, and
            mathematical challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3 mx-auto" />
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-full flex items-center justify-center text-white text-xl font-bold mb-4`}
              >
                {platform.name[0]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {platform.name}
              </h3>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Username:</span>{" "}
                  {platform.username}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Rating:</span> {platform.rating}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <span className="font-medium">Problems:</span>{" "}
                  {platform.problems}
                </p>
              </div>
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                View Profile
                <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Achievements
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  Reached Pupil level on Codeforces (1300 rating)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  March 2025
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  Solved 1300+ problems across all platforms
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Jan 2020 - (Now)
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <p className="text-gray-900 dark:text-white font-medium">
                  Solved four problems in Codeforces Round 1014 (Div. 2)
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  March 2025
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSolving;
