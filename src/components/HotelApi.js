export default function HotelApi(destino, ida, volta) {
  var Amadeus2 = require('amadeus');

  var amadeus2 = new Amadeus2({
    clientId: 'lhANIGnLtRogSWGjkoYsQUUYfwGHsURW',
    clientSecret: 'pUpqyVBSfNJubxwG'
  });
      
  return amadeus2.shopping.hotelOffers.get({
    cityCode: destino,
    checkInDate: ida, 
    checkOutDate: volta, 
    adults: '1',
    currency: 'EUR'
  }).then(function(response){
    console.log(response.data);
  })

}
