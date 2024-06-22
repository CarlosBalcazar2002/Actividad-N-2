import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardsComponent } from './pages/cards/cards.component';
import { AboutComponent } from './pages/about/about.component';
import { AccordionComponent } from './pages/accordion/accordion.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent },
    {path: 'cards', component: CardsComponent},
    {path: 'acercade', component: AboutComponent},
    {path: 'accordion', component: AccordionComponent}
];
