import { CharacterLifestyle } from '../data-access';

export const LifestyleTable = new Map<
  CharacterLifestyle,
  {
    name: string;
    effectsAndNotes: string;
    price: (characterLevel: number) => number;
    maxHpGain: (characterLevel: number) => number;
    maxMpGain: (characterLevel: number) => number;
  }
>([
  [
    CharacterLifestyle.StableLiving,
    {
      name: 'Stable Living',
      effectsAndNotes: 'Subtract CLx5 from your max HP and max MP',
      price: () => 0,
      maxHpGain: (cl) => cl * -5,
      maxMpGain: (cl) => cl * -5,
    },
  ],
  [
    CharacterLifestyle.SimpleLiving,
    {
      name: 'Simple Living',
      effectsAndNotes: 'A simple lifestyle involving sleeping in a larger room',
      price: (cl) => cl * 10,
      maxHpGain: () => 0,
      maxMpGain: () => 0,
    },
  ],
  [
    CharacterLifestyle.Economy,
    {
      name: 'Economy',
      effectsAndNotes: 'Add 5 to your max HP and max MP',
      price: (cl) => cl * 100,
      maxHpGain: () => 5,
      maxMpGain: () => 5,
    },
  ],
  [
    CharacterLifestyle.Suite,
    {
      name: 'Suite',
      effectsAndNotes: 'Add 10 to your max HP and max MP',
      price: (cl) => cl * 1000,
      maxHpGain: () => 10,
      maxMpGain: () => 10,
    },
  ],
  [
    CharacterLifestyle.Royal,
    {
      name: 'Royal',
      effectsAndNotes: 'Add 30 to your max HP and max MP',
      price: (cl) => cl * 10000,
      maxHpGain: () => 30,
      maxMpGain: () => 30,
    },
  ],
]);
