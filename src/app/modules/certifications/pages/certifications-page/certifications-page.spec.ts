import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsPage } from './certifications-page';

describe('CertificationsPage', () => {
  let component: CertificationsPage;
  let fixture: ComponentFixture<CertificationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificationsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
