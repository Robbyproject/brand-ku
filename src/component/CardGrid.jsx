const CardGrid = ({ features = [] }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-50/50" id="fitur">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-100">
            Fitur
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Semua yang kamu butuhkan
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Dirancang supaya bisnis kecil bisa jalan cepat tanpa ribet.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.length === 0 ? (
            <p className="col-span-full py-12 px-6 border border-dashed border-gray-300 rounded-xl text-gray-500 text-center">
              Belum ada fitur untuk ditampilkan.
            </p>
          ) : (
            features.map((feature) => (
              <article
                className="p-7 md:p-8 bg-white border border-gray-200 rounded-xl shadow-sm hover:-translate-y-1 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                key={feature.id}
              >
                <div
                  className="grid place-items-center w-[52px] h-[52px] mb-5 rounded-lg bg-blue-50 text-blue-600 text-2xl leading-none"
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="m-0 text-gray-600 text-[0.95rem] leading-relaxed">
                  {feature.subtitle}
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;