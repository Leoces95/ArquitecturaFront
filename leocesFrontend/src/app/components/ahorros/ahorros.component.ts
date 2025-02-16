import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ahorros',
  imports: [],
  templateUrl: './ahorros.component.html',
  styleUrl: './ahorros.component.css'
})
export class AhorrosComponent {
  constructor(private router: Router){}

  menu(): void{
    this.router.navigate(['/menu']);
  }

}
