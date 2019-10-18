const axios = require('axios');
axios.get('https://min-api.cryptocompare.com/data/price?fsym=NANO&tsyms=BTC').then( r=> {
console.log(r.data);
});