import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'jdhm-side-bar',
  templateUrl: './app/components/sidebar/sidebar.component.html',
  styleUrls: ['./app/components/main/main.component.css'],
  directives: [ROUTER_DIRECTIVES],
})

export class SidebarComponent {
}
