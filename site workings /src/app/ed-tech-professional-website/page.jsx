"use client";
import React from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState("home");
  const [hoveredCompany, setHoveredCompany] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      <nav className="fixed w-full bg-[#0f172a]/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="font-montserrat text-xl font-bold text-white">
              Dr. Your Name
            </span>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => setCurrentPage("home")}
                className={`font-montserrat text-white hover:text-[#f97316] transition-colors ${
                  currentPage === "home" ? "text-[#f97316]" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage("about")}
                className={`font-montserrat text-white hover:text-[#f97316] transition-colors ${
                  currentPage === "about" ? "text-[#f97316]" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => setCurrentPage("research")}
                className={`font-montserrat text-white hover:text-[#f97316] transition-colors ${
                  currentPage === "research" ? "text-[#f97316]" : ""
                }`}
              >
                Research
              </button>
              <button
                onClick={() => setCurrentPage("projects")}
                className={`font-montserrat text-white hover:text-[#f97316] transition-colors ${
                  currentPage === "projects" ? "text-[#f97316]" : ""
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setCurrentPage("contact")}
                className={`font-montserrat text-white hover:text-[#f97316] transition-colors ${
                  currentPage === "contact" ? "text-[#f97316]" : ""
                }`}
              >
                Contact
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                className="font-montserrat bg-[#f97316] text-white px-4 py-2 rounded-lg hover:bg-[#ea580c] transition-colors"
              >
                CV
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <i className="fas fa-bars text-xl text-white"></i>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage("home");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 font-montserrat text-white"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage("about");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 font-montserrat text-white"
              >
                About
              </button>
              <button
                onClick={() => {
                  setCurrentPage("research");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 font-montserrat text-white"
              >
                Research
              </button>
              <button
                onClick={() => {
                  setCurrentPage("projects");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 font-montserrat text-white"
              >
                Projects
              </button>
              <button
                onClick={() => {
                  setCurrentPage("contact");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 font-montserrat text-white"
              >
                Contact
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                className="block px-3 py-2 font-montserrat text-[#f97316]"
              >
                CV
              </a>
            </div>
          </div>
        )}
      </nav>

      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(249, 115, 22, 0.15), transparent 80%)`,
        }}
      />

      <main className="pt-16">
        {currentPage === "home" && (
          <section id="about" className="min-h-screen flex flex-col relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
                    EdTech Professional & Learning Sciences Researcher
                  </h1>
                  <p className="font-roboto text-lg text-[#1e293b] mb-8">
                    Exploring the intersection of technology, education, and the
                    arts with a focus on AI and CS education for marginalized
                    communities in tech.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#contact"
                      className="bg-[#f97316] text-white px-6 py-3 rounded-lg font-montserrat hover:bg-[#ea580c] transition-colors"
                    >
                      Get in Touch
                    </a>
                    <a
                      href="#research"
                      className="border-2 border-[#f97316] text-[#f97316] px-6 py-3 rounded-lg font-montserrat hover:bg-[#f97316] hover:text-white transition-colors"
                    >
                      View Research
                    </a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center floating">
                      <i className="fas fa-user-graduate text-6xl text-[#f97316]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-montserrat text-3xl font-bold text-[#0f172a] mb-12 text-center">
                  Current Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center">
                        <i className="fas fa-robot text-white"></i>
                      </div>
                      <h3 className="font-montserrat text-xl font-bold text-[#0f172a] ml-4">
                        AI Learning Platform
                      </h3>
                    </div>
                    <p className="font-roboto text-[#1e293b] mb-4">
                      Building an innovative AI-powered learning platform for
                      personalized education.
                    </p>
                  </div>
                  <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center">
                        <i className="fas fa-vr-cardboard text-white"></i>
                      </div>
                      <h3 className="font-montserrat text-xl font-bold text-[#0f172a] ml-4">
                        VR Education Tools
                      </h3>
                    </div>
                    <p className="font-roboto text-[#1e293b] mb-4">
                      Developing virtual reality tools for immersive learning
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-[#f8fafc]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-montserrat text-3xl font-bold text-[#0f172a] mb-12 text-center">
                  Companies I've Worked With
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {[...Array.from({ length: 9 })].map((_, index) => (
                    <div
                      key={index}
                      className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                      onMouseEnter={() => setHoveredCompany(index)}
                      onMouseLeave={() => setHoveredCompany(null)}
                    >
                      <img
                        src={`/company${index + 1}.png`}
                        alt={`Company ${index + 1} logo`}
                        className="w-full h-[100px] object-contain"
                      />
                      {hoveredCompany === index && (
                        <div className="absolute inset-0 bg-[#0f172a]/90 rounded-xl flex items-center justify-center transition-all duration-300">
                          <span className="text-white font-montserrat font-bold">
                            Company {index + 1}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white z-10"></div>
          </section>
        )}

        {currentPage === "about" && (
          <section className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-[#0f172a] mb-8">
                About Me
              </h2>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <p className="text-[#1e293b] mb-6">
                  Detailed about content goes here...
                </p>
              </div>
            </div>
          </section>
        )}

        {currentPage === "research" && (
          <section className="min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-[#0f172a] mb-8">
                Research
              </h2>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <p className="text-[#1e293b] mb-6">
                  Research content goes here...
                </p>
              </div>
            </div>
          </section>
        )}

        {currentPage === "projects" && (
          <section
            id="projects"
            className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-montserrat text-3xl font-bold text-[#0f172a] mb-12 text-center">
                Current Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center">
                      <i className="fas fa-brain text-white"></i>
                    </div>
                    <h3 className="font-montserrat text-xl font-bold text-[#0f172a] ml-4">
                      AI Education Platform
                    </h3>
                  </div>
                  <p className="font-roboto text-[#1e293b] mb-4">
                    Developing an innovative platform that makes AI education
                    accessible to underserved communities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f97316] bg-opacity-10 text-[#0f172a] rounded-full text-sm border border-[#f97316]">
                      AI
                    </span>
                    <span className="px-3 py-1 bg-[#f97316] bg-opacity-10 text-[#0f172a] rounded-full text-sm border border-[#f97316]">
                      Education
                    </span>
                    <span className="px-3 py-1 bg-[#f97316] bg-opacity-10 text-[#0f172a] rounded-full text-sm border border-[#f97316]">
                      In Progress
                    </span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center">
                      <i className="fas fa-paint-brush text-white"></i>
                    </div>
                    <h3 className="font-montserrat text-xl font-bold text-[#0f172a] ml-4">
                      Creative Computing
                    </h3>
                  </div>
                  <p className="font-roboto text-[#1e293b] mb-4">
                    Research project exploring the integration of arts and
                    creative expression in computer science education.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#f97316] bg-opacity-10 text-[#0f172a] rounded-full text-sm border border-[#f97316]">
                      Arts
                    </span>
                    <span className="px-3 py-1 bg-[#f97316] bg-opacity-10 text-[#0f172a] rounded-full text-sm border border-[#f97316]">
                      CS Education
                    </span>
                    <span className="px-3 py-1 bg-[#f97316] bg-opacity-10 text-[#0f172a] rounded-full text-sm border border-[#f97316]">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {currentPage === "contact" && (
          <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-montserrat text-3xl font-bold text-[#0f172a] mb-12 text-center">
                Get in Touch
              </h2>
              <div className="max-w-xl mx-auto">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:border-[#f97316]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:border-[#f97316]"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-lg border border-[#cbd5e1] focus:outline-none focus:border-[#f97316]"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f97316] text-white px-6 py-3 rounded-lg font-montserrat hover:bg-[#ea580c]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#0f172a] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-montserrat">
              © 2025 Your Name. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#f97316]">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#f97316]">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#f97316]">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;