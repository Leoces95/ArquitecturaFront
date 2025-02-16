import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router){}

  patrimonio(): void{
    this.router.navigate(['/patrimonio'])
  }

  ingresos(): void{
    this.router.navigate(['/ingresos'])
  }

}
