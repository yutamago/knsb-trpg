export interface Room {
  id: string;
  name: string;

  // relations
  members?: User[];
}

export interface User {
  id: string;
  displayName: string;
  role: 'GameMaster' | 'Player' | 'Observer';

  // relations
  roomId: string;
  room?: Room;

  playerCharacters?: PlayerCharacter[];
}

export interface UserWithCredentials extends User {
  email: string;
  passwordHash: string;
  passwordSalt: string;
}

export enum CharacterRace {
  None = 'None',

  ReincarnatedPerson = 'ReincarnatedPerson',
  NativeInhabitant = 'NativeInhabitant',
  CrimsonMagicClanMember = 'CrimsonMagicClanMember',
}

export interface CharacterAbilityScores {
  // Strength
  str: number;

  // Dexterity
  dex: number;

  // Agility
  agi: number;

  // Intelligence
  int: number;

  // Perception
  per: number;

  // Mind
  mnd: number;

  // Luck
  luk: number;
}

export enum CharacterStarterClass {
  None = 'None',

  Warrior = 'Warrior',
  Priest = 'Priest',
  Wizard = 'Wizard',
  Thief = 'Thief',
  Adventurer = 'Adventurer',
  Archer = 'Archer',
  ElementalMaster = 'ElementalMaster',
  Creator = 'Creator',
  Swordfighter = 'Swordfighter',
  Knight = 'Knight',
  Lancer = 'Lancer',
  RuneKnight = 'RuneKnight',
}

export enum CharacterAdvancedClass {
  None = 'None',

  Crusader = 'Crusader',
  ArchPriest = 'ArchPriest',
  ArchWizard = 'ArchWizard',
  Assassin = 'Assassin',
}

export type EquipmentClass =
  | CharacterStarterClass.Warrior
  | CharacterStarterClass.Priest
  | CharacterStarterClass.Wizard
  | CharacterStarterClass.Thief;

export enum CharacterSkill {
  None = 'None',
  // TODO
}

interface Item {
  name: string;
  itemType: 'equipment' | 'belonging' | 'other';
  // TODO
}

export interface CharacterBackground {
  name: string;
  gender: string;
  appearance: string;
  lifePath: string;
}

export enum CharacterCheat {
  None = 'None',
}

export interface PlayerCharacter {
  id: string;

  race: CharacterRace;
  starterClass: CharacterStarterClass;
  advancedClass: CharacterAdvancedClass;
  background: CharacterBackground;
  baseAbilities: CharacterAbilityScores;
  skills: CharacterSkill[];
  cheat: CharacterCheat;
  inventory: Item[];


  // relations
  userId: string;
  user?: User;
}

export enum CharacterLifestyle {
  StableLiving = 'StableLiving',
  SimpleLiving = 'SimpleLiving',
  Economy = 'Economy',
  Suite = 'Suite',
  Royal = 'Royal',
}


export enum Debuff {
  Intimidated = 'Intimidated',
  Enraged = 'Enraged',
  Stunned = 'Stunned',
  OffBalance = 'OffBalance',
  Poison = 'Poison',
  Knockback = 'Knockback',
  Dazed = 'Dazed',
}
