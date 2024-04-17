import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  menuItems: any[];
constructor(private sidebarservice: SidebarService){
    this.menuItems = sidebarservice.menu;

}




}
