import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss']
})
export class SettingsModalComponent implements OnInit{

  @Input()
  id!: string;
  private element : any;

  constructor(private SettingsModal: SettingsModalComponent) {};

ngOnInit(): void {
  
  if (!this.id) {
    console.error('must have an id')
  }
  document.body.appendChild(this.element);

  this.element.addEventListener('click', (el: { target: { className: string; }; }) =>{
    if(el.target.className === 'Settings-modal'){
      this.close()
    }
  })

}
open(): void {
  this.element.style.display = 'block';
  document.body.classList.add('SettingsModal-open');
}
close(): void {
  this.element.style.display = 'none';
  document.body.classList.remove('SettingsModal-oepn');
}
}
