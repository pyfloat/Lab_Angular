import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CourseItem, CourseService } from '../course.service';
import { CommentsChat } from './comments-chat/comments-chat';
import { ModuleCard } from './module-card/module-card';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterLink, ModuleCard, CommentsChat],
  templateUrl: './course.html',
  styleUrl: './course.scss'
})
export class Course implements OnInit {
  courses: CourseItem[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }
}
