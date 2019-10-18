import { Injectable } from '@angular/core';
import  httpClient  from '../httpClient';

@Injectable() 
export class Cryptocurrencies{
    async random() {
        const result = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BRL');
    const data = await result.json();
    const { results : [Cryptocurrencies]} = data;
    return Cryptocurrencies;
    }
}