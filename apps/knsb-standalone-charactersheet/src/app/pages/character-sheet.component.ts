import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoHeader2Component } from '../components/logo-header-2.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {
  BaseAbilityScoreTable,
  CharacterAbilityScores,
  CharacterRace,
  CharacterStarterClass,
  ClassModifierTableStarter,
} from '@konosuba-trpg/data-access';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatStep, MatStepLabel, MatStepper } from '@angular/material/stepper';
import { toSignal } from '@angular/core/rxjs-interop';
import { Platform } from '@angular/cdk/platform';
import {
  MatAutocomplete,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';

@Component({
  selector: 'knsb-character-sheet',
  imports: [
    CommonModule,
    LogoHeader2Component,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatAutocomplete,
    MatAutocompleteTrigger,
  ],
  templateUrl: './character-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-3 w-full',
  },
})
export class CharacterSheetComponent {
  readonly characterRaces = Object.keys(CharacterRace).slice(1);
  readonly characterStarterClasses = Object.keys(CharacterStarterClass).slice(
    1
  );
  readonly genders = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];

  readonly formGroup = new FormGroup({
    playerStep: new FormGroup({
      name: new FormControl<string | null>(null, Validators.required),
    }),
    characterStep: new FormGroup({
      name: new FormControl<string | null>(null),
      age: new FormControl<number | null>(null),
      gender: new FormControl<string | null>(null),
    }),
    raceStep: new FormGroup({
      race: new FormControl<CharacterRace | null>(null),
      class: new FormControl<CharacterStarterClass | null>(null),
    }),
    allocatedAbilityBonusPoints: new FormGroup({
      str: new FormControl<number>(0),
      dex: new FormControl<number>(0),
      agi: new FormControl<number>(0),
      int: new FormControl<number>(0),
      per: new FormControl<number>(0),
      mnd: new FormControl<number>(0),
      luk: new FormControl<number>(0),
    }),
  });
  readonly characterSheet = toSignal(this.formGroup.valueChanges);

  readonly baseAbilityScore = computed(() => {
    const race = this.characterSheet()?.raceStep?.race;
    if (!race) return null;

    return BaseAbilityScoreTable.get(race);
  });

  readonly classModifier = computed(() => {
    const cClass = this.characterSheet()?.raceStep?.class;
    if (!cClass) return null;

    return ClassModifierTableStarter.get(cClass);
  });
  readonly allocatedBonusPoints = computed(() => {
    return this.characterSheet()
      ?.allocatedAbilityBonusPoints as CharacterAbilityScores;
  });

  readonly allocatedBonusPointsSum = computed(() => {
    return (
      Object.values(
        this.characterSheet()?.allocatedAbilityBonusPoints ?? { dummy: 0 }
      ).reduce((p, c) => (p ?? 0) + (c ?? 0)) ?? 0
    );
  });
  readonly freeBonusPoints = computed<number>(() => {
    return 5 - this.allocatedBonusPointsSum();
  });

  protected readonly statTypes: [
    value: keyof CharacterAbilityScores,
    label: string
  ][] = [
    ['str', 'Strength'],
    ['dex', 'Dexterity'],
    ['agi', 'Agility'],
    ['int', 'Intelligence'],
    ['per', 'Perception'],
    ['mnd', 'Mind'],
    ['luk', 'Luck'],
  ];

  protected displayGender(gender: string) {
    if (!gender) return '';

    const genderOption = this.genders.find((x) => x.value === gender);

    return genderOption ? genderOption.label : gender;
  }

  constructor() {
    this.displayGender = this.displayGender.bind(this);

    if (!inject(Platform).isBrowser) return;

    this.setupStorage();
  }

  private setupStorage() {
    // load initially
    const savedCharacterSheetString = localStorage.getItem('characterSheet');
    if (savedCharacterSheetString !== null) {
      const savedCharacterSheet = JSON.parse(savedCharacterSheetString);
      this.formGroup.patchValue(savedCharacterSheet);
    }

    // Save on changes
    effect(() =>
      localStorage.setItem(
        'characterSheet',
        JSON.stringify(this.characterSheet())
      )
    );
  }

  setAllocatedBonusPoints($event: Event, input: HTMLInputElement) {}

  incrementAbilityBonusPoint(statTypeElement: keyof CharacterAbilityScores) {
    const formControl = (
      this.formGroup.controls.allocatedAbilityBonusPoints.controls as any
    )[statTypeElement] as FormControl<number | null>;
    const value = formControl.value ?? 0;

    if (value < 13 && this.freeBonusPoints() > 0) {
      formControl.setValue(value + 1);
    }
  }

  decrementAbilityBonusPoint(statTypeElement: keyof CharacterAbilityScores) {
    const formControl = (
      this.formGroup.controls.allocatedAbilityBonusPoints.controls as any
    )[statTypeElement] as FormControl<number | null>;
    const value = formControl.value ?? 0;

    if (value > 0) {
      formControl.setValue(value - 1);
    }
  }
}
