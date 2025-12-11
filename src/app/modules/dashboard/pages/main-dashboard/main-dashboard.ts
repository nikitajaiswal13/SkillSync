import { Component } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  standalone: false,
  templateUrl: './main-dashboard.html',
  styleUrl: './main-dashboard.css',
})
export class MainDashboard {
  totalSkills = 0;
totalProjects = 0;
totalCertifications = 0;

//   totalSkills = 5;
// totalProjects = 3;
// totalCertifications = 4;
// goalsProgress = 60;

// Doughnut Chart
// skillsChartData = {
//   labels: ['Frontend', 'Backend', 'DB', 'Other'],
//   datasets: [
//     {
//       data: [40, 20, 25, 15]
//     }
//   ]
// };

// Bar Chart
// goalsChartData = {
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//   datasets: [
//     {
//       label: 'Goals Completed',
//       data: [2, 3, 1, 4, 2, 3, 5]
//     }
//   ]
// };


}

