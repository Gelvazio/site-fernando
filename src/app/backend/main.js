import { get } from 'axios';
get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=BRL').then( r=> {
console.log(r.data);
});
get('https://min-api.cryptocompare.com/data/price?fsym=DCR&tsyms=BRL').then( r=> {
console.log(r.data);
});
get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BRL').then( r=> {
console.log(r.data);
});
get('https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=BRL').then( r=> {
console.log(r.data);
});
get('https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=BRL').then( r=> {
console.log(r.data);
});