import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications-page',
  standalone: false,
  templateUrl: './certifications-page.html',
  styleUrl: './certifications-page.css',
})
export class CertificationsPage {
    showAdd = false;

  certName = '';
  certIssuer = '';
  certYear = '';

  certifications: {
    name: string,
    issuer: string,
    year: string
  }[] = [];

  toggleAdd() {
    this.showAdd = !this.showAdd;
  }

  addCertification() {
    if (!this.certName.trim()) return;

    this.certifications.push({
      name: this.certName.trim(),
      issuer: this.certIssuer.trim() || 'Unknown',
      year: this.certYear.trim() || 'Not specified'
    });

    // Reset fields
    this.certName = '';
    this.certIssuer = '';
    this.certYear = '';
    this.showAdd = false;
  }

  deleteCertification(index: number) {
    this.certifications.splice(index, 1);
  }
}
