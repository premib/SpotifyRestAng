import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PlaylistAdditionComponent } from './playlist-addition/playlist-addition.component';
import { DummyHomeComponent } from './dummy-home/dummy-home.component';
import { AdModalComponent } from './ad-modal/ad-modal.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { FirstpageComponent } from './firstpage/firstpage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PlaylistComponent,
    AdminLoginComponent,
    PlaylistAdditionComponent,
    DummyHomeComponent,
    AdModalComponent,
    SafeUrlPipe,
    FirstpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
