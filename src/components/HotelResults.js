import React from 'react';
import '../styles/flightresults.css';
import moment from 'moment';

const HotelResults = ({hotelData}) => {
    console.log(hotelData);

    return(
        <>
        {hotelData && (
            hotelData.map((hotel) => (
                <div>
                    <h3>ola</h3>
                </div>))
            )}
        </>
    )
};


export default HotelResults;