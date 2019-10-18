import { Component, OnInit } from '@angular/core';
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { crypto } from "./backend/crypto";
import { constructor } from 'typescript';


interface crypto {
  name: { initials: string; }
  price: { value: Float32Array; }
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fernando Limas P2P';
  crypto: Crypto | null = null;
}
constructor(Crypto, Crypto); {};

library.add(faBitcoin, faEthereum);
ngOnInit ()  {

}
