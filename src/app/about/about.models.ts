export type CourseTrack =
  | 'Системное администрирование'
  | 'DevOps'
  | 'Сети'
  | 'Информационная безопасность';

export type CourseLevel = 'Начальный' | 'Средний' | 'Продвинутый';

export type TrackFilter = 'Все' | CourseTrack;

export interface PlatformCourse {
  title: string;
  track: CourseTrack;
  level: CourseLevel;
  duration: string;
  students: number;
  rating: number;
  isOpen: boolean;
}
