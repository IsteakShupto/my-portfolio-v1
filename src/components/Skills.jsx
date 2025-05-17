import SkillsCard from "./SkillsCard";

import { skills } from "../data/data";

export default function Skills() {
  return (
    <>
      <div
        className="w-[225px] md:w-[700px] xl:w-[1100px] mx-auto py-10"
        id="skills"
      >
        <h3 className="text-xl md:text-3xl font-bold mb-4 text-center">
          Skills & Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-3">
          {skills.map((skill, skillIndex) => {
            return (
              <SkillsCard
                key={skillIndex}
                title={skill.title}
                icon={skill.icon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
