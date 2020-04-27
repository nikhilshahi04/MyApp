import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDrirective{
    @HostBinding ('class.open') isOpen =false;
    @HostListener ('click') toggleOpen(){
        this.isOpen =!this.isOpen;
    }
}