export default function IntroCard() {
  return (
    <>
      <div
        className="card bg-base-100 w-[325px] md:w-[425px] shadow-sm p-5"
        id="intro"
      >
        <div className="font-semibold">
          <div className="py-3 space-y-2">
            <h3 className="text-4xl italic">
              Hi, I am Isteak Ahammed Shupto 👋
            </h3>
            <p className="mt-12">
              ** Competitive programmer, Aspiring software engineer, Tech &
              programming enthusiast
            </p>
          </div>

          <div className="border-t-2 border-base-300 pt-3 space-y-2 pb-3">
            <p>
              <i className="fa-solid fa-code"></i> Web application development
            </p>
            <p>
              <i className="fa-solid fa-code-branch"></i> Problem solving
            </p>
            <p>
              <i className="fas fa-language"></i> Bangla, English
            </p>
          </div>

          <div className="border-t-2 border-base-300 pt-3 space-y-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/shupto006/"
              className="text-gray-500 flex items-center gap-2"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>{" "}
              <p>in/shupto006</p>
            </a>

            <a
              target="_blank"
              href="https://github.com/IsteakShupto"
              className="text-gray-500 flex items-center gap-2"
            >
              <i class="fa-brands fa-square-github text-2xl"></i>{" "}
              <p>github.com/IsteakShupto</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
