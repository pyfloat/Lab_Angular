import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TrackFilter } from '../about.models';

@Component({
  selector: 'app-course-filters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-filters.html',
  styleUrl: './course-filters.scss'
})
export class CourseFilters {
  @Input({ required: true }) tracks: TrackFilter[] = [];
  @Input({ required: true }) selectedTrack: TrackFilter = 'Все';
  @Input({ required: true }) showOnlyOpen = false;

  @Output() trackChange = new EventEmitter<TrackFilter>();
  @Output() onlyOpenChange = new EventEmitter<boolean>();

  selectTrack(track: TrackFilter): void {
    this.trackChange.emit(track);
  }

  toggleOnlyOpen(): void {
    this.onlyOpenChange.emit(!this.showOnlyOpen);
  }

  resetToAll(): void {
    this.trackChange.emit('Все');
    this.onlyOpenChange.emit(false);
  }
}
