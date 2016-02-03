import {Component, View} from 'angular2/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {ClientComponent} from '../client/client.component';

@Component({
  selector: 'my-app',
})
@View({
    templateUrl: './app/components/main/main.component.html',
    styleUrls: ['./app/components/main/main.component.css'],
    directives: [NavbarComponent, SidebarComponent],
})

export class MainComponent {
  constructor() {
  }
}
