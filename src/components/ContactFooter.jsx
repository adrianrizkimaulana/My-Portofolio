import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function ContactFooter() {
  return (
    <section id="contact" className="bg-white dark:bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100">
            Kontak Saya
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md">
            Ingin bekerja sama, tanya proyek, atau sekadar ngobrol? Hubungi saya
            melalui salah satu cara berikut:
          </p>

          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500" />
              <a href="mailto:ipong@example.com" className="hover:underline">
                ipong@example.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-500" />
              <a href="tel:+6281234567890" className="hover:underline">
                +62 812 3456 7890
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span>Jakarta, Indonesia</span>
            </li>
          </ul>

          {/* Social Media */}
          <div className="flex gap-6 mt-4 text-gray-700 dark:text-gray-300">
            <a
              href="https://github.com/ipong"
              target="_blank"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com/in/ipong"
              target="_blank"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://instagram.com/ipong"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 dark:bg-slate-950 p-8 rounded-3xl shadow-lg">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nama"
              className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Pesan"
              rows="5"
              className="p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactFooter;
