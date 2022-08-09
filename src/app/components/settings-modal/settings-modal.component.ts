import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent {

  @Output() onClose = new EventEmitter<Record<string,string>> ();

  constructor() {};

ngOnInit(): void {
  }

}
