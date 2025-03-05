import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'knsb-logo-header-1, [knsbLogoHeader1]',
  imports: [CommonModule],
  host: { class: 'flex flex-col gap-2' },
  template: `
    <h1 class="hidden">Konosuba: God's blessing on this wonderful world! TRPG</h1>

    <h1 class="flex flex-col tracking-[0.05em] w-[500px]" aria-hidden="true" style="transform: rotate(353deg);">
      <span class="flex items-center mb-[-.75rem]">
        <span class="text-knsb-pink text-[4.5rem]">K</span>
        <span class="text-knsb-pink">ono</span>
        <span class="text-knsb-blue">suba:</span>
      </span>
      <span class="flex items-center gap-1 text-[2.5rem] self-center tracking-[0.075em] ms-[.5em]">
        <span class="text-knsb-blue">God's</span>
        <span class="text-knsb-pink">blessing</span>
        <span class="flex flex-col text-[.9rem] leading-[.9rem]">
          <span class="text-knsb-pink">on</span>
          <span class="text-knsb-pink">this</span>
        </span>
      </span>
      <span class="text-[2.5rem] self-end">
        <span>wonder</span>
        <span class="text-knsb-pink">ful</span>
      </span>
      <span class="text-[2.5rem] self-end">
        <span>world</span>
        <span class="text-knsb-blue inline-flex ms-[-1.5rem] "
              style="transform: rotate(21deg) scale(1.6) translateY(1px) translateX(4px)">!</span>
      </span>
      <span
        class="text-white bg-knsb-blue flex items-end w-fit rounded-md px-1 text-serif font-[900] self-end mt-4 relative">
        TRPG
        <span class="absolute"
              style="bottom: calc(1px - 50%);
        height: 50%;
        width: 19px;
        left: 50%;
        background-image: linear-gradient(to top left, transparent 50%, rgb(0 100 202 / var(--tw-bg-opacity, 1)) calc(50% + 1px));
        transform: skewX(343deg);">&nbsp;</span>
      </span>
    </h1>
    <ng-content/>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoHeader1Component {}
