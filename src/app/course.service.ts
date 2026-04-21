import { Injectable } from '@angular/core';

export interface CourseItem {
  id: number;
  title: string;
  image: string;
  description: string;
  detailedDescription: string;
  price: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: CourseItem[] = [
    {
      id: 1,
      title: 'Модуль 1. Linux в работе администратора',
      image: 'images/linux.svg',
      description: 'Файловая система, shell, systemd, пользователи и права.',
      detailedDescription:
        'В первом модуле изучаются базовые инструменты системного администратора Linux. Рассматриваются файловая система, работа в терминале, команды shell, управление службами через systemd, создание пользователей и настройка прав доступа. Практическая часть помогает закрепить навыки начальной настройки и сопровождения серверного окружения.',
      price: '9900 ₽'
    },
    {
      id: 2,
      title: 'Модуль 2. Сетевые сервисы',
      image: 'images/network.svg',
      description: 'Nginx, DNS, SSH, VPN, базовая диагностика и логирование.',
      detailedDescription:
        'Во втором модуле рассматриваются основные сетевые службы, используемые в администрировании инфраструктуры. Студенты изучают настройку Nginx, работу DNS, удалённый доступ через SSH, организацию VPN, а также базовые подходы к диагностике сетевых проблем и анализу логов. Практика направлена на настройку и поддержку сетевых сервисов.',
      price: '10900 ₽'
    },
    {
      id: 3,
      title: 'Модуль 3. Безопасность и мониторинг',
      image: 'images/security.svg',
      description: 'Hardening, firewall, контроль инцидентов, алерты и метрики.',
      detailedDescription:
        'Третий модуль посвящён вопросам защиты инфраструктуры и наблюдения за состоянием систем. В него входят hardening серверов, настройка firewall, контроль инцидентов, сбор метрик и организация оповещений. В лабораторных заданиях отрабатываются навыки журналирования, мониторинга и быстрого реагирования на типовые проблемы безопасности.',
      price: '12900 ₽'
    },
    {
      id: 4,
      title: 'Модуль 4. Итоговая практика',
      image: 'images/moderation.svg',
      description: 'Выполнение финального мини-проекта и разбор типовых ошибок.',
      detailedDescription:
        'Заключительный модуль объединяет знания, полученные в течение всего курса. Студенты выполняют итоговый мини-проект, в котором применяют навыки настройки Linux, сетевых сервисов, безопасности и мониторинга. Дополнительно разбираются типовые ошибки системного администратора и подходы к их предотвращению в реальной инфраструктуре.',
      price: '14900 ₽'
    }
  ];

  getCourses(): CourseItem[] {
    return this.courses;
  }

  getCourseByIndex(index: number): CourseItem {
    return this.courses[index];
  }

  getCourseById(id: number): CourseItem | undefined {
    return this.courses.find(course => course.id === id);
  }
}
