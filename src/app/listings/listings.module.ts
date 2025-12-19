import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListingsRoutingModule } from './listings-routing.module';
import { ListingsComponent } from './listings.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    ListingsComponent,
    ProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,           // 👈 important for ngModel
    ListingsRoutingModule
  ]
})
export class ListingsModule { }
