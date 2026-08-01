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
  { value: "000707", meaning: "lol" },
  { value: "007734", meaning: "hello" },
  { value: "077345", meaning: "shell" },
  { value: "376006", meaning: "google" },
  { value: "5508", meaning: "boss" },
  { value: "133713", meaning: "leet-ish" },
];

export const workExperience = [
  {
    company: "squarepoint capital",
    title: "software developer intern",
    dates: "may 2026 - present",
    bullets: [
      "working with the risk team on an internal health-check service for critical trading infrastructure.",
      "implementing alerting, observability, and auditing.",
      "providing l2 support for risk-related services.",
    ],
  },
  {
    company: "squarepoint capital",
    title: "software developer intern",
    dates: "may 2025 - august 2025",
    bullets: [
      "built scrapers and ingestion pipelines for quantitative research data.",
      "developed a python evaluation framework for internal coding standards.",
    ],
  },
  {
    company: "intact insurance",
    title: "ai backend developer intern",
    dates: "january 2025 - may 2025",
    bullets: [
      "re-architected an internal etl pipeline for better scalability and easier implementation of new features.",
      "turned stakeholder interviews into clear technical and business requirements.",
      "designed database schema and orm support for bilingual data and etl evidence tracking.",
    ],
  },
  {
    company: "bell",
    title: "software developer intern",
    dates: "may 2024 - november 2024",
    bullets: [
      "built a rag system that reduced onboarding time for new solution architects by 50%.",
      "created a modular ingestion pipeline for confluence pages, excel sheets, and internal data assets.",
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
    stack: "typescript / cli / github / ai agents",
    copy:
      "ai coding-agent orchestration for github issues. pick a repo, fetch work, launch an agent.",
  },
  {
    title: "lessnotes",
    type: "study helper",
    href: "https://github.com/vladimirven001/codejam14-lessnotes",
    stack: "typescript / python / ollama",
    copy:
      "rag app for students that answers questions from their own notes.",
  },
  {
    title: "watchmatch",
    type: "similarity search",
    href: "https://github.com/vladimirven001/WatchMatch",
    image: "/watchmatch.png",
    imageAlt: "watchmatch search results screenshot",
    stack: "python / scikit-learn",
    copy:
      "find budget-friendly watch alternatives that match a model you already like.",
  },
];
