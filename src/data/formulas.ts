import { Formula, FormulaSet } from '../types/formula';

export const formulaSets: FormulaSet[] = [
  {
    id: '9',
    name: 'Follow the Tao',
    description: 'Learn the fundamental formulas of Traditional Chinese Medicine',
    formulas: [
      {
        name: 'Sang Ju Yin',
        ingredients: ['Sang Ye', 'Ju Hua', 'Lian Qiao', 'Bo He', 'Jie Geng', 'Xing Ren', 'Lu Gen', 'Gan Cao'],
        taste: 'Sweet and slightly bitter',
        temp: 'Cool',
        complexion: 'Red tongue with thin white coating',
        condition: 'Wind-Heat pattern'
      },
      {
        name: 'Yin Qiao San',
        ingredients: ['Jin Yin Hua', 'Lian Qiao', 'Jie Geng', 'Niu Bang Zi', 'Bo He', 'Dan Dou Chi', 'Jing Jie', 'Dan Zhu Ye', 'Lu Gen', 'Gan Cao'],
        taste: 'Sweet and slightly bitter',
        temp: 'Cool',
        complexion: 'Red tongue with thin white coating',
        condition: 'Wind-Heat pattern'
      },
      // Add more formulas...
    ]
  },
  // Add more formula sets...
];

export const herbs = [
  {
    id: 'bohe',
    name: 'Bo He',
    image: '/images/bohe-s.png',
    properties: {
      taste: 'Pungent, Cool',
      temperature: 'Cool',
      meridians: ['Lung', 'Liver'],
      actions: ['Disperses Wind-Heat', 'Clears the head and eyes']
    }
  },
  {
    id: 'fangfeng',
    name: 'Fang Feng',
    image: '/images/fangfeng-s.png',
    properties: {
      taste: 'Pungent, Sweet',
      temperature: 'Slightly Warm',
      meridians: ['Bladder', 'Liver', 'Spleen'],
      actions: ['Disperses Wind', 'Expels Dampness', 'Relieves pain']
    }
  },
  // Add more herbs...
]; 