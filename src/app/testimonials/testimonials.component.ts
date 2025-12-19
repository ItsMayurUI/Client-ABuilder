import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Rahul Patil',
      location: 'Pune',
      text: 'Very professional builder. The flat was delivered on time and quality is excellent.'
    },
    {
      name: 'Sneha & Amit',
      location: 'Mumbai',
      text: 'Good ventilation, planning and finishing. Documentation process was also smooth.'
    },
    {
      name: 'Jain Family',
      location: 'PCMC',
      text: 'We are happy with our new home. Builder was supportive even after possession.'
    }
  ];
}
