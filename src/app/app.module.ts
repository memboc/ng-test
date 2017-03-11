import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SourceListComponent } from './components/source-list/source-list.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MainLayoutService } from "./services/main-layout.service";
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    PageNotFoundComponent,
    SourceListComponent,
    FilterPipe,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'directory', component: DirectoryComponent },
    //   // { path: '**', component: PageNotFoundComponent }
    // ])
  ],
  providers: [MainLayoutService],
  bootstrap: [AppComponent],
})
export class AppModule { }
