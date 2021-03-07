import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [details , setDetails] = useState([])
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then(res => res.json())
        .then(data =>setDetails(data[0]));
    },[])
    return (
        <div>
            <h1>Name :{countryName}</h1>
            <h3>Capital: {details.capital}</h3>
            <p>Region :{details.region}</p>
            <p>Population :{details.population}</p>
            <p>Borders:{details.borders}</p>
        </div>
    );
};

export default CountryDetails;