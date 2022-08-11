import { Injectable } from "@angular/core";

@Injectable ({providedIn: 'root'})
export class SettingsService {
    private modals : any [] =[];

    add(modal: any){
        this.modals.push(modal);
    }
    
    remove(id:string) {
        this.modals = this.modals.filter(m => m.id !== id);
    }

    open(id:string) {
        const modal = this.modals.find(m => m.id ===id)
        modal.open();
    }

    close(id:string) {
        const modal = this.modals.find (m => m.id === id);
        modal.close();
    }
}