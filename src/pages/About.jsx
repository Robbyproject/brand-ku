const stats = [
  { value: "5 mnt", label: "Waktu setup" },
  { value: "1.200+", label: "Bisnis terdaftar" },
  { value: "24/7", label: "Dukungan tim" },
  { value: "99,9%", label: "Uptime layanan" },
];

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white" id="tentang">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14">
        {/* Teks Deskripsi */}
        <div>
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Tentang
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Dibuat untuk bisnis yang sedang bertumbuh
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
            BrandKu lahir dari satu pertanyaan sederhana: kenapa mengelola
            bisnis kecil harus serumit itu? Kami menggabungkan manajemen,
            pemasaran, dan laporan dalam satu tempat.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed m-0">
            Tanpa keahlian teknis, tanpa banyak aplikasi terpisah. Cukup buka
            satu dashboard, dan semuanya sudah ada di sana.
          </p>
        </div>

        {/* Grid Statistik */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              className="p-6 md:p-7 bg-slate-50 border border-gray-200 rounded-xl text-center"
              key={stat.label}
            >
              <span className="block text-blue-600 text-3xl md:text-4xl font-bold leading-tight">
                {stat.value}
              </span>
              <span className="block mt-1.5 text-gray-500 text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;