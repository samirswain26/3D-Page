import { useState, useEffect } from "react";
import "boxicons/css/boxicons.min.css";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for background effect
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setParticles(newParticles);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <footer
      className="relative mt-32 bg-gradient-to-b from-black via-[#0a0a0a] to-[#1a1a1a] text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-500 opacity-20 animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient orb that follows mouse */}
      <div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16">
        {/* Top section with CTA */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="relative w-40 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
              <div className="absolute inset-[3px] bg-black rounded-full flex justify-center items-center gap-1 text-sm">
                <i className="bx bx-chip"></i>
                AI POWERED
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Ready to Build the Future?
          </h2>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers creating autonomous AI agents that
            revolutionize workflows
          </p>

          <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full font-semibold tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105">
            <span className="relative z-10">Start Building Now</span>
            <i className="bx bx-right-arrow-alt ml-2 group-hover:translate-x-1 transition-transform inline-block"></i>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16 pt-16 border-t border-gray-800">
          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              {[
                "AI Agents",
                "Workflows",
                "Automation",
                "Analytics",
                "Integrations",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <i className="bx bx-chevron-right opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              RESOURCES
            </h3>
            <ul className="space-y-3">
              {[
                "Documentation",
                "API Reference",
                "Tutorials",
                "Blog",
                "Community",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <i className="bx bx-chevron-right opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300"></i>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press Kit", "Partners", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <i className="bx bx-chevron-right opacity-0 group-hover:opacity-100 -ml-5 group-hover:ml-0 transition-all duration-300"></i>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/*  Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">
              CONNECT
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with the latest in AI agent technology
            </p>

            <div className="relative mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1a1a1a] border border-gray-700 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <i className="bx bx-right-arrow-alt text-lg"></i>
              </button>
            </div>

            <div className="flex gap-3">
              {[
                { icon: "bxl-github", label: "GitHub" },
                { icon: "bxl-twitter", label: "Twitter" },
                { icon: "bxl-discord-alt", label: "Discord" },
                { icon: "bxl-linkedin", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.icon}
                  href="#"
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#1a1a1a] border border-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <i className={`bx ${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="bx bx-chip text-white"></i>
            </div>
            <span className="text-xl font-light">AGENT</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>

          <p className="text-sm text-gray-500">
            © 2025 AGENT. All rights reserved.
          </p>
        </div>

        {/* Floating 3D cards effect */}
        <div className="absolute bottom-20 right-10 hidden lg:block pointer-events-none">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-lg backdrop-blur-sm border border-blue-500/30 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
            <div className="absolute -top-10 -right-10 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-lg backdrop-blur-sm border border-purple-500/30 animate-[float_4s_ease-in-out_infinite] shadow-[0_0_30px_rgba(168,85,247,0.3)]" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
