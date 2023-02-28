import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxTestRoutingModule } from './ngrx-test-routing.module';
import { NgrxTestComponent } from './ngrx-test.component';
import { BasicCounterComponent } from './components/basic-counter/basic-counter.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NgrxTestComponent,
    BasicCounterComponent,
    BasicFormComponent
  ],
  imports: [
    CommonModule,
    NgrxTestRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class NgrxTestModule { }
