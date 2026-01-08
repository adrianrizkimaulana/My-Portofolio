import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite },
    { name: "Git", icon: FaGitAlt },
    { name: "Figma", icon: FaFigma },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
          Skill & Teknologi
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Teknologi utama yang saya gunakan dalam pengembangan antarmuka web
          modern dan responsif.
        </p>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-3 p-6 rounded-3xl
                bg-white dark:bg-slate-900 border border-gray-200/60 dark:border-gray-700
                transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="text-4xl text-gray-800 dark:text-gray-100" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
