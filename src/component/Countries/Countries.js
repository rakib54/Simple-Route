import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Countries.css";


const Countries = (props) => {
    const {name ,capital,flag} = props.country
    const history = useHistory();
    const handleClick = (countryName) =>{
        history.push(`/name/${countryName}`);
    }

    return (
        <div className="Countries">
            <div className="country">
                <h3>Country: {name}</h3>
                <img style={{height:"80px", width:"100px"}} src={flag}></img>
                <p>Capital:{capital}</p>
                {/* <Link to={`/name/${name}`}><button>See details</button></Link> */}
                <button onClick={()=>handleClick(name)}>Details</button>    
            </div>
            

        </div>
    );
};

export default Countries;