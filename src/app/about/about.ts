import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentFrame } from './content-frame/content-frame';
import { CourseCard } from './course-card/course-card';
import { CourseFilters } from './course-filters/course-filters';
import { PlatformCourse, TrackFilter } from './about.models';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, CourseFilters, CourseCard, ContentFrame],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  // Input declared for lifecycle demonstration; ngOnChanges works with @Input bindings.
  @Input() lifecycleDemoInput = 'about';

  @ViewChild(CourseFilters, { static: false })
  private filtersComponent?: CourseFilters;

  @ViewChild(ContentFrame, { static: false })
  private frameComponent?: ContentFrame;

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

  lifecycleState = {
    onChangesCount: 0,
    onInitCount: 0,
    doCheckCount: 0,
    afterContentInitCount: 0,
    afterContentCheckedCount: 0,
    afterViewInitCount: 0,
    afterViewCheckedCount: 0,
    lastHook: ''
  };
  lastChangesKeys: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.lifecycleState.onChangesCount++;
    this.lifecycleState.lastHook = 'ngOnChanges';
    this.lastChangesKeys = Object.keys(changes);
  }

  ngOnInit(): void {
    this.lifecycleState.onInitCount++;
    this.lifecycleState.lastHook = 'ngOnInit';
  }

  ngDoCheck(): void {
    this.lifecycleState.doCheckCount++;
    this.lifecycleState.lastHook = 'ngDoCheck';
  }

  ngAfterContentInit(): void {
    this.lifecycleState.afterContentInitCount++;
    this.lifecycleState.lastHook = 'ngAfterContentInit';
  }

  ngAfterContentChecked(): void {
    this.lifecycleState.afterContentCheckedCount++;
    this.lifecycleState.lastHook = 'ngAfterContentChecked';
  }

  ngAfterViewInit(): void {
    this.lifecycleState.afterViewInitCount++;
    this.lifecycleState.lastHook = 'ngAfterViewInit';
  }

  ngAfterViewChecked(): void {
    this.lifecycleState.afterViewCheckedCount++;
    this.lifecycleState.lastHook = 'ngAfterViewChecked';
  }

  get visibleCourses(): PlatformCourse[] {
    return this.courses.filter((course) => {
      const byTrack = this.selectedTrack === 'Все' || course.track === this.selectedTrack;
      const byOpen = !this.showOnlyOpen || course.isOpen;
      return byTrack && byOpen;
    });
  }

  onTrackChange(track: TrackFilter): void {
    this.selectedTrack = track;
  }

  onOnlyOpenChange(value: boolean): void {
    this.showOnlyOpen = value;
  }

  resetByViewChild(): void {
    this.filtersComponent?.resetToAll();
  }

  highlightHeaderByViewChild(): void {
    this.frameComponent?.highlightTitle();
  }

  clearHeaderByViewChild(): void {
    this.frameComponent?.clearTitleHighlight();
  }
}
