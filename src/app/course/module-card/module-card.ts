import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-module-card',
  standalone: true,
  templateUrl: './module-card.html',
  styleUrl: './module-card.scss'
})
export class ModuleCard {
  @Input({ required: true }) title = '';
  @Input({ required: true }) description = '';
  @Input({ required: true }) image = '';
  @Input({ required: true }) price = '';
}
