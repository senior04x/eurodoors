export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 border border-white/30 shadow-2xl">
            <h2 className="text-4xl md:text-5xl mb-8 text-gray-800">О компании Eurodoor</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Мы предлагаем качественные двери из МДФ и металла в Узбекистане. 
                  Каждая модель сочетает надёжность и эстетику, создавая идеальное 
                  решение для вашего дома или офиса.
                </p>
                
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl mb-4 text-gray-800">Наши преимущества</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Высокое качество материалов
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Современный дизайн
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Долговечность и надёжность
                    </li>
                    <li className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Экологичность
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl mb-4 text-gray-800">Материалы МДФ</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Используем МДФ высокой плотности с защитным покрытием, 
                    обеспечивающим долговечность и устойчивость к влаге и деформации.
                  </p>
                </div>
                
                <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl mb-4 text-gray-800">Металлические двери</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Изготавливаем металлические двери из качественной стали с 
                    антикоррозийным покрытием и современными системами безопасности.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-white/5 rounded-full backdrop-blur-xl border border-white/10 hidden lg:block" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full backdrop-blur-xl border border-white/10 hidden lg:block" />
    </section>
  );
}