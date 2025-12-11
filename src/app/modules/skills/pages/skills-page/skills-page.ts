import { Component } from '@angular/core';
import { Storage } from '../../../../core/storage';

@Component({
  selector: 'app-skills-page',
  standalone: false,
  templateUrl: './skills-page.html',
  styleUrl: './skills-page.css',
})
export class SkillsPage {

  constructor(private storage : Storage){}

  ngOnInit() {
  const saved = this.storage.get('skills');
  if (saved) this.skills = saved;
}


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
  this.storage.set('skills', this.skills);
}


deleteSkill(i: number) {
  this.skills.splice(i, 1);
  this.storage.set('skills', this.skills);
}


}
