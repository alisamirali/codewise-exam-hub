import { Technology } from "@/data/quizTypes";
import React from "react";
import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiNestjs } from "react-icons/si";
import {FaVuejs} from "react-icons/fa6"

export const getIcon = (technology: Technology): React.ReactNode => {
  switch (technology) {
    case "html":
      return <FaHtml5 className="size-6" />;
    case "css":
      return <FaCss3Alt className="size-6" />;
    case "javascript":
      return <FaJsSquare className="size-6" />;
    case "react":
      return <FaReact className="size-6" />;
    case "angular":
      return <FaAngular className="size-6" />;
    case "git":
      return <FaGitAlt className="size-6" />;
    case "nodejs":
      return <FaNodeJs className="size-6" />;
    case "tailwindcss":
      return <RiTailwindCssFill className="size-6" />;
    case "sass":
      return <FaSass className="size-6" />;
    case "bootstrap":
      return <FaBootstrap className="size-6" />;
    case "vue":
      return <FaVuejs  className="size-6" />;
    case "express":
      return <SiExpress className="size-6" />;
    case "nestjs":
      return <SiNestjs className="size-6" />;
    default:
      return <SiTypescript className="size-6" />;
  }
};

export const getButtonVariant = (technology: Technology): string => {
  switch (technology) {
    case "html":
      return "bg-orange-500 hover:bg-orange-600 text-white";
    case "css":
      return "bg-blue-500 hover:bg-blue-600 text-white";
    case "javascript":
      return "bg-yellow-500 hover:bg-yellow-600 text-white";
    case "react":
      return "bg-blue-500 hover:bg-blue-600 text-white";
    case "angular":
      return "bg-red-600 hover:bg-red-700 text-white";
    case "git":
      return "bg-orange-600 hover:bg-orange-700 text-white";
    case "nodejs":
      return "bg-green-600 hover:bg-green-700 text-white";
    case "tailwindcss":
      return "bg-sky-500 hover:bg-sky-600 text-white";
    case "sass":
      return "bg-pink-500 hover:bg-pink-600 text-white";
    case "bootstrap":
      return "bg-violet-500 hover:bg-violet-600 text-white";
    case "vue":
      return "bg-emerald-500 hover:bg-emerald-600 text-white";
    case "express":
      return "bg-gray-800 hover:bg-gray-900 text-white";
    case "nestjs":
      return "bg-red-600 hover:bg-red-700 text-white";
    default:
      return "bg-primary hover:bg-primary/90 text-white";
  }
};

export const getBadgeVariant = (technology: Technology): string => {
  switch (technology) {
    case "html":
      return "bg-orange-100 text-orange-700";
    case "css":
      return "bg-blue-100 text-blue-700";
    case "javascript":
      return "bg-yellow-100 text-yellow-700";
    case "react":
      return "bg-blue-100 text-blue-700";
    case "angular":
      return "bg-red-100 text-red-700";
    case "git":
      return "bg-orange-100 text-orange-700";
    case "nodejs":
      return "bg-green-100 text-green-700";
    case "tailwindcss":
      return "bg-sky-100 text-sky-700";
    case "sass":
      return "bg-pink-100 text-pink-700";
    case "bootstrap":
      return "bg-violet-100 text-violet-700";
    case "vue":
      return "bg-emerald-100 text-emerald-700";
    case "express":
      return "bg-gray-100 text-gray-800";
    case "nestjs":
      return "bg-red-100 text-red-700";
    default:
      return "bg-primary/5 text-primary";
  }
};
