import Footer from "@/components/Footer";
import QuizCard from "../components/QuizCard";
import { quizzes } from "../data/quizData";
import { Technology, quizCategories } from "../data/quizTypes";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative container mx-auto px-4 py-12 lg:py-20 w-full">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                  CodeWise Exam Hub
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Master web development with our comprehensive, interactive
                  exams.
                  <span className="font-semibold text-blue-600">
                    {" "}
                    Test your skills
                  </span>
                  ,
                  <span className="font-semibold text-purple-600">
                    {" "}
                    track your progress
                  </span>
                  , and
                  <span className="font-semibold text-pink-600">
                    {" "}
                    level up your career
                  </span>
                  .
                </p>
              </div>

              {/* Technology Badges */}
              <div className="mb-12">
                <p className="text-lg text-gray-600 mb-6">
                  Choose from our curated technology stack:
                </p>
                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {(Object.keys(quizCategories) as Technology[]).map((tech) => (
                    <div
                      key={tech}
                      onClick={() => {
                        const section = document.getElementById(
                          `${tech}-exams`
                        );
                        if (section) {
                          section.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                      }}
                      className={`group relative px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${quizCategories[tech].color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>
                      <span className="relative font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {quizCategories[tech].title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
              <div className="flex items-center flex-wrap justify-center gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {quizzes.length}+
                  </div>
                  <div className="text-gray-600">Practice Exams</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {Object.keys(quizCategories).length}
                  </div>
                  <div className="text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">3</div>
                  <div className="text-gray-600">Difficulty Levels</div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-16">
                <button
                  onClick={() => {
                    const htmlSection = document.getElementById("html-exams");
                    if (htmlSection) {
                      htmlSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Start Your First Exam</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Exams Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="space-y-8">
            {(Object.keys(quizCategories) as Technology[]).map((technology) => (
              <div
                key={technology}
                className="space-y-6"
                id={`${technology}-exams`}
              >
                <h2 className="text-2xl font-bold pt-8">
                  {quizCategories[technology].title} Exams
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {quizzes
                    .filter((quiz) => quiz.technology === technology)
                    .map((quiz) => (
                      <QuizCard key={quiz.id} quiz={quiz} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
