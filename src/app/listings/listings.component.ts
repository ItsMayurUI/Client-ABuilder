import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
  projects: any[] = [];
  filtered: any[] = [];
  statusFilter = '';
  locationFilter = '';

  constructor(
    private ps: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ps.getAll().subscribe((data: any[]) => {
      this.projects = data;
      this.filtered = data;
    });
  }

  applyFilters(): void {
    this.filtered = this.projects.filter(p => {
      const statusOk =
        !this.statusFilter || p.status === this.statusFilter;
      const locationOk =
        !this.locationFilter ||
        p.location.toLowerCase().includes(this.locationFilter.toLowerCase());
      return statusOk && locationOk;
    });
  }

  resetFilters(): void {
    this.statusFilter = '';
    this.locationFilter = '';
    this.filtered = this.projects;
  }

  open(id: string): void {
    this.router.navigate(['/listings', id]);
  }

  getWhatsappLink(p: any): string {
  const phone = '919970542097'; // 🔴 replace with builder WhatsApp number

  const imageUrl = window.location.origin + p.images[0];

  const message =
    `Hello, I am interested in this property:\n\n` +
    `🏠 ${p.name}\n` +
    `📍 Location: ${p.location}\n` +
    `💰 Price: ${p.price}\n` +
    `📌 Status: ${p.status}\n\n` +
    `🖼 Property Image:\n${imageUrl}\n\n` +
    `Please share more details.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

}

