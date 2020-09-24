import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { MainComponent } from 'src/shared/main/main.component';
import { PrivacyPolicyComponent } from 'src/shared/privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'home', component: MainComponent },
  { path: 'privacy-plicy', component: PrivacyPolicyComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
