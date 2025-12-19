import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListingsComponent } from './listings.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  { path: '', component: ListingsComponent },          // /listings
  { path: ':id', component: ProjectComponent }         // /listings/:id
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListingsRoutingModule {}
