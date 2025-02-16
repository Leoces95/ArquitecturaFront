import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresos',
  imports: [],
  templateUrl: './ingresos.component.html',
  styleUrl: './ingresos.component.css'
})
export class IngresosComponent {

  constructor(private router: Router){}

  menu():void{
    this.router.navigate(['/menu']);
  }

}
