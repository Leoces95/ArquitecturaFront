import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PatrimonioComponent } from './components/patrimonio/patrimonio.component';
import { AhorrosComponent } from './components/ahorros/ahorros.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { InversionesComponent } from './components/inversiones/inversiones.component';
export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path:'patrimonio', component: PatrimonioComponent},
    {path:'ahorros', component: AhorrosComponent},
    {path:'gastos', component: GastosComponent},
    {path:'ingresos', component: IngresosComponent},
    {path:'inversiones', component:InversionesComponent}
];
