import { useState } from "react";
import { TechIcon } from "./TechIcon";
const groups = [
  {
    label: "Frontend",
    description:
      "React components, responsive layouts, and the details of the interface.",
    tools: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    label: "Motion",
    description:
      "Three.js scenes, WebGL shaders and movement that belongs in the interface.",
    tools: ["Three.js", "WebGL"],
  },
  {
    label: "Tools & APIs",
    description:
      "The tools I use to develop, collaborate and connect the frontend to services.",
    tools: ["Vite", "Git", "GitHub", "Express", "Stripe"],
  },
];
export function TechStack() {
  const [selected, setSelected] = useState(0);
  return (
    <section
      className="stack-section container"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="stack-heading reveal">
        <h2 id="skills-title">Stack</h2>
        <p>{groups[selected].description}</p>
      </div>
      <div className="stack-body">
        <div className="stack-filters" aria-label="Technology categories">
          {groups.map((group, index) => (
            <button
              key={group.label}
              aria-pressed={selected === index}
              aria-controls="stack-tools"
              onClick={() => setSelected(index)}
            >
              {group.label}
            </button>
          ))}
        </div>
        <div
          className="stack-tools"
          id="stack-tools"
          aria-live="polite"
          aria-atomic="true"
        >
          <ul
            className="tool-grid"
            key={selected}
            aria-label={groups[selected].label}
          >
            {groups[selected].tools.map((tool, index) => (
              <li key={tool} style={{ animationDelay: `${index * 40}ms` }}>
                <TechIcon name={tool} />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
