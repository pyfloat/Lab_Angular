import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type CourseTrack = 'Системное администрирование' | 'DevOps' | 'Сети' | 'Информационная безопасность';
type CourseLevel = 'Начальный' | 'Средний' | 'Продвинутый';
type TrackFilter = 'Все' | CourseTrack;

interface PlatformCourse {
  title: string;
  track: CourseTrack;
  level: CourseLevel;
  duration: string;
  students: number;
  rating: number;
  isOpen: boolean;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  showOnlyOpen = false;
  selectedTrack: TrackFilter = 'Все';

  tracks: TrackFilter[] = [
    'Все',
    'Системное администрирование',
    'DevOps',
    'Сети',
    'Информационная безопасность'
  ];

  courses: PlatformCourse[] = [
    {
      title: 'Linux Admin: старт',
      track: 'Системное администрирование',
      level: 'Начальный',
      duration: '6 недель',
      students: 210,
      rating: 4.8,
      isOpen: true
    },
    {
      title: 'Администрирование Windows Server',
      track: 'Системное администрирование',
      level: 'Средний',
      duration: '8 недель',
      students: 145,
      rating: 4.6,
      isOpen: false
    },
    {
      title: 'Практика DevOps: CI/CD и Docker',
      track: 'DevOps',
      level: 'Средний',
      duration: '7 недель',
      students: 173,
      rating: 4.7,
      isOpen: true
    },
    {
      title: 'Сетевые технологии: маршрутизация и VLAN',
      track: 'Сети',
      level: 'Начальный',
      duration: '5 недель',
      students: 132,
      rating: 4.4,
      isOpen: true
    },
    {
      title: 'Hardening и мониторинг инфраструктуры',
      track: 'Информационная безопасность',
      level: 'Продвинутый',
      duration: '9 недель',
      students: 98,
      rating: 4.9,
      isOpen: false
    }
  ];

  get visibleCourses(): PlatformCourse[] {
    return this.courses.filter((course) => {
      const byTrack = this.selectedTrack === 'Все' || course.track === this.selectedTrack;
      const byOpen = !this.showOnlyOpen || course.isOpen;
      return byTrack && byOpen;
    });
  }

  toggleOnlyOpen(): void {
    this.showOnlyOpen = !this.showOnlyOpen;
  }

  setTrack(track: TrackFilter): void {
    this.selectedTrack = track;
  }

  getTrackColor(track: CourseTrack): string {
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
