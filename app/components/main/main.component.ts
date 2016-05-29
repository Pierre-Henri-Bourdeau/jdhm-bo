import {Component} from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {HomeComponent} from '../home/home.component';
import {ClientComponent} from '../client/client.component';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app/components/main/main.component.html',
  styleUrls: ['./app/components/main/main.component.css'],
  directives: [NavbarComponent, SidebarComponent, ROUTER_DIRECTIVES],
})
@Routes([
    {path:'/', component: HomeComponent},
    {path:'/clients', component: ClientComponent},
])
export class MainComponent {
}
