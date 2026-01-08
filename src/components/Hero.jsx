import { useEffect, useState } from "react";

function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div
          className={`flex justify-center transition-all duration-700 ease-out
          ${show ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl shadow-xl overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-slate-800">
            <img
              src="/profile.png"
              alt="Foto Profil"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Description */}
        <div
          className={`transition-all duration-700 delay-150 ease-out
          ${show ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
            Frontend Developer: Membawa Ide Jadi Antarmuka yang Memukau
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Saya{" "}
            <span className="font-medium text-gray-900 dark:text-white">
              Adrian Rizki Maulana
            </span>
            , frontend developer yang berfokus pada pembuatan antarmuka modern,
            responsif, dan nyaman digunakan.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black transition hover:opacity-80"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 transition hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              Kontak Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
