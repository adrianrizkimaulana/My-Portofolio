function Education() {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
          Pendidikan
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl">
          Latar belakang pendidikan yang membentuk dasar keahlian teknis dan
          pemahaman saya di bidang pengembangan web.
        </p>

        {/* Timeline */}
        <div className="mt-16 relative border-l border-gray-200 dark:border-gray-700">
          {/* Item 1 */}
          <div className="ml-6 mb-12">
            <span className="absolute -left-2.5 w-5 h-5 rounded-full bg-blue-500"></span>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">
                Sarjana Teknik Informatika
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Universitas Islam Nusantara • 2021 – 2025
              </p>

              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                Fokus pada pengembangan perangkat lunak, struktur data,
                pemrograman web, dan rekayasa antarmuka pengguna. Aktif dalam
                proyek berbasis React dan pengembangan UI modern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
