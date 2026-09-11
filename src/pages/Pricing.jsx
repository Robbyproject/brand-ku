const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Buat kamu yang baru mulai.",
    price: "Rp0",
    period: "/bulan",
    featured: false,
    features: ["1 pengguna", "Laporan dasar", "Dukungan email"],
  },
  {
    id: "growth",
    name: "Growth",
    description: "Paling pas untuk bisnis berkembang.",
    price: "Rp149rb",
    period: "/bulan",
    featured: true,
    features: [
      "5 pengguna",
      "Laporan real-time",
      "Otomatisasi tugas",
      "Dukungan prioritas",
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "Untuk tim yang sudah besar.",
    price: "Rp399rb",
    period: "/bulan",
    featured: false,
    features: [
      "Pengguna tanpa batas",
      "Laporan khusus",
      "Integrasi API",
      "Manajer akun khusus",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50" id="harga">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Harga
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Pilih paket yang sesuai
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Mulai gratis, tingkatkan kapan pun bisnismu siap.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <article
              className={`relative flex flex-col p-7 md:p-8 bg-white rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "border-2 border-blue-600 shadow-md"
                  : "border border-gray-200 shadow-sm"
              }`}
              key={plan.id}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold tracking-wider uppercase whitespace-nowrap">
                  Paling Populer
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-sm mb-5">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-gray-200">
                <span className="text-gray-900 text-4xl font-extrabold leading-none">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">{plan.period}</span>
              </div>

              <ul className="flex-1 space-y-3 mb-7">
                {plan.features.map((feature) => (
                  <li
                    className="flex items-start gap-2.5 text-gray-600 text-[0.95rem]"
                    key={feature}
                  >
                    <span
                      className="shrink-0 grid place-items-center w-5 h-5 mt-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`w-full py-2.5 px-4 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                  plan.featured
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
                    : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-300"
                }`}
              >
                Pilih {plan.name}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;