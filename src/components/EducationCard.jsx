export default function EducationCard({
  university,
  subject,
  starting_year,
  ending_year,
}) {
  return (
    <>
      <div className="pb-9 border-b-2 border-base-300">
        <h1 className="text-xl md:text-4xl mb-2">{university}</h1>
        <p className="font-semibold mb-2">{subject}</p>
        <p className="italic">
          {starting_year} - {ending_year}
        </p>
      </div>
    </>
  );
}
