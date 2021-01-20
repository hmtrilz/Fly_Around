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
                        <div className="course-preview2">
                            <h2 style={{textTransform: 'capitalize'}}>{hotel.hotel.name}</h2>
                            <h4 className="rua">{hotel.hotel.address.lines[0]}, {hotel.hotel.address.cityName} {hotel.hotel.address.postalCode}</h4>
                            <h4><b><i className="fa fas fa-phone"></i></b> {hotel.hotel.contact.phone}</h4>
                            <h4><b>Check-In:</b> {hotel.offers[0].checkInDate}</h4>
                            <h4><b>Check-Out:</b> {hotel.offers[0].checkOutDate}</h4>
                        </div>
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