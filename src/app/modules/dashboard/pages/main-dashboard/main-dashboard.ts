import { Component } from '@angular/core';
import { Storage } from '../../../../core/storage';

@Component({
  selector: 'app-main-dashboard',
  standalone: false,
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.css',
})
export class MainDashboard {
  totalSkills = 0;
  totalProjects = 0;
  totalCertifications = 0;

  constructor(private storage: Storage) { }

  ngOnInit() {
    const skills = this.storage.get('skills') || [];
    const projects = this.storage.get('projects') || [];
    const certificates = this.storage.get('certifications') || [];

    this.totalSkills = skills.length;
    this.totalProjects = projects.length;
    this.totalCertifications = certificates.length;
  }
}

