export interface Project {
  id: string;
  name: string;
  kind: string;
  headline: string;
  context: string;
  contribution: string;
  technologies: string[];
  url: string;
  image: string;
  imageAlt: string;
  notes: { title: string; body: string }[];
  status: string;
}

export const profile = {
  name: "Lucas Cleminson",
  email: "cleminsonlucas4@gmail.com",
  github: "https://github.com/Lucas-syss",
  linkedin: "https://www.linkedin.com/in/lucas-cleminson",
};

export const projects: Project[] = [
  {
    id: "pulsifyai",
    name: "PulsifyAI",
    kind: "Professional · Public website",
    headline: "From a section brief to a complete website.",
    context:
      "The public website for a Portuguese company building AI voice assistants for businesses.",
    contribution:
      "I built the website from scratch as the sole frontend developer, translating the CEO’s requirements into the layouts, responsive components, animations and WebGL visuals.",
    technologies: ["React", "JavaScript", "Three.js", "Tailwind CSS"],
    url: "https://pulsifyai.com",
    image: "pulsifyai",
    imageAlt:
      "PulsifyAI website with a blue particle logo and a Portuguese headline about AI assistants.",
    status: "Live website",
    notes: [
      {
        title: "My scope",
        body: "Frontend implementation across the website, including its visual presentation and interactions. The CEO provided the content and direction for each section.",
      },
      {
        title: "Engineering",
        body: "React components, Three.js scenes and vertex and fragment shaders. I adapted the site for desktop, tablet and mobile, and checked the implementation manually.",
      },
    ],
  },
  {
    id: "pulsifylabs",
    name: "PulsifyLabs",
    kind: "Professional · Public landing page",
    headline: "A clear introduction to a voice AI platform.",
    context:
      "A public landing page introducing a platform for businesses to create and deploy AI voice agents.",
    contribution:
      "I designed and built the landing page from scratch. It is one of my favourite pieces of work: a complete page where I could focus on the layout, visual hierarchy and responsive presentation.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://labs.pulsifyai.com",
    image: "pulsifylabs",
    imageAlt:
      "PulsifyLabs public landing page with editorial typography and Portuguese blue tile imagery.",
    status: "Live website",
    notes: [
      {
        title: "My scope",
        body: "The design and frontend implementation of the public landing page, as PulsifyAI’s sole frontend developer.",
      },
      {
        title: "Implementation",
        body: "Built within the platform’s React and TypeScript frontend. I worked on its presentation across desktop, tablet and mobile, using manual testing to review the result.",
      },
    ],
  },
  {
    id: "imocoach",
    name: "ImoCoach",
    kind: "Professional · Production application",
    headline: "A new interface for a real training product.",
    context:
      "An AI voice-training platform where Portuguese real estate agents practise sales conversations.",
    contribution:
      "As the sole frontend developer, I redesigned the application, its admin interface and the public landing page for a more modern, consistent appearance across screen sizes.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    url: "https://imocoach.com",
    image: "imocoach",
    imageAlt:
      "The public ImoCoach landing page, with gold accents and an animated particle mark.",
    status: "In production · Landing page evolving",
    notes: [
      {
        title: "My scope",
        body: "Frontend redesign within a team building the wider product. The AI training capabilities are part of the platform; my contribution here is the interface work.",
      },
      {
        title: "Current state",
        body: "The redesigned interfaces are live. Further landing-page work is awaiting direction. The image shown here is the public website; it does not show a private account.",
      },
    ],
  },
  {
    id: "stonesaints",
    name: "Stone Saints",
    kind: "Academic · Individual project",
    headline: "An independent take on an online storefront.",
    context:
      "An underground clothing and jewellery shop created as a school project, with no real commercial sales.",
    contribution:
      "I built the entire project myself, including the storefront and the implementation of Stripe payments and Google sign-in. It is a personal favourite for its visual direction.",
    technologies: [
      "Storefront development",
      "Stripe integration",
      "Google sign-in",
    ],
    url: "https://stonesaints.vercel.app/",
    image: "stonesaints",
    imageAlt:
      "Stone Saints clothing storefront with monochrome imagery and condensed collection typography.",
    status: "Live demo · Payments and Google sign-in disabled",
    notes: [
      {
        title: "My scope",
        body: "An individual academic project: the site and its implementation were my own work. I adapted the interface for desktop, tablet and mobile.",
      },
      {
        title: "Demo limitations",
        body: "The storefront can be explored publicly. Stripe and Google sign-in were subsequently switched off; their implementation remains in the project. This is not an active shop.",
      },
    ],
  },
];
