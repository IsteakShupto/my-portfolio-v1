function MenuButtonSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />{" "}
    </svg>
  );
}

export default function Header() {
  return (
    <>
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <MenuButtonSvg />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="#intro">Intro</a>
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
            <div className="btn btn-ghost text-xl flex items-center">
              <p>
                <a href="/">Shupto</a>
              </p>
              <p>
                <i className="fa-solid fa-code"></i>
              </p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-lg space-x-3">
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
          <div className="navbar-end">
            <a className="btn" href="mailto:isteakahmedshupto@gmail.com">
              Contact Me
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
