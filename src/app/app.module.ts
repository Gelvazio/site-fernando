import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatListModule} from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { AngularSvgIconModule } from 'angular-svg-icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CriptosComponent } from './components/criptos/criptos.component';




@NgModule({
  declarations: [
    AppComponent,
    CriptosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularSvgIconModule,
    MatCardModule, 
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
      FormsModule,
      HttpClientModule,
      ReactiveFormsModule,
      FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
