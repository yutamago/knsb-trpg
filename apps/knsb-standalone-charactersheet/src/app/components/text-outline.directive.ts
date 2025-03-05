import { Directive } from '@angular/core';

function textOutlineSnippet(weight: string, color: string) {
  return `0 0 ${weight} ${color}`;
}
function textOutlineSnippets(length: number, weight = '2px', color = '#000') {
  return new Array(length).fill(textOutlineSnippet(weight, color)).join(', ');
}

@Directive({
  selector: '[knsbTextOutline]',
  // host: { '[style.-webkit-text-stroke]': '"var(--text-outline-weight, 1px) var(--text-outline-color, black)"' }
  // host: { '[style.text-shadow]': '"-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, -1px 0 0 #000, 1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 0 0 3px #000"' }
  host: { '[style.text-shadow]': 'textShadow' }
})
export class TextOutlineDirective {
  protected readonly textShadow = `${textOutlineSnippets(10, 'var(--text-outline-weight, 2px)', 'var(--text-outline-color, #000)')}`;
}
