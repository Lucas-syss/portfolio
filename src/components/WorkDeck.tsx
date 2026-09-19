import { BrandIcon } from "./BrandIcon";
const previews = [
  { id: "pulsifyai", name: "PulsifyAI" },
  { id: "pulsifylabs", name: "PulsifyLabs" },
  { id: "stonesaints", name: "Stone Saints" },
];
export function WorkDeck() {
  return (
    <div className="work-deck" aria-label="Selected website previews">
      <div className="deck-stage">
        {previews.map((project, index) => (
          <a
            className={`deck-card deck-card-${index}`}
            key={project.id}
            href={`#${project.id}`}
            aria-label={`Explore my ${project.name} project`}
          >
            <div className="preview-image">
              <img
                src={`${import.meta.env.BASE_URL}images/${project.id}-640.webp`}
                alt=""
                width="640"
                height="360"
                decoding="async"
              />
              <span className="preview-open" aria-hidden="true">
                ↗
              </span>
            </div>
            <span className="preview-caption">
              <BrandIcon name={project.id} />
              {project.name}
              <span aria-hidden="true">↗</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
