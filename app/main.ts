import {bootstrap}    from 'angular2/platform/browser';
import {MainComponent} from './components/main/main.component';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'

bootstrap(MainComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
