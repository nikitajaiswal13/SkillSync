import { Component } from '@angular/core';
import { Storage } from '../../../../core/storage';

@Component({
  selector: 'app-certifications-page',
  standalone: false,
  templateUrl: './certifications-page.html',
  styleUrl: './certifications-page.css',
})
export class CertificationsPage {


  certifications: any[] = [];
  newCert = { name: '', issuer: '', year: '' };

  constructor() {
    this.loadCerts();
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

    this.newCert = { name: '', issuer: '', year: '' };
  }

  deleteCertification(index: number) {
    this.certifications.splice(index, 1);
    this.saveCerts();
  }
}
