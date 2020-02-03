import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartConst } from 'o2-chart-lib'; // <= Add
import { O2ChartComponent } from 'o2-chart-lib'; // <= Add
//import { O2ChartLibModule } from '/Users/GregoryRoss1/Angular-Projects/conversion/node_modules/o2-chart-lib/index';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { DisplayComponent } from './components/display/display.component';
import { BinaryTree, TreeNode } from './classes/conversion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent,
    O2ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    //O2ChartLibModule
      // <= Add
  ],
  providers: [ChartConst, BinaryTree, TreeNode], // <= Add
  bootstrap: [AppComponent]
})
export class AppModule { }
