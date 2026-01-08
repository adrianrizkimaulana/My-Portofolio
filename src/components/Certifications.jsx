import { FaReact, FaHtml5, FaAward } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      title: "Frontend Web Developer",
      issuer: "Dicoding Indonesia",
      year: "2024",
      category: "Frontend",
      icon: FaReact,
      color: "blue",
    },
    {
      title: "Belajar React untuk Pemula",
      issuer: "Dicoding Indonesia",
      year: "2023",
      category: "React",
      icon: FaReact,
      color: "cyan",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
      category: "Web Fundamental",
      icon: FaHtml5,
      color: "orange",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
          Sertifikasi
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Sertifikasi resmi yang memvalidasi kompetensi teknis dan pemahaman
          saya dalam pengembangan frontend.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.title}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900
                border border-gray-200/60 dark:border-gray-700
                transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Category */}
                <div className="flex items-center gap-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center
                    bg-${cert.color}-500/10`}
                  >
                    <Icon className={`text-${cert.color}-500`} />
                  </div>
                  {cert.category}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {cert.issuer}
                </p>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>{cert.year}</span>
                  <FaAward className="opacity-60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
