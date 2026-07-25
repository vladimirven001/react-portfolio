export const profileLinks = [
  { label: "github", href: "https://github.com/vladimirven001" },
  { label: "linkedin", href: "https://www.linkedin.com/in/vladimir-venkov/" },
  { label: "email", href: "mailto:vladimirven001@gmail.com" },
];

export const visitorNumbers = [
  { value: "000067" },
  { value: "111111" },
  { value: "222222" },
  { value: "333333" },
  { value: "000404", meaning: "not found" },
  { value: "404404", meaning: "very not found" },
  { value: "101010" },
  { value: "123321" },
  { value: "314159", meaning: "pi" },
  { value: "271828", meaning: "e" },
  { value: "000707", meaning: "LOL" },
  { value: "007734", meaning: "HELLO" },
  { value: "077345", meaning: "SHELL" },
  { value: "376006", meaning: "GOOGLE" },
  { value: "5508", meaning: "BOSS" },
  { value: "133713", meaning: "leet-ish" },
];

export const workExperience = [
  {
    company: "Squarepoint Capital",
    title: "Software Developer Intern",
    dates: "May 2026 - present",
    bullets: [
      "Working with the Risk team on an internal health-check service for critical trading infrastructure.",
      "Building alerting, business approval flow, and ownership-routing features.",
      "Providing L2 support for Risk-related services.",
    ],
  },
  {
    company: "Squarepoint Capital",
    title: "Software Developer Intern",
    dates: "May 2025 - August 2025",
    bullets: [
      "Built scrapers and ingestion pipelines for quantitative research data.",
      "Developed a Python standards framework with GitLab CI/CD and Grafana reporting.",
      "Supported recovery communication during the June 12, 2025 global GCP outage.",
    ],
  },
  {
    company: "Intact Insurance",
    title: "AI Backend Developer Intern",
    dates: "January 2025 - May 2025",
    bullets: [
      "Re-architected an internal ETL pipeline for better scalability and enterprise-tool integration.",
      "Turned stakeholder interviews into clear technical and business requirements.",
      "Designed database schema and ORM support for bilingual data and ETL evidence tracking.",
    ],
  },
  {
    company: "Bell",
    title: "Software Developer Intern",
    dates: "May 2024 - November 2024",
    bullets: [
      "Built a RAG system that reduced onboarding time for new solution architects by 50%.",
      "Created a modular ingestion pipeline for Confluence pages, Excel sheets, and internal data assets.",
    ],
  },
];

export const projects = [
  {
    title: "openswe",
    type: "dev tool",
    href: "https://github.com/vladimirven001/openswe",
    extraHref: "https://www.npmjs.com/package/@vladimirven/openswe",
    extraLabel: "npm",
    image: "/openswe-demo.webp",
    imageAlt: "openswe demo screenshot",
    stack: "TypeScript / CLI / GitHub / AI agents",
    copy:
      "AI coding-agent orchestration for GitHub issues. Pick a repo, fetch work, launch an agent.",
  },
  {
    title: "lessnotes",
    type: "study helper",
    href: "https://github.com/vladimirven001/codejam14-lessnotes",
    stack: "TypeScript / Python / Ollama",
    copy:
      "RAG app for students that answers questions from their own notes.",
  },
  {
    title: "WatchMatch",
    type: "similarity search",
    href: "https://github.com/vladimirven001/WatchMatch",
    image: "/watchmatch.png",
    imageAlt: "WatchMatch search results screenshot",
    stack: "Python / scikit-learn",
    copy:
      "Find budget-friendly watch alternatives that match a model you already like.",
  },
];
