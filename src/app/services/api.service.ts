import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criptos } from '../models/placeholder.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
  public getCriptos():Observable<any>
        {
        return this.http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,DCR,ETH,LTC,USDT&tsyms=BRL');
        }
}
