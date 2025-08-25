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
}

import model1 from '@/assets/model1.jpg';
import model2 from '@/assets/model2.jpg';
import model3 from '@/assets/model3.jpg';
import model4 from '@/assets/model4.jpg';
import model5 from '@/assets/model5.jpg';
import model6 from '@/assets/model6.jpg';
import model7 from '@/assets/model7.jpg';
import model8 from '@/assets/model8.jpg';
import model9 from '@/assets/model9.jpg';
import model10 from '@/assets/model10.jpg';
import model11 from '@/assets/model11.jpg';
import chizmadoor from '@/assets/chizmadoor.jpg';

export const doorCatalog: Door[] = [
  {
    id: 'model-01',
    name: 'Модель 01',
    type: 'MDF',
    image: model1,
    technicalDrawing: chizmadoor,
    description: 'Классическая дверь с современным дизайном.',
    material: 'МДФ высокой плотности',
    dimensions: { width: 800, height: 2000, thickness: 40 },
    features: ['Звукоизоляция', 'Износостойкое покрытие']
  },
  {
    id: 'model-02',
    name: 'Модель 02',
    type: 'Metal',
    image: model2,
    technicalDrawing: chizmadoor,
    description: 'Прочная металлическая дверь для входной группы.',
    material: 'Сталь с порошковым покрытием',
    dimensions: { width: 860, height: 2050, thickness: 80 },
    features: ['Термоизоляция', 'Антикоррозийное покрытие']
  },
  {
    id: 'model-03',
    name: 'Модель 03',
    type: 'MDF',
    image: model3,
    technicalDrawing: chizmadoor,
    description: 'Дверь из МДФ с лаконичным оформлением.',
    material: 'МДФ с ламинацией',
    dimensions: { width: 900, height: 2100, thickness: 45 },
    features: ['Лёгкий уход', 'Долговечность']
  },
  {
    id: 'model-04',
    name: 'Модель 04',
    type: 'Metal',
    image: model4,
    technicalDrawing: chizmadoor,
    description: 'Надёжная дверь с усиленной рамой.',
    material: 'Оцинкованная сталь',
    dimensions: { width: 900, height: 2100, thickness: 90 },
    features: ['Усиленная рама', 'Повышенная безопасность']
  },
  {
    id: 'model-05',
    name: 'Модель 05',
    type: 'MDF',
    image: model5,
    technicalDrawing: chizmadoor,
    description: 'Элегантная дверь для жилых интерьеров.',
    material: 'МДФ с шпоном',
    dimensions: { width: 800, height: 2000, thickness: 40 },
    features: ['Эстетичный внешний вид', 'Качественная фурнитура']
  },
  {
    id: 'model-06',
    name: 'Модель 06',
    type: 'Metal',
    image: model6,
    technicalDrawing: chizmadoor,
    description: 'Современная металлическая дверь.',
    material: 'Сталь с декоративными элементами',
    dimensions: { width: 860, height: 2050, thickness: 80 },
    features: ['Шумоизоляция', 'Противовзломные элементы']
  },
  {
    id: 'model-07',
    name: 'Модель 07',
    type: 'MDF',
    image: model7,
    technicalDrawing: chizmadoor,
    description: 'Минималистичная дверь для современного интерьера.',
    material: 'МДФ с покрытием ПВХ',
    dimensions: { width: 800, height: 2000, thickness: 40 },
    features: ['Износостойкость', 'Простота ухода']
  },
  {
    id: 'model-08',
    name: 'Модель 08',
    type: 'Metal',
    image: model8,
    technicalDrawing: chizmadoor,
    description: 'Надёжная металлическая дверь.',
    material: 'Сталь с порошковой окраской',
    dimensions: { width: 900, height: 2100, thickness: 90 },
    features: ['Теплоизоляция', 'Защита от коррозии']
  },
  {
    id: 'model-09',
    name: 'Модель 09',
    type: 'MDF',
    image: model9,
    technicalDrawing: chizmadoor,
    description: 'Дверь с рельефным узором.',
    material: 'МДФ с фрезеровкой',
    dimensions: { width: 800, height: 2000, thickness: 40 },
    features: ['Рельефная поверхность', 'Стильный дизайн']
  },
  {
    id: 'model-10',
    name: 'Модель 10',
    type: 'Metal',
    image: model10,
    technicalDrawing: chizmadoor,
    description: 'Металлическая дверь повышенной прочности.',
    material: 'Высокопрочная сталь',
    dimensions: { width: 860, height: 2050, thickness: 100 },
    features: ['Прочность', 'Безопасность']
  },
  {
    id: 'model-11',
    name: 'Модель 11',
    type: 'MDF',
    image: model11,
    technicalDrawing: chizmadoor,
    description: 'Современная МДФ дверь с лаконичным стилем.',
    material: 'МДФ с ламинированным покрытием',
    dimensions: { width: 900, height: 2100, thickness: 45 },
    features: ['Звукоизоляция', 'Долговечность']
  }
];