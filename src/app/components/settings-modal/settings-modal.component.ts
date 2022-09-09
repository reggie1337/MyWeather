import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { Temp } from './temp';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsModalComponent {
  @Input() injectData! : Temp
  @Output() saved = new EventEmitter<Temp>();
  @Output() closed = new EventEmitter<boolean>();

  save(): void {
    console.warn('working')
      this.saved.emit({
        isTemp: !this.injectData.isTemp
      });
  } 

  cancel(): void {
    this.closed.emit(true)
  }
}
