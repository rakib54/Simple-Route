import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries ,setCountry] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res =>res.json())
        .then(data =>setCountry(data))
    },[])
    return (
        <div>
            {
                countries.map(country => <Countries country ={country}></Countries>)
            }
        </div>
    );
};

export default Home;