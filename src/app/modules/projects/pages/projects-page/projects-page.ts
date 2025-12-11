import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  standalone: false,
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
})
export class ProjectsPage {

  showAdd = false;
  projectTitle = '';
  projectDesc = '';
  projectTech = '';

  projects: { 
    title: string; 
    desc: string; 
    tech: string[] 
  }[] = [];

  toggleAdd() {
    this.showAdd = !this.showAdd;
  }

  addProject() {
    if (!this.projectTitle.trim()) return;

    const techArray = this.projectTech
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    this.projects.push({
      title: this.projectTitle.trim(),
      desc: this.projectDesc.trim() || 'No description',
      tech: techArray.length ? techArray : ['General']
    });

    // Reset fields
    this.projectTitle = '';
    this.projectDesc = '';
    this.projectTech = '';
    this.showAdd = false;
  }

  deleteProject(i: number) {
    this.projects.splice(i, 1);
  }
}
