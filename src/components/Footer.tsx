import React from 'react';
import logo from '@/assets/logo1.png';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-100" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-12 border border-white/30 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="text-center md:text-left">
                <div className="mb-4 inline-flex items-center">
                  <img src={logo} alt="Eurodoor" className="h-8 w-auto" />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Качественные двери из МДФ и металла для вашего дома и офиса в Узбекистане.
                </p>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                <h4 className="text-xl mb-4 text-gray-800">Контакты</h4>
                <div className="space-y-3">
                  <div className="backdrop-blur-xl bg-white/10 rounded-xl p-3 border border-white/20">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">+998 90 123 45 67</span>
                    </div>
                  </div>
                  
                  <div className="backdrop-blur-xl bg-white/10 rounded-xl p-3 border border-white/20">
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700">Ташкент, Узбекистан</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center md:text-right">
                <h4 className="text-xl mb-4 text-gray-800">Социальные сети</h4>
                <div className="flex justify-center md:justify-end space-x-4">
                  <a 
                    href="#" 
                    className="backdrop-blur-xl bg-white/20 hover:bg-white/30 w-12 h-12 rounded-xl border border-white/30 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.384 22.779c.322.228.737.285 1.107.145.37-.141.642-.457.724-.848l2.938-14.059c.174-.842-.097-1.726-.756-2.32-.659-.593-1.593-.665-2.319-.188L.551 14.164c-.706.457-.928 1.333-.569 2.084.359.75 1.166 1.188 1.967 1.071l5.134-.752 1.929 5.769c.223.665.826 1.117 1.517 1.138.69.022 1.323-.383 1.596-1.021l2.298-5.394 3.961 2.72z"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="#" 
                    className="backdrop-blur-xl bg-white/20 hover:bg-white/30 w-12 h-12 rounded-xl border border-white/30 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 hover:scale-110"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.098.119.112.224.083.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-gray-600">
                © 2024 Eurodoor. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}