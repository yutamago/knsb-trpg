import { Route } from '@angular/router';
import { CharacterSheetComponent } from './pages/character-sheet.component';

export const routes: Route[] = [
  {
    path: '',
    component: CharacterSheetComponent,
    title: 'Character Sheet',
  }
];
