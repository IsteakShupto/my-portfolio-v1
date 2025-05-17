import ProblemSolvingImg1 from "../assets/problem_solving/problem-solving-img-1.png";
import ProblemSolvingImg2 from "../assets/problem_solving/problem-solving-img-2.png";
import ProblemSolvingImg3 from "../assets/problem_solving/problem-solving-img-3.png";

export default function ProblemSolving() {
  return (
    <>
      <div
        className="w-[325px] md:w-[800px] xl:w-[1100px] mx-auto xl:py-10"
        id="problem_solving"
      >
        <div className="xl:flex xl:gap-3">
          <div>
            <h2 class="text-xl md:text-3xl font-bold mb-4 text-center">
              Competitive Programming & problem solving Journey
            </h2>
            <p>
              I have solved{" "}
              <strong className="text-primary">
                1200+ problems (primarily in codeforces online judge)
              </strong>{" "}
              and continuing to solve problems across various online judges and
              actively participated in{" "}
              <strong className="badge badge-soft badge-primary">
                70+ contests
              </strong>
              . Competitive programming has been instrumental in honing my
              algorithmic thinking, data structure mastery, and problem-solving
              speed.
            </p>
            <p class="mt-4 mb-4 flex items-center">
              Codeforces profile link 👉
              <a
                href="https://codeforces.com/profile/QuirkSolver"
                target="_blank"
                class="badge badge-soft badge-primary font-bold ml-2"
              >
                QuirkSolver
              </a>
            </p>
          </div>
          <div className="hidden xl:flex xl:flex-col xl:gap-4 xl:w-[800px] mx-auto">
            <div className="card bg-base-100 shadow-sm w-[600px] p-5">
              <img src={ProblemSolvingImg1} alt="codeforces profile 1" />
            </div>
            <div className="card bg-base-100 shadow-sm w-[600px] p-5">
              <img src={ProblemSolvingImg2} alt="codeforces profile 2" />
            </div>
            <div className="card bg-base-100 shadow-sm w-[600px] p-5">
              <img src={ProblemSolvingImg3} alt="codeforces profile 3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
