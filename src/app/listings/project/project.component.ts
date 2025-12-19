import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project: any = null;
  activeImage: string = '';


  // THESE (for list + filter)
  projects: any[] = [];
  filteredProjects: any[] = [];
  selectedStatus: string = 'All';


  constructor(
    private route: ActivatedRoute,
    private ps: ProjectsService
  ) {}

  ngOnInit(): void {
    // 🔹 LOAD ALL PROJECTS (for cards + filter)
    this.ps.getAll().subscribe((data: any[]) => {
      this.projects = data;
      this.filteredProjects = data; // IMPORTANT
    });


    const id = this.route.snapshot.paramMap.get('id')!;
    this.ps.getById(id).subscribe((p: any) => {
      this.project = p;
      if (p && p.images && p.images.length) {
        this.activeImage = p.images[0];
      }
    });
  }

  // 🔹 FILTER METHOD (THIS FIXES "BOOK")
  onStatusChange(status: string): void {
    this.selectedStatus = status;

    if (status === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        project => project.status === status
      );
    }
  }

  setActive(img: string): void {
    this.activeImage = img;
  }
}
