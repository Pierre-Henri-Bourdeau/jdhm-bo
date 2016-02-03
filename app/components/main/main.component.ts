import {Component, View} from 'angular2/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ClientComponent} from '../client/client.component';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'my-app',
})
@View({
    templateUrl: './app/components/main/main.component.html',
    styleUrls: ['./app/components/main/main.component.css'],
    directives: [NavbarComponent, SidebarComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
    {path:'/clients', name: 'ClientComponent', component: ClientComponent},
])
export class MainComponent {
  constructor() {
  }
}
