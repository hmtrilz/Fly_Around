import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    return(
        <image src={image.largeImageURL} alt="" />
    )
}

export default PixabayApi;