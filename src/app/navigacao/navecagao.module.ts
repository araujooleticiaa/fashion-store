import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './notfound/not-found.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations:[
        FooterComponent,
        HomeComponent,
        MenuComponent,
        NotFoundComponent,
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports:[
        FooterComponent,
        HomeComponent,
        MenuComponent,
        NotFoundComponent,
    ]
})

export class NavegacaoModule{}