import { ModuleWithProviders } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { UserComponent } from '../components/user.component';



const routes: Routes = [
  { path: '/', component: UserComponent },
];


export class NameRoutingModule { }

export const routing = [NameComponent];