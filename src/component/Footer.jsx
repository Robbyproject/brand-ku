const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-14 pb-8 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 md:gap-10 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-3 text-white text-lg font-bold">
              <span className="grid place-items-center w-8 h-8 rounded bg-blue-600 text-white text-base font-bold">
                B
              </span>
              BrandKu
            </div>
            <p className="max-w-[38ch] text-gray-400 text-sm leading-relaxed">
              Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan
              bisnis kecil.
            </p>
          </div>

          {/* Navigasi Produk */}
          <div>
            <h4 className="mb-3.5 text-white text-xs font-semibold tracking-wider uppercase">
              Produk
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#fitur"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Fitur
                </a>
              </li>
              <li>
                <a
                  href="#harga"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Harga
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Tentang
                </a>
              </li>
            </ul>
          </div>

          {/* Navigasi Bantuan */}
          <div>
            <h4 className="mb-3.5 text-white text-xs font-semibold tracking-wider uppercase">
              Bantuan
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#beranda"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Pusat Bantuan
                </a>
              </li>
              <li>
                <a
                  href="#beranda"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a
                  href="#beranda"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 text-gray-400 text-xs md:text-sm text-center">
          <p>&copy; {year} BrandKu. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;