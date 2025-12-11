import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: false,
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage {
    showEdit = false;

  // Default profile details
  name = 'Your Name';
  email = 'your@email.com';
  role = 'Frontend Developer';
  about = 'Write something about yourself here.';

  toggleEdit() {
    this.showEdit = !this.showEdit;
  }

  save() {
    this.showEdit = false;
  }
}
