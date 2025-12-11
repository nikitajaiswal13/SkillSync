import { Component } from '@angular/core';
import { Storage } from '../../../../core/storage';

@Component({
  selector: 'app-profile-page',
  standalone: false,
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {

  profile: any = {};
  editMode = false;

  constructor() {
    this.loadProfile();
  }

  loadProfile() {
    const stored = localStorage.getItem('profile');
    this.profile = stored ? JSON.parse(stored) : {};
  }

  saveProfile() {
    localStorage.setItem('profile', JSON.stringify(this.profile));
    this.editMode = false;
  }

}
