import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Course } from './course/course';
import { About } from './about/about';
import { Forms } from './forms/forms';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'course', component: Course },
    { path: 'forms', component: Forms },
    { path: 'about', component: About },
    { path: '**', component: NotFound }
];
