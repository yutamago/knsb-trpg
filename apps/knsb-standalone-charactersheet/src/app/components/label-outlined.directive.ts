import { Directive } from '@angular/core';
import { TextOutlineDirective } from './text-outline.directive';

@Directive({
  selector: '[knsbLabelOutlined]',
  hostDirectives: [TextOutlineDirective],
  host: {
    class: 'text-white font-medium',
    '[style.--text-outline-weight.px]': '1.7',
  },
})
export class LabelOutlinedDirective {}

@Directive({
  selector: '[knsbInputLabelOutlined]',
  hostDirectives: [LabelOutlinedDirective],
  host: {
    class: 'cursor-text',
  },
})
export class InputLabelOutlinedDirective {
}

@Directive({
  selector: '[knsbLabelBold]',
  host: {
    'class': 'font-medium',
  },
})
export class LabelBoldDirective {}

@Directive({
  selector: '[knsbInputLabelBold]',
  hostDirectives: [LabelBoldDirective],
  host: {
    class: 'cursor-text text-xs',
  },
})
export class InputLabelBoldDirective {
}
