import { CharacterAbilityScores, CharacterRace } from '../data-access';

export const BaseAbilityScoreTable = new Map<
  CharacterRace,
  CharacterAbilityScores
>([
  [
    CharacterRace.NativeInhabitant,
    Object.freeze({
      str: 9,
      dex: 8,
      agi: 8,
      int: 8,
      per: 8,
      mnd: 8,
      luk: 8,
    }),
  ],
  [
    CharacterRace.ReincarnatedPerson,
    Object.freeze({
      str: 8,
      dex: 9,
      agi: 8,
      int: 9,
      per: 8,
      mnd: 7,
      luk: 8,
    }),
  ],
  [
    CharacterRace.CrimsonMagicClanMember,
    Object.freeze({
      str: 7,
      dex: 8,
      agi: 8,
      int: 10,
      per: 7,
      mnd: 10,
      luk: 7,
    }),
  ],
]);
