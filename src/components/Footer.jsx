export default function Footer() {
  return (
    <footer className="bg-base-300">
      <div className="w-[225px] md:w-[700px] xl:w-[1100px] mx-auto py-10">
        <div>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-10">
            <div>
              <h5 className="font-bold mb-4">Revisit sections</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#intro">Introduction</a>
                </li>
                <li>
                  <a href="#problem_solving">Problem solving</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#education">Education</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Social links</h5>
              <ul className="space-y-2">
                <li>
                  <a target="_blank" href="https://github.com/IsteakShupto">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/shupto006/"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:isteakahmedshupto@gmail.com">Gmail</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Tech Stack</h5>
              <ul className="space-y-2">
                <li>
                  <i class="fa-solid fa-code me-2"></i>C++
                </li>
                <li>
                  <i class="fa-brands fa-python me-2"></i>Python
                </li>
                <li>
                  <i class="fa-brands fa-js me-2"></i>JavaScript
                </li>
                <li>
                  <i class="fa-solid fa-code me-2"></i>TypeScript
                </li>
                <li>
                  <i class="fa-brands fa-html5 me-2"></i>HTML
                </li>
                <li>
                  <i class="fa-brands fa-css3-alt me-2"></i>CSS
                </li>
                <li>
                  <i class="fa-brands fa-bootstrap me-2"></i>Bootstrap
                </li>
                <li>
                  <i class="fa-solid fa-wind me-2"></i>Tailwind CSS
                </li>
                <li>
                  <i class="fa-brands fa-react me-2"></i>React.js
                </li>
                <li>
                  <i class="fa-brands fa-react me-2"></i>Next.js
                </li>
                <li>
                  <i class="fa-solid fa-diagram-project me-2"></i>Redux.js
                </li>
                <li>
                  <i class="fa-solid fa-palette me-2"></i>ShadCN UI
                </li>
                <li>
                  <i class="fa-solid fa-leaf me-2"></i>DaisyUI
                </li>
                <li>
                  <i class="fa-solid fa-cubes me-2"></i>NextUI
                </li>
                <li>
                  <i class="fa-brands fa-node me-2"></i>Node.js
                </li>
                <li>
                  <i class="fa-solid fa-network-wired me-2"></i>Express.js
                </li>
                <li>
                  <i class="fa-solid fa-server me-2"></i>Django RF
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-4">Tools & More</h5>
              <ul className="space-y-2">
                <li>
                  <i class="fa-solid fa-leaf me-2"></i>MongoDB
                </li>
                <li>
                  <i class="fa-solid fa-database me-2"></i>Mongoose ODM
                </li>
                <li>
                  <i class="fa-solid fa-database me-2"></i>PostgreSQL
                </li>
                <li>
                  <i class="fa-solid fa-cubes me-2"></i>Prisma ORM
                </li>
                <li>
                  <i class="fa-brands fa-git-alt me-2"></i>Git
                </li>
                <li>
                  <i class="fa-brands fa-github me-2"></i>GitHub
                </li>
                <li>
                  <i class="fa-solid fa-cubes me-2"></i>OOP
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold mb-4">Isteak Ahammed Shupto</h2>
              <p>
                Competitive programmer and aspiring software engineer driven by
                a passion for technology and solving challenging problems with
                elegant solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 md:px-0 py-5 border-t-2 border-base-100 text-center">
        <p>&copy; 2025 Isteak Ahammed Shupto. All rights reserved.</p>
      </div>
    </footer>
  );
}
