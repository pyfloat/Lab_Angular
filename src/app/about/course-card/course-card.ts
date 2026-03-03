import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CourseTrack, PlatformCourse } from '../about.models';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.scss'
})
export class CourseCard {
  @Input({ required: true }) course!: PlatformCourse;
  @Input({ required: true }) index = 0;

  get trackColor(): string {
    return this.getTrackColor(this.course.track);
  }

  private getTrackColor(track: CourseTrack): string {
    switch (track) {
      case 'Системное администрирование':
        return '#1f72b7';
      case 'DevOps':
        return '#2e7d32';
      case 'Сети':
        return '#ef6c00';
      case 'Информационная безопасность':
        return '#6a1b9a';
      default:
        return '#1f72b7';
    }
  }
}
