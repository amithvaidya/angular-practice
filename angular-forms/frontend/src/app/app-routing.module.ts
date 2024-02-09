import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';
import { CreateApplicationComponent } from './create-application/create-application.component';

const routes: Routes = [
  {path:"create-application", component: CreateApplicationComponent},
  {path:"view-applications", component: ApplicationDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
