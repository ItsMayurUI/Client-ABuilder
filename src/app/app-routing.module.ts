import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  // Home page
  { path: '', component: HomeComponent },

  // Static pages
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonials', component: TestimonialsComponent },

  // Lazy-loaded listings module (created by CLI)
  {
    path: 'listings',
    loadChildren: () =>
      import('./listings/listings.module').then(m => m.ListingsModule)
  },

  // Wildcard – anything unknown → go to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
