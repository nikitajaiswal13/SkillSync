import { Component } from '@angular/core';
import { Storage } from '../../../../core/storage';

@Component({
  selector: 'app-projects-page',
  standalone: false,
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {

  projects: any[] = [];
  newProject = { name: '', type: '', description: '' };

  constructor() {
    this.loadProjects();
  }

  loadProjects() {
    const stored = localStorage.getItem('projects');
    this.projects = stored ? JSON.parse(stored) : [];
  }

  saveProjects() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }

  addProject() {
    if (!this.newProject.name.trim()) return;

    this.projects.push({ ...this.newProject });
    this.saveProjects();

    this.newProject = { name: '', type: '', description: '' };
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.saveProjects();
  }

}
