export type DifficultyLevel = "beginner" | "intermediate" | "advanced";

export type Technology = "html" | "css" | "javascript" | "tailwindcss";

export interface QuizCategory {
  id: Technology;
  title: string;
  color: string;
  icon: string;
}

export const quizCategories: Record<Technology, QuizCategory> = {
  html: {
    id: "html",
    title: "HTML",
    color: "from-orange-400 to-red-600",
    icon: "html",
  },
  css: {
    id: "css",
    title: "CSS",
    color: "from-blue-400 to-blue-600",
    icon: "css",
  },
  javascript: {
    id: "javascript",
    title: "JavaScript",
    color: "from-yellow-400 to-yellow-600",
    icon: "js",
  },
  tailwindcss: {
    id: "tailwindcss",
    title: "Tailwind CSS",
    color: "from-sky-400 to-sky-600",
    icon: "tailwind",
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
