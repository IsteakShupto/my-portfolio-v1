export default function ProjectCard({ title, description, tags, details }) {
  return (
    <>
      <div className="card bg-base-100 w-[325px] md:w-[425px] shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="py-3 text-wrap">{description}</p>
          <div className="space-x-2 leading-8">
            {tags.map((tag, tagIndex) => (
              <p key={tagIndex} className="badge badge-soft badge-primary">
                {tag}{" "}
              </p>
            ))}
          </div>
          <div className="card-actions pt-5">
            <a
              className="btn btn-primary w-full"
              href={details}
              target="_blank"
            >
              <i class="fa-brands fa-github text-2xl"></i>
              Code & project details in depth
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
