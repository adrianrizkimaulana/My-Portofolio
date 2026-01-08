function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
          Pengalaman Kerja
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Pengalaman profesional dalam membangun antarmuka web yang modern,
          efisien, dan mudah digunakan.
        </p>

        {/* Experience List */}
        <div className="mt-16 space-y-10">
          {/* Item 1 */}
          <div className="bg-gray-50 dark:bg-slate-950 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  Frontend Developer Intern
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  PT Radar Telekomunikasi Indonesia
                </p>
              </div>
              <span className="mt-3 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                Okt 2024 – Jan 2025
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>
                Mengadaptasi antarmuka aplikasi desktop ke web agar lebih mudah
                diakses melalui browser
              </li>
              <li>
                Berkolaborasi dengan tim UI/UX untuk menerjemahkan desain
                menjadi tampilan web yang konsisten dan mudah digunakan
              </li>
              <li>
                Mengimplementasikan antarmuka web menggunakan HTML, CSS,
                JavaScript, dan Bootstrap 5.
              </li>
              <li>
                Menyesuaikan tampilan agar responsif dan sesuai dengan kebutuhan
                pengguna.
              </li>
              <li>
                Melakukan evaluasi bersama tim untuk memastikan kualitas
                tampilan dan fungsionalitas antarmuka
              </li>
            </ul>
          </div>

          {/* Item 2 */}
          <div className="bg-gray-50 dark:bg-slate-950 rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  Fullstack Developer Intern
                </h3>
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  REDDG GROUP
                </p>
              </div>
              <span className="mt-3 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
                Jan 2025 – Okt 2025
              </span>
            </div>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>
                Fullstack Developer - Magang: Mengembangkan aplikasi web Salon
                Purigeulis mulai dari analisis kebutuhan hingga implementasi
                sistem.
              </li>
              <li>
                Merancang alur sistem dan struktur database menggunakan UML dan
                ERD sebagai dasar pengembangan.
              </li>
              <li>
                Mendesain antarmuka dan alur pengguna menggunakan Figma, lalu
                mengimplementasikannya ke dalam aplikasi web.
              </li>
              <li>
                Mengimplementasikan tampilan responsif menggunakan HTML, CSS,
                Bootstrap 5, dan JavaScript.
              </li>
              <li>
                Mengembangkan sisi backend menggunakan PHP native, termasuk
                pembuatan database dan fitur CRUD melalui phpMyAdmin.
              </li>
              <li>
                Melakukan pengujian dan evaluasi fungsional untuk memastikan
                aplikasi berjalan sesuai kebutuhan pengguna.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
