import React from 'react';
import '../styles/countries.css';

const DestinationsItem = ({country}) => {
    return (
        <div>
            <h1 className="countrytitle">{country}</h1>
        </div>
    )

}
export default DestinationsItem;
