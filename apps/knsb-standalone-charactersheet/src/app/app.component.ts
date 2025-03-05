import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'knsb-root',
  templateUrl: './app.component.html',
  styles: ``,
  host: {
    class: 'md:container md:mx-auto flex',

  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
