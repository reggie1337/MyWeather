import {
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { SettingsModalComponent } from './settings-modal.component';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private componentRef!: ComponentRef<SettingsModalComponent>;
  private componentSubscriber!: Subject<string>;
  constructor(private resovler: ComponentFactoryResolver) {}

  openModal(entry: ViewContainerRef, modalTitle: string, modalBody: string) {
    let factory = this.resovler.resolveComponentFactory(SettingsModalComponent);
    this.componentRef = entry.createComponent(factory);
    this.componentRef.instance.title = modalTitle;
    this.componentRef.instance.body = modalBody;
    this.componentRef.instance.closeMeEvent.subscribe(() => this.closeModal());
    this.componentRef.instance.confirmEvent.subscribe(() => this.confirm());
    this.componentSubscriber = new Subject<string>();
    return this.componentSubscriber.asObservable();
  }

  closeModal() {
    this.componentSubscriber.complete();
    this.componentRef.destroy();
  }

  confirm() {
    this.componentSubscriber.next('confirm');
    this.closeModal();
  }
}
