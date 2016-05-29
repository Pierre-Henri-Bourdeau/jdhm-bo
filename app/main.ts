import {bootstrap}    from '@angular/platform-browser-dynamic';
import {MainComponent} from './components/main/main.component';
import {ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx'

bootstrap(MainComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
