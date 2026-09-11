import heroImage from "../assets/hero.png";

const Hero = ({ title, subtitle, buttonText, onTap }) => {
  return (
    <section
      className="py-14 md:py-20 pb-16 md:pb-24 bg-[radial-gradient(circle_at_50%_0%,#dbeafe,transparent_60%)] bg-white"
      id="beranda"
    >
      <div className="container mx-auto px-4 flex flex-col items-center gap-10 md:gap-12 text-center">
        <div className="flex flex-col items-center max-w-[760px]">
          {/* Eyebrow / Label */}
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Platform Bisnis
          </span>

          {/* Judul & Subtitle */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-5">
            {title}
          </h1>
          <p className="max-w-[52ch] mb-8 text-gray-600 text-lg leading-relaxed">
            {subtitle}
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              type="button"
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer"
              onClick={onTap}
            >
              {buttonText}
            </button>
            <a
              href="#fitur"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-lg transition-colors"
            >
              Lihat Fitur
            </a>
          </div>

          {/* Catatan / Keterangan */}
          <p className="m-0 text-sm text-gray-500">
            Gratis 14 hari · Tanpa kartu kredit · Batal kapan saja
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;