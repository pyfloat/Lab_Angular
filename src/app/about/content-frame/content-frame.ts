import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-frame',
  standalone: true,
  templateUrl: './content-frame.html',
  styleUrl: './content-frame.scss'
})
export class ContentFrame {
  @ContentChild('frameTitle', { static: false })
  titleElement?: ElementRef<HTMLElement>;

  highlightTitle(): void {
    if (!this.titleElement) {
      return;
    }

    this.titleElement.nativeElement.style.backgroundColor = '#fff3cd';
    this.titleElement.nativeElement.style.padding = '4px 8px';
    this.titleElement.nativeElement.style.borderRadius = '8px';
  }

  clearTitleHighlight(): void {
    if (!this.titleElement) {
      return;
    }

    this.titleElement.nativeElement.style.backgroundColor = 'transparent';
    this.titleElement.nativeElement.style.padding = '0';
    this.titleElement.nativeElement.style.borderRadius = '0';
  }
}
