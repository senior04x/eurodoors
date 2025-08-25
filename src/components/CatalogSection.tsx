import { useState } from 'react';
import { Door, doorCatalog } from './utils/doorData';
import ProductModal from './ProductModal';

export default function CatalogSection() {
  const [selectedDoor, setSelectedDoor] = useState<Door | null>(null);
  const [hoveredDoor, setHoveredDoor] = useState<string | null>(null);
  const [filter, setFilter] = useState<'All' | 'MDF' | 'Metal'>('All');

  const filteredDoors = filter === 'All' 
    ? doorCatalog 
    : doorCatalog.filter(door => door.type === filter);

  const handleDoorClick = (door: Door) => {
    setSelectedDoor(door);
  };

  const closeModal = () => {
    setSelectedDoor(null);
  };

  return (
    <>
      <section id="catalog" className="py-20 relative">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-gray-100" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="backdrop-blur-xl bg-white/20 rounded-3xl p-8 border border-white/30 shadow-xl inline-block">
              <h2 className="text-4xl md:text-5xl mb-4 text-gray-800">Каталог дверей</h2>
              <p className="text-xl text-gray-600">Выберите идеальную дверь для вашего интерьера</p>
            </div>
          </div>

          {/* Filter buttons */}
          <div className="flex justify-center mb-12">
            <div className="backdrop-blur-xl bg-white/20 rounded-2xl p-2 border border-white/30 shadow-lg">
              <div className="flex space-x-2">
                {['All', 'MDF', 'Metal'].map((filterType) => (
                  <button
                    key={filterType}
                    onClick={() => setFilter(filterType as 'All' | 'MDF' | 'Metal')}
                    className={`px-6 py-3 rounded-xl transition-all duration-200 ${
                      filter === filterType
                        ? 'bg-white/40 text-gray-900 shadow-lg'
                        : 'text-gray-700 hover:bg-white/20'
                    }`}
                  >
                    {filterType === 'All' ? 'Все' : filterType === 'MDF' ? 'МДФ' : 'Металл'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Door grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDoors.map((door) => (
              <div
                key={door.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredDoor(door.id)}
                onMouseLeave={() => setHoveredDoor(null)}
                onClick={() => handleDoorClick(door)}
              >
                <div className="backdrop-blur-xl bg-white/20 rounded-2xl border border-white/30 shadow-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Image area with cross-fade */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={door.image}
                      alt={door.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${hoveredDoor === door.id ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <img
                      src={door.technicalDrawing}
                      alt={`${door.name} чертёж`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${hoveredDoor === door.id ? 'opacity-100' : 'opacity-0'}`}
                    />
                    {/* Overlay on hover */}
                    <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${hoveredDoor === door.id ? 'opacity-100' : 'opacity-0'}`} />

                    {/* Type badge */}
                    <div className="absolute top-4 left-4 backdrop-blur-xl bg-white/30 rounded-full px-3 py-1 border border-white/40">
                      <span className="text-sm text-gray-800">
                        {door.type === 'MDF' ? 'МДФ' : 'Металл'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl mb-2 text-gray-800">{door.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{door.description}</p>
                    
                    <div className="flex items-center justify-end">
                      <button className="backdrop-blur-xl bg-white/30 hover:bg-white/40 text-gray-800 px-4 py-2 rounded-xl border border-white/40 transition-all duration-200 group-hover:scale-110">
                        Подробнее
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal 
        door={selectedDoor} 
        isOpen={!!selectedDoor} 
        onClose={closeModal} 
      />
    </>
  );
}