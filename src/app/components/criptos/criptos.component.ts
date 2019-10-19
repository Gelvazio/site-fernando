import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Criptos } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-criptos',
  templateUrl: './criptos.component.html',
  styleUrls: ['./criptos.component.css']
})
export class CriptosComponent implements OnInit {
  criptos: any;
  error: any;

  constructor(private apiService:ApiService ) {
    this.getter();
   }

  ngOnInit() {
  }
getter() {
  this.apiService.getCriptos().subscribe(
    (data: Criptos) => 
    {
      this.criptos = data;
      console.log('a variavel q preenchemos',this.criptos);
    console.log('o data q recebemos',data);
  
    }, 
 (error: any ) => {
   this.error = error; 
  console.error(error);
}
  );
}
}
