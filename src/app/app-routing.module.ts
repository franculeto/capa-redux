import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalDataComponent } from './pages/personal-data/personal-data.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'personal-data',
    component: PersonalDataComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
