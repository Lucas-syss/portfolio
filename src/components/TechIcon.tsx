export function TechIcon({ name }: { name: string }) {
  const key = name.includes("Stripe") ? "Stripe" : name;
  let shape;
  switch (key) {
    case "React":
      shape = (
        <>
          <ellipse cx="16" cy="16" rx="14" ry="5.3" />
          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="5.3"
            transform="rotate(60 16 16)"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="14"
            ry="5.3"
            transform="rotate(120 16 16)"
          />
          <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" />
        </>
      );
      break;
    case "TypeScript":
    case "JavaScript":
      shape = (
        <>
<text
            x="16"
            y="25"
            textAnchor="middle"
            fontFamily="Arial,sans-serif"
            fontSize="22"
            fontWeight="700"
            stroke="none"
            fill="currentColor"
          >
            {key === "TypeScript" ? "TS" : "JS"}
          </text>
        </>
      );
      break;
    case "HTML":
    case "CSS":
      shape = (
        <>
          <path
            d="M4 3h24l-2.4 24L16 30l-9.6-3Z"
            fill="currentColor"
            stroke="none"
          />
          <text
            x="16"
            y="24"
            textAnchor="middle"
            fontFamily="Arial,sans-serif"
            fontSize="22"
            fontWeight="700"
            stroke="none"
            fill="#101010"
          >
            {key === "HTML" ? "5" : "3"}
          </text>
        </>
      );
      break;
    case "Tailwind CSS":
      shape = (
        <path
          d="M2 13c2-8 9-10 14-5 3 3 5 3 7 1-2 8-9 10-14 5-3-3-5-3-7-1Zm7 10c2-8 9-10 14-5 3 3 5 3 7 1-2 8-9 10-14 5-3-3-5-3-7-1Z"
          fill="currentColor"
          stroke="none"
        />
      );
      break;
    case "Three.js":
      shape = (
        <>
          <path d="m4 2 25 8-8 20Z" />
          <path d="m4 2 17 15 8-7M21 17v13M4 2l8 24 9-9" />
          <path d="m12 26 17-16" />
        </>
      );
      break;
    case "WebGL":
      shape = (
        <>
          <path d="m16 2 13 7v14l-13 7L3 23V9Z" />
          <path d="m3 9 13 8 13-8M16 17v13" />
          <path d="m9 6 14 8v12" />
        </>
      );
      break;
    case "Vite":
      shape = (
        <>
          <path d="m2 6 14 25L30 6l-13 3Z" fill="currentColor" stroke="none" />
          <path d="m19 1-9 17h7l-2 11L26 10h-8Z" fill="#77776e" stroke="none" />
        </>
      );
      break;
    case "Git":
      shape = (
        <>
          <rect
            x="5"
            y="5"
            width="22"
            height="22"
            rx="2"
            transform="rotate(45 16 16)"
            fill="currentColor"
            stroke="none"
          />
          <path d="M12 6v16m0-12 10 10" stroke="#101010" strokeWidth="2" />
          <g fill="#101010" stroke="none">
            <circle cx="12" cy="11" r="2.6" />
            <circle cx="12" cy="23" r="2.6" />
            <circle cx="22" cy="21" r="2.6" />
          </g>
        </>
      );
      break;
    case "GitHub":
      shape = (
        <path
          fill="currentColor"
          stroke="none"
          d="M16 2a14 14 0 0 0-4.4 27.3c.7.1 1-.3 1-.7v-2.7c-4.1.9-5-1.7-5-1.7-.7-1.6-1.6-2.1-1.6-2.1-1.3-.9.1-.9.1-.9 1.5.1 2.2 1.5 2.2 1.5 1.3 2.2 3.3 1.6 4.2 1.2.1-.9.5-1.6.9-1.9-3.3-.4-6.7-1.7-6.7-7.4 0-1.6.6-3 1.5-4-.1-.4-.7-1.9.2-4 0 0 1.2-.4 4 1.5a14 14 0 0 1 7.3 0c2.8-1.9 4-1.5 4-1.5.9 2.1.3 3.6.2 4 1 1 1.5 2.4 1.5 4 0 5.7-3.5 7-6.8 7.4.5.5 1 1.4 1 2.7v4c0 .4.3.8 1 .7A14 14 0 0 0 16 2Z"
        />
      );
      break;
    case "Express":
      shape = (
        <text
          x="1"
          y="24"
          fontFamily="Arial,sans-serif"
          fontSize="25"
          fontWeight="300"
          stroke="none"
          fill="currentColor"
        >
          ex
        </text>
      );
      break;
    case "Stripe":
      shape = (
        <text
          x="6"
          y="27"
          fontFamily="Arial,sans-serif"
          fontSize="33"
          fontWeight="900"
          stroke="none"
          fill="currentColor"
        >
          S
        </text>
      );
      break;
    default:
      shape = (
        <>
          <path d="m10 8-8 8 8 8m12-16 8 8-8 8M19 3l-6 26" />
        </>
      );
  }
  return (
    <svg
      className="tech-icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {shape}
    </svg>
  );
}
