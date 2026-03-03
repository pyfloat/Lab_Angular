import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Course } from './course/course';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'course', component: Course },
    { path: 'about', component: About },
    { path: '**', component: NotFound }
];
