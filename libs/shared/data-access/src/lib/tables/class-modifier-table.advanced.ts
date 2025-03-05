import {
  CharacterAbilityScores,
  CharacterAdvancedClass,
  CharacterStarterClass,
  EquipmentClass,
} from '../data-access';

export const ClassModifierTableAdvanced = new Map<
  CharacterAdvancedClass,
  CharacterAbilityScores & {
    hpGain: number;
    mpGain: number;
    equipmentRequirements?: EquipmentClass;
  }
>([
  [
    CharacterAdvancedClass.Crusader,
    Object.freeze({
      str: 3,
      dex: 2,
      agi: 2,
      int: 0,
      per: 0,
      mnd: 1,
      luk: 0,
      startingHp: 0,
      startingMp: 0,
      hpGain: 20,
      mpGain: 10,
      equipmentRequirements: CharacterStarterClass.Warrior,
    }),
  ],
  [
    CharacterAdvancedClass.ArchPriest,
    Object.freeze({
      str: 0,
      dex: 2,
      agi: 0,
      int: 2,
      per: 0,
      mnd: 3,
      luk: 1,
      startingHp: 0,
      startingMp: 0,
      hpGain: 14,
      mpGain: 16,
      equipmentRequirements: CharacterStarterClass.Priest,
    }),
  ],
  [
    CharacterAdvancedClass.ArchWizard,
    Object.freeze({
      str: 0,
      dex: 0,
      agi: 0,
      int: 3,
      per: 3,
      mnd: 2,
      luk: 0,
      startingHp: 0,
      startingMp: 0,
      hpGain: 12,
      mpGain: 18,
      equipmentRequirements: CharacterStarterClass.Wizard,
    }),
  ],
  [
    CharacterAdvancedClass.Assassin,
    Object.freeze({
      str: 0,
      dex: 2,
      agi: 3,
      int: 0,
      per: 3,
      mnd: 0,
      luk: 0,
      startingHp: 0,
      startingMp: 0,
      hpGain: 16,
      mpGain: 4,
      equipmentRequirements: CharacterStarterClass.Thief,
    }),
  ],
]);
