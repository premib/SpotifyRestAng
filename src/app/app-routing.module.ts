import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { DummyHomeComponent } from './dummy-home/dummy-home.component';
import { FirstpageComponent } from './firstpage/firstpage.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "home/playlist",
    pathMatch: "full"
  },
  {
    path : "home",
    component: HomeComponent,
    children:[
      {
        path: "playlist",
        component: DummyHomeComponent,     
      },
      {
        path: "playlist/:name",
        component: PlaylistComponent
      }
     
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
