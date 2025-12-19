import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { label: 'Years of Experience', value: '10+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Families', value: '200+' }
  ];

  timeline = [
    { year: '2015', text: 'Started with small residential projects.' },
    { year: '2018', text: 'Delivered first gated community project.' },
    { year: '2022', text: 'Expanded into premium villa and luxury segment.' }
  ];
}
