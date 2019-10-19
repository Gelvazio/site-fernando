import { Component, OnInit } from '@angular/core';
import { faBitcoin, faEthereum } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Fernando Limas P2P';
}

library.add(faBitcoin, faEthereum);

