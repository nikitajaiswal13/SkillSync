import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications-page',
  standalone: false,
  templateUrl: './certifications-page.html',
  styleUrl: './certifications-page.css',
})
export class CertificationsPage {

  certifications: any[] = [];

  newCert = { 
    name: '', 
    issuer: '', 
    year: '',
    file: ''   // Base64 file
  };

  constructor() {
    this.loadCerts();
  }

  handleFile(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      this.newCert.file = reader.result as string;
    };

    reader.readAsDataURL(file);
  }

  loadCerts() {
    const stored = localStorage.getItem('certifications');
    this.certifications = stored ? JSON.parse(stored) : [];
  }

  saveCerts() {
    localStorage.setItem('certifications', JSON.stringify(this.certifications));
  }

  addCertification() {
    if (!this.newCert.name.trim()) return;

    this.certifications.push({ ...this.newCert });
    this.saveCerts();

    this.newCert = { name: '', issuer: '', year: '', file: '' };
  }

  deleteCertification(index: number) {
    this.certifications.splice(index, 1);
    this.saveCerts();
  }
}
