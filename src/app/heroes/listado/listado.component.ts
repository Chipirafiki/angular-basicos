import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ContadorComponent } from '../../contador/contador/contador.component';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
  
})

export class ListadoComponent {  
  heroes:string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado: string=''; 
  
  borrarHeroe (){    
    this.heroeBorrado= this.heroes.shift()||'';      
  
    
  }
}
