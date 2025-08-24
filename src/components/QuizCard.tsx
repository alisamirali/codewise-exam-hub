import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { Quiz } from "../data/quizData";
import { difficultyLevels, quizCategories } from "../data/quizTypes";

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  const navigate = useNavigate();
  const { setCurrentQuiz, startQuiz } = useQuiz();

  const getIcon = () => {
    switch (quiz.technology) {
      case "html":
        return <FaHtml5 className="size-6" />;
      case "css":
        return <FaCss3Alt className="size-6" />;
      case "javascript":
        return <FaJsSquare className="size-6" />;
      case "react":
        return <FaReact className="size-6" />;
      case "tailwindcss":
        return <RiTailwindCssFill className="size-6" />;
      case "sass":
        return <FaSass className="size-6" />;
      case "bootstrap":
        return <FaBootstrap className="size-6" />;
      default:
        return <SiTypescript className="size-6" />;
    }
  };

  const getButtonVariant = () => {
    switch (quiz.technology) {
      case "html":
        return "bg-orange-500 hover:bg-orange-600 text-white";
      case "css":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "javascript":
        return "bg-yellow-500 hover:bg-yellow-600 text-white";
      case "react":
        return "bg-blue-500 hover:bg-blue-600 text-white";
      case "tailwindcss":
        return "bg-sky-500 hover:bg-sky-600 text-white";
      case "sass":
        return "bg-pink-500 hover:bg-pink-600 text-white";
      case "bootstrap":
        return "bg-violet-500 hover:bg-violet-600 text-white";
      default:
        return "bg-primary hover:bg-primary/90 text-white";
    }
  };

  const getBadgeVariant = () => {
    switch (quiz.technology) {
      case "html":
        return "bg-orange-100 text-orange-700";
      case "css":
        return "bg-blue-100 text-blue-700";
      case "javascript":
        return "bg-yellow-100 text-yellow-700";
      case "react":
        return "bg-blue-100 text-blue-700";
      case "tailwindcss":
        return "bg-sky-100 text-sky-700";
      case "sass":
        return "bg-pink-100 text-pink-700";
      case "bootstrap":
        return "bg-violet-100 text-violet-700";
      default:
        return "bg-primary/5 text-primary";
    }
  };

  const handleStartQuiz = () => {
    setCurrentQuiz(quiz);
    startQuiz();
    navigate(`/quiz/${quiz.id}`);
  };

  return (
    <div className={`quiz-card ${quiz.id}-card`}>
      <div className="flex items-center justify-between mb-4">
        <div className="bg-primary/10 p-2 rounded-full">{getIcon()}</div>
      </div>

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold mb-2">
          {quizCategories[quiz.technology].title}
        </h3>
        <div
          className={cn(
            getBadgeVariant(),
            "rounded-lg px-3 py-1 text-sm font-medium inline-block"
          )}
        >
          {difficultyLevels[quiz.difficulty].title}
        </div>
      </div>

      <div className="flex items-center justify-between text-sm font-medium mb-6">
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Questions:</span>
          <span>{quiz.questions.length}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-gray-500">Time:</span>
          <span>30 mins</span>
        </div>
      </div>

      <Button
        className={cn(getButtonVariant(), "w-full")}
        onClick={handleStartQuiz}
      >
        Start Quiz
      </Button>
    </div>
  );
};

export default QuizCard;
