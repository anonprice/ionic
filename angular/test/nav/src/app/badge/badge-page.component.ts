import { Component, ViewChild } from '@angular/core';
import { Badge } from '@ionic/angular';

@Component({
  selector: 'app-badge-page',
  template: `
    <ion-badge slot="start" [color]="dynamicColor">99</ion-badge>
  `
})
export class BadgePageComponent {
  dynamicColor = 'primary';

  @ViewChild(Badge) badge: Badge;

  ngOnInit() {
    console.log('BadgePageComponent', this.badge)

    setTimeout(() => {
      this.badge.color = 'secondary';
    }, 1000)
  }

  constructor() {

  }

  toggleColor() {
    if (this.dynamicColor === 'primary') {
      this.dynamicColor = 'secondary';
    } else if (this.dynamicColor === 'secondary') {
      this.dynamicColor = 'danger';
    } else {
      this.dynamicColor = 'primary';
    }
  }
}
