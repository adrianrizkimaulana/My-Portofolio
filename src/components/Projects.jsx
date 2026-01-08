import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

function Projects() {
  const mainProject = {
    title: "Personal Portfolio Website",
    description:
      "Portfolio frontend modern dengan dark mode, animasi halus, dan Apple UI style. Menampilkan pengalaman, skill, dan sertifikasi secara interaktif.",
    tech: [FaReact, SiTailwindcss, SiVite],
    live: "https://ipong-portfolio.com",
    code: "https://github.com/ipong/portfolio",
    image: "/projects/portofolio.png",
  };

  //   const projects = [
  //     {
  //       title: "Aplikasi Web Salon kecantikan Purigeulis By REDDG",
  //       tech: [FaReact, SiTailwindcss],
  //       live: "#",
  //       code: "#",
  //       image: "/projects/dashboard.jpg",
  //     },
  //     {
  //       title: "Landing Page Produk",
  //       tech: [FaHtml5, FaCss3Alt, FaReact],
  //       live: "#",
  //       code: "#",
  //       image: "/projects/landing.jpg",
  //     },
  //     {
  //       title: "Gallery App",
  //       tech: [FaReact, SiTailwindcss],
  //       live: "#",
  //       code: "#",
  //       image: "/projects/gallery.jpg",
  //     },
  //   ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
          Proyek
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Beberapa proyek yang menunjukkan kemampuan saya dalam membangun
          antarmuka web modern, responsif, dan interaktif.
        </p>

        {/* Main Project */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          <img
            src={mainProject.image}
            alt={mainProject.title}
            className="w-full md:w-1/2 rounded-3xl shadow-xl hover:scale-105 transition-transform"
          />
          <div className="md:w-1/2 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              {mainProject.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {mainProject.description}
            </p>

            {/* Tech Stack */}
            <div className="flex gap-3 mt-2">
              {mainProject.tech.map((Icon, idx) => (
                <Icon
                  key={idx}
                  className="text-2xl text-gray-800 dark:text-gray-100"
                />
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-4">
              <a
                href={mainProject.live}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium transition hover:opacity-80"
              >
                Live Demo <FaExternalLinkAlt />
              </a>
              <a
                href={mainProject.code}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-xl font-medium transition hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                Source Code <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-gray-200/60 dark:border-gray-700 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col gap-3">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {proj.title}
                </h4>
                <div className="flex gap-2 text-gray-600 dark:text-gray-400">
                  {proj.tech.map((Icon, idx) => (
                    <Icon key={idx} className="text-xl" />
                  ))}
                </div>
                <div className="mt-3 flex gap-3">
                  <a
                    href={proj.live}
                    target="_blank"
                    className="text-sm font-medium text-blue-500 dark:text-blue-400 flex items-center gap-1 hover:underline"
                  >
                    Live <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a
                    href={proj.code}
                    target="_blank"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 hover:underline"
                  >
                    Code <FaGithub className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
