import React from 'react';
import '../styles/results.css';

const HotelResults = ({hotelData}) => {
    console.log(hotelData);

    return(
        <>
        {hotelData && (
            hotelData.map((hotel) => (
                <div className="corpo2">
                    <div className="course2">
                        <h2 style={{textTransform: 'capitalize'}}>{hotel.hotel.name}</h2>
                        <h4>{hotel.hotel.address.lines[0]}, {hotel.hotel.address.cityName} {hotel.hotel.address.postalCode}</h4>
                        <h4>Phone: {hotel.hotel.contact.phone}</h4>
                        <h4>Check-In: {hotel.offers[0].checkInDate}</h4>
                        <h4>Check-Out: {hotel.offers[0].checkOutDate}</h4>
                        <div className="aside">
                            <h5>{hotel.hotel.rating} stars | 2 Adults</h5>
                            <h1 className="price">{hotel.offers[0].price.total}€</h1>
                            <button className="btn2">More info</button>
                        </div>
                    </div>
                </div>))
            )}
        </>
    )
};


export default HotelResults;