import { Component, OnInit } from '@angular/core';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Temp } from 'src/app/components/settings-modal/temp';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faSun = faSun;
  faCloudShowersHeavy = faCloudShowersHeavy;
  faGear = faGear;
  defaultSettings: Temp = {
    isTemp: true,
  };
  settingsModalOpened = false;

  openModal(): void {
    this.settingsModalOpened = true;
  }

  closeModal(): void {
    this.settingsModalOpened = false;
  }

  cancelModal(closed: boolean): void {
    if (closed) {
      this.closeModal();
    }
  }

  saveModal(settings: Temp): void {
    console.warn('modal is working');
    this.closeModal();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
