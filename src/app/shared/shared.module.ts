import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { GlobalProgressBarComponent } from './components/global-progress-bar/global-progress-bar.component';

@NgModule({
  declarations: [
    GlobalProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    GlobalProgressBarComponent
  ],
})
export class SharedModule { }
