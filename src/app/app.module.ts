import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TilesComponent } from './tiles/tiles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatRippleModule
];

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
