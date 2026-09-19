import type { Project } from "../content";
import { Arrow } from "./Arrow";
import { BrandIcon } from "./BrandIcon";
import { TechIcon } from "./TechIcon";

export function ProjectStudy({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const base = import.meta.env.BASE_URL;
  return (
    <article
      id={project.id}
      className={`project project-${project.id}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-heading reveal">
        <div className="project-name">
          <BrandIcon name={project.id} />
          <h3 id={`${project.id}-title`}>{project.name}</h3>
        </div>
        <span className="project-kind">{project.kind}</span>
      </div>
      <div className="project-grid">
        <a
          className="project-image-link reveal"
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Visit ${project.name} website in a new tab`}
        >
          <div className="project-image-wrap">
            <img
              src={`${base}images/${project.image}-1280.webp`}
              srcSet={`${base}images/${project.image}-640.webp 640w, ${base}images/${project.image}-1280.webp 1280w`}
              sizes="(max-width: 800px) calc(100vw - 40px), (max-width: 1280px) 60vw, 760px"
              width="1272"
              height="716"
              alt={project.imageAlt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
          <span className="image-action" aria-hidden="true">
            <Arrow diagonal />
          </span>
        </a>
        <div className="project-copy reveal">
          <h4>{project.headline.replace(/\.$/, "")}</h4>
          <p className="project-context">{project.context}</p>
          <div className="contribution">
            <p>{project.contribution}</p>
          </div>
          <ul
            className="technologies"
            aria-label={`${project.name} technologies and implementation areas`}
          >
            {project.technologies.map((tech) => (
              <li key={tech}>
                <TechIcon name={tech} />
                <span>{tech}</span>
              </li>
            ))}
          </ul>
          <p className="project-status">{project.status}</p>
          <a
            className="text-link"
            href={project.url}
            target="_blank"
            rel="noreferrer"
          >
            {project.id === "stonesaints" ? "Explore demo" : "Visit website"}
            <Arrow diagonal />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
      <details className="project-details">
        <summary>
          Project notes <span aria-hidden="true">+</span>
        </summary>
        <div className="project-notes">
          {project.notes.map((note) => (
            <div key={note.title}>
              <h4>{note.title}</h4>
              <p>{note.body}</p>
            </div>
          ))}
        </div>
      </details>
    </article>
  );
}
