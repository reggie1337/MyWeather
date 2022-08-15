import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { SettingsService } from './settings.service';
@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() body: string = '';
  @Output() closeMeEvent = new EventEmitter();
  @Output() confirmEvent = new EventEmitter();

  ngOnInit(): void {
    console.log('Modal Init');
  }
  closeMe() {
    this.closeMeEvent.emit();
  }
  confirm() {
    this.confirmEvent.emit();
  }
  ngOnDestroy(): void {
    console.log('Modal destroyed');
  }
}
