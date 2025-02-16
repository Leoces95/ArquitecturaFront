import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patrimonio',
  imports: [],
  templateUrl: './patrimonio.component.html',
  styleUrl: './patrimonio.component.css'
})
export class PatrimonioComponent {

  constructor(private router: Router){}

  menu():void{
    this.router.navigate(['/menu']);
  }

}
