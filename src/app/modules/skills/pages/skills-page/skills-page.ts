import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  standalone: false,
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.css',
})
export class SkillsPage {
  showAdd = false;
  newSkill = '';
  skills: string[] = [];

  toggleAdd() {
    this.showAdd = !this.showAdd;
  }

  addSkill() {
    if (!this.newSkill.trim()) return;
    this.skills.push(this.newSkill.trim());
    this.newSkill = '';
    this.showAdd = false;
  }

  deleteSkill(i: number) {
    this.skills.splice(i, 1);
  }

}
