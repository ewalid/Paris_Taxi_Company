import React, { useEffect, useState } from 'react';
import Header from "./elements/Header";
import Grid from "./elements/Grid";
import Ride from "./elements/Ride";


const App = () => {
    const [taxisRides, setTaxisRides ] = useState([]);

    useEffect(() => {
        fetch( 'http://127.0.0.1:5000/taxis_rides')
            .then(response => response.json())
            .then(data => setTaxisRides(data.taxis_rides))
            .catch(console.log)
        },[])

    return (
        <>
            <Header label=" Paris Taxi Company App" />
            <Grid header="Rides">
                {taxisRides.map((ride, index) => (
                    <Ride
                        key={index}
                        idRide={ride.id}
                        distance={ride.distance}
                        startTime={ride.startTime}
                        duration={ride.duration}
                    />
                ))}
            </Grid>
        </>
    );
}

export default App;
