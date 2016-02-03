import {Component, View} from 'angular2/core';

@Component({
  selector: 'jdhm-side-bar',
})
@View({
  templateUrl: './app/components/sidebar/sidebar.component.html',
  styleUrls: ['./app/components/dashboard/dashboard.component.css'],

})
export class SidebarComponent {

    clientClicked(event) {
        console.log("You clicked on client!");
    }

}
