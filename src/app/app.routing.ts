import { ModuleWithProviders } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { UserComponent } from '../components/user.component';



const routes: RoutingModule = [
  { path: '/', component: UserComponent },
];


export class RoutingModule { }

export const routing = [RoutingModule];