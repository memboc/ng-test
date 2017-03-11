import { Routes, RouterModule} from "@angular/router";
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { TasksComponent } from "./components/tasks/tasks.component";

const APP_ROUTES: Routes  = [
  { path: 'about', component: AboutComponent },
  { path: 'sources', component: SourceListComponent },
  { path: 'tasks', component: TasksComponent},
  { path: 'sources/:id', component: SourceListComponent },
  { path: '', component: HomepageComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
