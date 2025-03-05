import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextOutlineDirective } from './text-outline.directive';

@Component({
  selector: 'knsb-logo-header-2, [knsbLogoHeader2]',
  imports: [CommonModule, TextOutlineDirective],
  host: { class: 'flex flex-col gap-2 pt-2' },
  template: `
    <h1 class="hidden">
      Konosuba: God's blessing on this wonderful world! TRPG
    </h1>

    <h1
      class="flex flex-col tracking-[0.05em] w-[500px]"
      aria-hidden="true"
      style="transform: rotate(353deg);"
    >
      <span class="flex items-center mb-[-.75rem]">
        <span class="text-knsb-pink text-[4.5rem]">K</span>
        <span class="text-knsb-pink">ono</span>
        <span class="text-knsb-blue">suba:</span>
        <span class="text-knsb-blue text-[2rem]">God's</span>
      </span>
      <span
        class="flex items-center gap-1  self-center text-[2rem] tracking-[0.05em] ms-[1.1em]"
      >
        <span class="text-knsb-pink">blessing</span>
        <span class="flex flex-col text-[.9rem] leading-[.9rem]">
          <span class="text-knsb-pink">on</span>
          <span class="text-knsb-pink">this</span>
        </span>
        <span>wonderful</span>
      </span>
      <span class="text-[2rem] self-end mr-[3.5rem]" style="z-index: 2">
        <span style="z-index: 3">world</span>
        <span
          class="text-knsb-pink inline-flex ms-[-1.5rem] "
          style="transform: rotate(38deg) scale(2.1) translateY(4px) translateX(5px); --text-outline-color: #fff; --text-outline-weight: 1px; z-index: 1"
          knsbTextOutline
          >!</span
        >
      </span>
      <span
        class="text-white bg-knsb-blue flex items-end w-fit rounded-md px-1 text-serif font-[900] self-end mt-1 relative mr-[5.2rem] text-[2.5rem]"
        style="z-index: 1"
      >
        TRPG
        <span
          class="absolute"
          style="bottom: calc(1px - 50%);
        height: 50%;
        width: 19px;
        left: 50%;
        background-image: linear-gradient(to top left, transparent 50%, rgb(0 100 202 / var(--tw-bg-opacity, 1)) calc(50% + 1px));
        transform: skewX(343deg);"
          >&nbsp;</span
        >
      </span>
    </h1>
    <ng-content />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoHeader2Component {}
