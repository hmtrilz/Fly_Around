import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/countries.css';

function PixabayApi ({country}) {
    const API_KEY = "19939436-63f5fb187fb76b60b1fff4644";
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${country}+travel&image_type=photo`

    const [image, setImage] = useState([]);
    
    useEffect(() =>{
        axios.get(url)
            .then(response =>{
                setImage(response.data.hits)
                console.log(response.data.hits);
            }) 
            .catch(err => {
                console.log(err);
            })
    }, [url])
console.log("ola");

if (image[0] !== undefined){
    console.log(image[0].largeImageURL);
    return(
        <div>
            <h1 className="countrytitle">{country}</h1>
            <img className="countryimg" src={image[0].largeImageURL} alt="" />
        </div>
    )
}else{
    return (<div><h1 className="countrytitle">{country}</h1></div>)
}

    
}

export default PixabayApi;