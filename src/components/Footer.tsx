import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto italic">
            "Competitive programmer and aspiring software engineer driven by a
            passion for technology and solving challenging problems with elegant
            solutions"
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/IsteakShupto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shupto006/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:isteakahmedshupto@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Copyright © 2025 Shupto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
