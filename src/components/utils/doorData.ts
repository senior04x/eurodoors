export interface Door {
  id: string;
  name: string;
  type: 'MDF' | 'Metal';
  image: string;
  technicalDrawing: string;
  description: string;
  material: string;
  dimensions: {
    width: number;
    height: number;
    thickness: number;
  };
  features: string[];
  price?: string;
}

export const doorCatalog: Door[] = [
  {
    id: 'mdf-01',
    name: 'МДФ-01',
    type: 'MDF',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop',
    technicalDrawing: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop',
    description: 'Классическая дверь из МДФ с элегантным дизайном',
    material: 'МДФ высокой плотности с ламинированным покрытием',
    dimensions: { width: 800, height: 2000, thickness: 40 },
    features: ['Влагостойкое покрытие', 'Звукоизоляция', 'Экологически чистый материал'],
    price: 'По запросу'
  },
  {
    id: 'mdf-02',
    name: 'МДФ-02',
    type: 'MDF',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=600&fit=crop',
    technicalDrawing: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop',
    description: 'Современная дверь из МДФ с минималистичным дизайном',
    material: 'МДФ с шпонированной поверхностью',
    dimensions: { width: 900, height: 2100, thickness: 45 },
    features: ['Натуральный шпон', 'Устойчивость к деформации', 'Гладкая поверхность'],
    price: 'По запросу'
  },
  {
    id: 'metal-01',
    name: 'Металл-01',
    type: 'Metal',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=600&fit=crop',
    technicalDrawing: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop',
    description: 'Прочная металлическая дверь для входной группы',
    material: 'Сталь с порошковым покрытием',
    dimensions: { width: 860, height: 2050, thickness: 80 },
    features: ['Антикоррозийное покрытие', 'Высокая прочность', 'Термоизоляция'],
    price: 'По запросу'
  },
  {
    id: 'metal-02',
    name: 'Металл-02',
    type: 'Metal',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
    technicalDrawing: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop',
    description: 'Современная металлическая дверь с декоративными элементами',
    material: 'Оцинкованная сталь с декоративным покрытием',
    dimensions: { width: 900, height: 2100, thickness: 90 },
    features: ['Многослойная изоляция', 'Декоративные вставки', 'Усиленная рама'],
    price: 'По запросу'
  },
  {
    id: 'mdf-03',
    name: 'МДФ-03',
    type: 'MDF',
    image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=400&h=600&fit=crop',
    technicalDrawing: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop',
    description: 'Дверь из МДФ с рельефным узором',
    material: 'МДФ с глубоким фрезерованием',
    dimensions: { width: 800, height: 2000, thickness: 40 },
    features: ['Рельефная поверхность', 'Классический стиль', 'Прочная конструкция'],
    price: 'По запросу'
  },
  {
    id: 'metal-03',
    name: 'Металл-03',
    type: 'Metal',
    image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&h=600&fit=crop',
    technicalDrawing: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop',
    description: 'Усиленная металлическая дверь повышенной безопасности',
    material: 'Многослойная сталь с бронированными вставками',
    dimensions: { width: 860, height: 2050, thickness: 100 },
    features: ['Противовзломная защита', 'Огнестойкость', 'Шумоизоляция'],
    price: 'По запросу'
  }
];