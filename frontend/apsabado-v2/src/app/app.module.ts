
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { SkillsComponent } from './componentes/skills/skills.component';

 // Import ng-circle-progress
 import { NgCircleProgressModule } from 'ng-circle-progress';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { EducationService } from './servicios/education.service';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    ExperienciaComponent,
    BannerComponent,
    AcercaDeComponent,
    SkillsComponent,
    IniciarSesionComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    NgCircleProgressModule.forRoot({})
  ],
  providers: [EducationService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
