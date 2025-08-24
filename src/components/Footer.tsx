import { CiCircleChevUp } from "react-icons/ci";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-4 relative">
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} CodeWise Exam Hub. All rights
        reserved.
      </p>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
        aria-label="Scroll to top"
      >
        <CiCircleChevUp />
      </button>
    </footer>
  );
};

export default Footer;
