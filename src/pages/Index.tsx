import React from "react";
import { quizzes } from "../data/quizData";
import QuizCard from "../components/QuizCard";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="container mx-auto px-4 pb-12 flex-1">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">CodeWise Exam Hub</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Test your web development knowledge with our comprehensive exams.
            Select an exam below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
