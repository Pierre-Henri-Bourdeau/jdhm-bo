import {Component, View} from 'angular2/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ClientComponent} from '../client/client.component';


@Component({
  selector: 'my-app',
})
@View({
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css'],
    directives: [NavbarComponent, SidebarComponent],
})


export class DashboardComponent {

  constructor() {

  }


}
