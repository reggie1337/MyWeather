import { Component, ElementRef, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { SettingsService } from './settings.service';
@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class SettingsModalComponent implements OnInit{

  @Input()
  
  id: string;
  private element : any;

  constructor(private SettingsService : SettingsService, private el :ElementRef) {
    this.element = el.nativeElement
  };

ngOnInit(): void {
  
  if (!this.id) {
    console.error('must have an id')
  }
  document.body.appendChild(this.element);

  this.element.addEventListener('click', el =>{
    if(el.target.className === 'app-settings-modal'){
      this.close()
    }
  });
  this.SettingsService.add(this);

}
ngOnDestroy(): void {
  this.SettingsService.remove(this.id);
  this.element.remove();
}

open(): void {
  this.element.style.display = 'block';
  document.body.classList.add('app-settings-modal-open');
}
close(): void {
  this.element.style.display = 'none';
  document.body.classList.remove('app-settings-modal-oepn');
 }
}
 