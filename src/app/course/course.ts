import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommentsChat } from './comments-chat/comments-chat';
import { ModuleCard } from './module-card/module-card';

interface CourseModule {
  title: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  highlighted?: boolean;
}

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterLink, ModuleCard, CommentsChat],
  templateUrl: './course.html',
  styleUrl: './course.scss'
})
export class Course {
  modules: CourseModule[] = [
    {
      title: 'Модуль 1. Linux в работе администратора',
      description: 'Файловая система, shell, systemd, пользователи и права.',
      image: 'images/linux.svg',
      level: 'Базовый',
      duration: '2 недели'
    },
    {
      title: 'Модуль 2. Сетевые сервисы',
      description: 'Nginx, DNS, SSH, VPN, базовая диагностика и логирование.',
      image: 'images/network.svg',
      level: 'Базовый',
      duration: '2 недели'
    },
    {
      title: 'Модуль 3. Безопасность и мониторинг',
      description: 'Hardening, firewall, контроль инцидентов, алерты и метрики.',
      image: 'images/security.svg',
      level: 'Средний',
      duration: '3 недели'
    },
    {
      title: 'Модуль 4. Итоговая практика',
      description: 'Выполнение финального мини-проекта и разбор типовых ошибок.',
      image: 'images/moderation.svg',
      level: 'Продвинутый',
      duration: '1 неделя',
      highlighted: true
    }
  ];
}
