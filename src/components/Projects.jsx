import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <>
      <div id="projects" className="py-10">
        <h3 className="text-xl md:text-3xl font-bold mb-4 text-center">
          Projects & selected Works
        </h3>
        <div className="w-[325px] md:w-[800px] xl:w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            <ProjectCard
              title={"Aesthestore"}
              description={
                "Aesthestore is a full-stack web application - a clean, aesthetic sticker and notebook shop built to explore & integrate Stripe Checkout from scratch."
              }
              tags={[
                "Next.js",
                "ShadCN UI",
                "Stripe SDK (Node.js)",
                "Tailwind CSS",
                "React Context API",
                "TypeScript",
              ]}
              details="https://github.com/IsteakShupto/aesthestore"
            />

            <ProjectCard
              title={"FlashType"}
              description={
                "FlashType is a full-stack web application that tracks the typing performance and speed in real time."
              }
              tags={[
                "React.js",
                "Redux toolkit",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "Chart.js",
                "TypeScript",
              ]}
              details="https://github.com/IsteakShupto/flashtype"
            />

            <ProjectCard
              title={"Sorting Algorithm Visualizer"}
              description={
                "Sorting Algorithm Visualizer is a web application that visually demonstrates how popular sorting algorithms operate in real-time. The application demonstrates Insertion Sort, Bubble Sort, Selection Sort, Quick Sort, and Merge Sort."
              }
              tags={["React.js", "TypeScript"]}
              details="https://github.com/IsteakShupto/sorting-algos-visualizer"
            />

            <ProjectCard
              title={"Gym workout tracker"}
              description={
                "A responsive workout tracker built with React, TailwindCSS, and TypeScript to log, track, and persist daily Push/Pull/Leg routines. Features localStorage-based state, max weight inputs, and workout completion tracking."
              }
              tags={["React.js", "TailwindCSS", "Local storage", "TypeScript"]}
              details="https://github.com/IsteakShupto/gym_workout_tracker"
            />

            <ProjectCard
              title={"AI code reviewer"}
              description={
                "This is an AI-based code review web application built with React.js, Redux Toolkit, Express.js, and the Gemini SDK. It generates structured and intelligent feedback on code snippets using different animal-themed reviewer personas."
              }
              tags={[
                "React.js",
                "TailwindCSS",
                "DaisyUI",
                "Redux Toolkit",
                "Express.js",
                "Gemini SDK",
              ]}
              details="https://github.com/IsteakShupto/ai-code-reviewer"
            />

            <ProjectCard
              title={"Langverse with voice input"}
              description={
                "Langverse is a real-time multi-language translator app built with React, Redux Toolkit, and a nodejs backend that integrates with Google Gemini for language translation. It supports both text and voice inputs, translating from English into selected languages such as Bengali, Arabic, French, and Spanish."
              }
              tags={[
                "React.js",
                "TailwindCSS",
                "DaisyUI",
                "Redux Toolkit",
                "Express.js",
                "Gemini SDK",
              ]}
              details="https://github.com/IsteakShupto/langverse"
            />

            <ProjectCard
              title={"Devlop.me"}
              description={
                "A pixel perfect mobile and desktop friendly web landing page designed using React.JS and Framer motion with dark/light mode switching feature availability."
              }
              tags={[
                "React.js",
                "TailwindCSS",
                "Local storage",
                "TypeScript",
                "Framer motion",
              ]}
              details="https://github.com/IsteakShupto/devlop.me"
            />
          </div>
        </div>
      </div>
    </>
  );
}
