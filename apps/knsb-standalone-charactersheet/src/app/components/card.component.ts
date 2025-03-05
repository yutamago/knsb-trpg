import { ChangeDetectionStrategy, Component, computed, Directive, effect, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Directive({
  selector: '[knsbCardSeparator], knsb-card-separator',
  host: {
    'class': 'absolute rounded-full bg-knsb-pink',
    '[class.inset-x-0]': 'isHorizontal()',
    '[style.top]': `insetY()`,
    '[style.bottom]': 'insetY()',

    '[style.height]': 'isHorizontal() ? "var(--separator-weight, 5px)" : null',
    '[style.width]': 'isVertical() ? "var(--separator-weight, 5px)" : null',

    '[class.top-0]': `position() === 'top'`,
    '[class.bottom-0]': `position() === 'bottom'`,
    '[class.left-0]': `position() === 'left'`,
    '[class.right-0]': `position() === 'right'`,
  },
})
export class CardSeparatorDirective {
  readonly vertical = input(false, { transform: coerceBooleanProperty });
  readonly position = input<'none' | 'top' | 'bottom' | 'left' | 'right'>('none');

  protected readonly isVertical = computed(() => this.vertical() || this.position() === 'left' || this.position() === 'right');
  protected readonly isHorizontal = computed(() => !this.vertical() || this.position() === 'top' || this.position() === 'bottom');
  protected readonly insetY = computed(() => this.isVertical() ? "calc(var(--separator-weight, 5px) + var(--separator-gap, 2px))" : null);
}

@Component({
  selector: 'knsb-card',
  imports: [CommonModule, CardSeparatorDirective],
  template: `
    @if(hasTopBorder()) { <knsb-card-separator position="top"/> }
    @if(hasBottomBorder()) { <knsb-card-separator position="bottom"/> }
    @if(hasLeftBorder()) { <knsb-card-separator position="left" vertical/> }
    @if(hasRightBorder()) { <knsb-card-separator position="right" vertical/> }

    <ng-content/>
  `,
  host: {
    class: 'relative p-3',
    style: '--separator-weight: 4px; --separator-gap: 1px;'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  readonly borders = input<('top' | 'left' | 'bottom' | 'right')[]>();

  protected hasTopBorder = computed(() => !this.borders() || this.borders()?.includes('top') === true);
  protected hasBottomBorder = computed(() => !this.borders() || this.borders()?.includes('bottom') === true);
  protected hasLeftBorder = computed(() => !this.borders() || this.borders()?.includes('left') === true);
  protected hasRightBorder = computed(() => !this.borders() || this.borders()?.includes('right') === true);
}
