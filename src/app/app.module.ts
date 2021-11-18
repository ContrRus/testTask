import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularWeatherWidgetModule } from 'angular2-weather-widget';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientPageComponent } from './client-page/client-page.component';
export function momentAdapterFactory() {
  return adapterFactory(moment);
}

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    LoginComponent,
    HomeComponent,
    PopUpComponent,
    ClientPageComponent,
  ],
  imports: [
    BrowserModule,
    AngularWeatherWidgetModule,
    HttpClientModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: momentAdapterFactory,
    }),
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
        // canActivate: [AuthGuard], unccoment when all is done
      },
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'client',
        component: ClientPageComponent,
      },
    ]),
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
