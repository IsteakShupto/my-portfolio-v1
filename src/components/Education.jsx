import EducationCard from "./EducationCard";

const education = [
  {
    university: "Khulna University of Engineering & Technology",
    subject: "Bachelor of Science in Electronics & Communication Engineering",
    starting_year: "January 2020",
    ending_year: "July 2025 (expected graduation time)",
  },
  {
    university: "Adamjee Cantonment College",
    subject: "Higher Secondary School (Science)",
    starting_year: "April 2017",
    ending_year: "July 2019",
  },
  {
    university: "Banani Bidyaniketan School & College",
    subject: "Secondary School Certificate (Science)",
    starting_year: "January 2007",
    ending_year: "March 2017",
  },
];

export default function Education() {
  return (
    <>
      <div
        className="w-[225px] md:w-[700px] xl:w-[1100px] mx-auto py-10"
        id="education"
      >
        <h3 className="text-xl md:text-3xl font-bold mb-4">
          Education & Learning
        </h3>
        <div className="flex flex-col gap-10">
          {education.map((edu, eduIndex) => {
            return (
              <EducationCard
                key={eduIndex}
                university={edu.university}
                subject={edu.subject}
                starting_year={edu.starting_year}
                ending_year={edu.ending_year}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
