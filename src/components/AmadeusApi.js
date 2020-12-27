import React from 'react';

export default function Api() {
    var Amadeus = require('amadeus');

    var amadeus = new Amadeus({
      clientId: 'lhANIGnLtRogSWGjkoYsQUUYfwGHsURW',
      clientSecret: 'pUpqyVBSfNJubxwG'
    });
    
    amadeus.shopping.flightOffersSearch.get({
        originLocationCode: 'SYD',
        destinationLocationCode: 'BKK',
        departureDate: '2021-04-01',
        adults: '2'
    }).then(function(response){
      console.log(response.data);
    }).catch(function(responseError){
      console.log(responseError.code);
    });

    return (
        <div></div>
    )
}

