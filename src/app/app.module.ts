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
import { TasksComponent } from './components/tasks/tasks.component';

import { FilterPipe } from './pipes/filter.pipe';
import { KeysPipe } from "./pipes/keys.pipe";
import { MainLayoutService } from "./services/main-layout.service";

import { environment } from "../environments/environment";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseProvider } from "./providers/firebase.provider";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    PageNotFoundComponent,
    SourceListComponent,
    TasksComponent,
    FilterPipe,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTES_PROVIDER,
    // RouterModule.forRoot([
    //   { path: '', component: HomeComponent },
    //   { path: 'directory', component: DirectoryComponent },
    //   // { path: '**', component: PageNotFoundComponent }
    // ])
    AngularFireModule.initializeApp(environment.config.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [MainLayoutService, FirebaseProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
