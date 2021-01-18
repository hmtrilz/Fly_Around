
export default function Api(origem, destino, ida, volta) {
  var Amadeus = require('amadeus');

  var amadeus = new Amadeus({
    clientId: 'lhANIGnLtRogSWGjkoYsQUUYfwGHsURW',
    clientSecret: 'pUpqyVBSfNJubxwG'
  });
    
  return amadeus.shopping.flightOffersSearch.get({
    originLocationCode: origem,
    destinationLocationCode: "MAD", //mudar para destino
    departureDate: '2021-03-02', //mudar para ida
    returnDate: '2021-03-23', //mudar para volta
    adults: '1',
    currencyCode: 'EUR',
    max: '5'
  }).then(function(response){
    return response.data;
  }).catch(function(responseError){
    console.log(responseError.code);
    alert("ERROR: Invalid city or date. Try again.")
  });

}

