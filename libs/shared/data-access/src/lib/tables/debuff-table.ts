import { Debuff } from '../data-access';

// TODO
export const DebuffTable = new Map<
  Debuff,
  {
    effect: string;
    recovery: string;
  }
>([
  [
    Debuff.Intimidated,
    {
      effect: '',
      recovery: 'Use a minor action',
    },
  ],
  [
    Debuff.Enraged,
    {
      effect: '',
      recovery: 'Automatically heals during the Cleanup Process',
    },
  ],
  [
    Debuff.Stunned,
    {
      effect: '',
      recovery: '',
    },
  ],
  [
    Debuff.OffBalance,
    {
      effect: '',
      recovery: '',
    },
  ],
  [
    Debuff.Poison,
    {
      effect: '',
      recovery: '',
    },
  ],
  [
    Debuff.Knockback,
    {
      effect: '',
      recovery: '',
    },
  ],
  [
    Debuff.Dazed,
    {
      effect: '',
      recovery: '',
    },
  ],
]);
