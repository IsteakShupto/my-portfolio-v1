export default function SkillsCard({ title, icon }) {
  return (
    <>
      <div className="card w-[225px] md:w-[210px] card-xs shadow-sm bg-base-200 border-base-300">
        <div className="flex flex-col justify-center items-center gap-2 text-center px-3 py-3">
          <p className="text-3xl">
            <i className={icon}></i>
          </p>
          <p className="text-lg">{title}</p>
        </div>
      </div>
    </>
  );
}
