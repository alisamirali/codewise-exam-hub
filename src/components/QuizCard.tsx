import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { Quiz } from "../data/quizData";
import { quizCategories, difficultyLevels } from "../data/quizTypes";
import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { FaHtml5, FaJsSquare } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

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
      default:
        return <Code className="size-6" />;
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

      <h3 className="text-xl font-bold mb-2">{quizCategories[quiz.technology].title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{quizCategories[quiz.technology].description}</p>
      <div className="bg-primary/5 rounded-lg px-3 py-1 text-sm font-medium text-primary inline-block mb-6">
        {difficultyLevels[quiz.difficulty].title}
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

      <Button className="w-full" onClick={handleStartQuiz}>
        Start Exam
      </Button>
    </div>
  );
};

export default QuizCard;
