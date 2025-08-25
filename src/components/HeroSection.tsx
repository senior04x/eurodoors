interface HeroSectionProps {
  onCatalogClick: () => void;
}

export default function HeroSection({ onCatalogClick }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with metallic texture effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                           linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%), 
                           linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%), 
                           linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 border border-white/30 shadow-2xl">
          <h1 className="text-5xl md:text-7xl mb-6 text-gray-800 leading-tight">
            Качественные двери из{' '}
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              МДФ и металла
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Надёжность, эстетика и современный дизайн в каждой модели
          </p>
          
          <button 
            onClick={onCatalogClick}
            className="group relative inline-flex items-center justify-center px-12 py-4 text-lg overflow-hidden backdrop-blur-xl bg-white/30 border border-white/50 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              Перейти в каталог
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 hidden lg:block" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 hidden lg:block" />
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-white/10 rounded-full backdrop-blur-xl border border-white/20 hidden xl:block" />
    </section>
  );
}