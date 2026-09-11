import { useState } from "react";

const navItems = [
  { href: "#fitur", label: "Fitur" },
  { href: "#tentang", label: "Tentang" },
  { href: "#harga", label: "Harga" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 h-16 bg-white/85 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between gap-6 h-full">
        {/* Logo */}
        <a
          href="#beranda"
          className="flex items-center gap-2.5 text-lg font-bold text-gray-900 hover:text-gray-900"
          onClick={closeMenu}
        >
          <span className="grid place-items-center w-8 h-8 rounded bg-blue-600 text-white text-base font-bold">
            B
          </span>
          BrandKu
        </a>

        {/* Tombol menu (mobile) */}
        <button
          type="button"
          className="flex md:hidden flex-col justify-center items-center gap-[5px] w-10 h-10 p-0 bg-transparent border border-gray-200 rounded cursor-pointer"
          aria-label="Buka menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span
            className={`block w-[18px] h-[2px] rounded bg-gray-900 transition-all duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] rounded bg-gray-900 transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] rounded bg-gray-900 transition-all duration-300 ${
              isOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Navigasi */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex absolute md:static top-16 left-0 right-0 flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-8 p-4 md:p-0 bg-white md:bg-transparent border-b md:border-none border-gray-200 shadow-lg md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative block md:inline-block py-2.5 md:py-1 text-gray-600 hover:text-gray-900 text-base md:text-[0.95rem] font-medium transition-colors md:after:content-[''] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:w-0 md:after:h-[2px] md:after:bg-blue-600 md:hover:after:w-full md:after:transition-all md:after:duration-300"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#harga"
            className="w-full md:w-auto px-4 py-2 text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
            onClick={closeMenu}
          >
            Mulai Gratis
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;