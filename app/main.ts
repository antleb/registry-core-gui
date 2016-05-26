import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import 'rxjs/Rx';
import { ResourceTypeService } from './resourcetype/resource-type.service';
import { HTTP_PROVIDERS } from '@angular/http';

bootstrap(AppComponent, [ROUTER_PROVIDERS, ResourceTypeService, HTTP_PROVIDERS]);

