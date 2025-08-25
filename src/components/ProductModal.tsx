import { Door } from './utils/doorData';

interface ProductModalProps {
  door: Door | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ door, isOpen, onClose }: ProductModalProps) {
  if (!isOpen || !door) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-xl bg-black/30"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/20 rounded-3xl border border-white/30 shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 backdrop-blur-xl bg-white/20 rounded-full border border-white/30 flex items-center justify-center text-gray-700 hover:text-gray-900 hover:bg-white/30 transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20">
                <h3 className="text-lg mb-4 text-gray-800">Внешний вид</h3>
                <img 
                  src={door.image} 
                  alt={door.name}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
              
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-4 border border-white/20">
                <h3 className="text-lg mb-4 text-gray-800">Технический чертёж</h3>
                <img 
                  src={door.technicalDrawing} 
                  alt={`${door.name} чертёж`}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h2 className="text-3xl mb-2 text-gray-800">{door.name}</h2>
                <div className="inline-block px-3 py-1 backdrop-blur-xl bg-white/20 rounded-full border border-white/30 text-sm text-gray-700 mb-4">
                  {door.type === 'MDF' ? 'МДФ' : 'Металл'}
                </div>
                <p className="text-gray-700 leading-relaxed">{door.description}</p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl mb-4 text-gray-800">Материал</h3>
                <p className="text-gray-700">{door.material}</p>
              </div>

              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl mb-4 text-gray-800">Размеры</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl text-gray-800">{door.dimensions.width}</div>
                    <div className="text-sm text-gray-600">Ширина (мм)</div>
                  </div>
                  <div>
                    <div className="text-2xl text-gray-800">{door.dimensions.height}</div>
                    <div className="text-sm text-gray-600">Высота (мм)</div>
                  </div>
                  <div>
                    <div className="text-2xl text-gray-800">{door.dimensions.thickness}</div>
                    <div className="text-sm text-gray-600">Толщина (мм)</div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl mb-4 text-gray-800">Особенности</h3>
                <ul className="space-y-2">
                  {door.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}