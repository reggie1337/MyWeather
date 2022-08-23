import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { SettingsService } from 'src/app/components/settings-modal/settings.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faSun = faSun;
  faCloudShowersHeavy = faCloudShowersHeavy;
  faGear = faGear;
  constructor(private settingsService: SettingsService) {}

  @ViewChild('modal', { read: ViewContainerRef })
  entry!: ViewContainerRef;
  sub!: Subscription;

  ngOnInit(): void {}

  createModal() {
    this.sub = this.settingsService
      .openModal(this.entry, 'sure?', 'click confirm')
      .subscribe((v) => {
        this.settingsService;
      });
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }
}
