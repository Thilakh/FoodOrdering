import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('/restaurants')
            .then(response => {
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the restaurants!", error);
            });
    }, []);

    return (
        <div>
            <h1>Restaurants</h1>
            <ul>
                {restaurants.map((restaurant, index) => (
                    <li key={index}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Restaurants;
