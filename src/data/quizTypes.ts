export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export type Technology =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "tailwindcss"
  | "sass"
  | "bootstrap"
  | "typescript"
  | "angular"
  | "git"
  | "nodejs";

export interface QuizCategory {
  id: Technology;
  title: string;
  color: string;
  icon: string;
  description: string;
}

export const quizCategories: Record<Technology, QuizCategory> = {
  html: {
    id: "html",
    title: "HTML",
    color: "#f59e0b",
    icon: "html",
    description: "Markup language for structuring web content",
  },
  css: {
    id: "css",
    title: "CSS",
    color: "#2563eb",
    icon: "css",
    description: "Styles the appearance and layout of web pages",
  },
  javascript: {
    id: "javascript",
    title: "JavaScript",
    color: "#f59e0b",
    icon: "js",
    description: "Programming language of the web for interactivity",
  },
  react: {
    id: "react",
    title: "React",
    color: "#2563eb",
    icon: "react",
    description: "Library for building component‑based user interfaces",
  },
  angular: {
    id: "angular",
    title: "Angular",
    color: "#c3002f",
    icon: "angular",
    description: "Framework for building scalable web applications",
  },
  typescript: {
    id: "typescript",
    title: "TypeScript",
    color: "#2563eb",
    icon: "typescript",
    description: "Typed superset of JavaScript for safer code",
  },
  tailwindcss: {
    id: "tailwindcss",
    title: "Tailwind CSS",
    color: "#0ea5e9",
    icon: "tailwind",
    description: "Utility‑first CSS framework for rapid UI development",
  },
  sass: {
    id: "sass",
    title: "Sass",
    color: "#c663d8",
    icon: "sass",
    description: "CSS preprocessor with variables and nesting",
  },
  bootstrap: {
    id: "bootstrap",
    title: "Bootstrap",
    color: "#7952b3",
    icon: "bootstrap",
    description: "Popular CSS framework for responsive design",
  },
  git: {
    id: "git",
    title: "Git",
    color: "#f05032",
    icon: "git",
    description: "Distributed version control for source code",
  },
  nodejs: {
    id: "nodejs",
    title: "Node.js",
    color: "#339933",
    icon: "nodejs",
    description: "JavaScript runtime for building server‑side apps",
  },
};

export const difficultyLevels: Record<
  DifficultyLevel,
  { title: string; description: string }
> = {
  beginner: {
    title: "Beginner",
    description: "Perfect for those just starting out",
  },
  intermediate: {
    title: "Intermediate",
    description: "For developers with some experience",
  },
  advanced: {
    title: "Advanced",
    description: "Challenge yourself with complex concepts",
  },
};
