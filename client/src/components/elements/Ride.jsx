import React, { useState } from 'react';
import { StyledRide } from "../styles/StyledRide";
import RideInfo from "./RideInfo";
import fareCalculator from "../utils/fareCalculator";


const Ride = ({idRide, distance, startTime, duration}) => {
    const [clicked, setClicked] = useState(false);
    const fare = fareCalculator(startTime, distance);

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toUTCString().substr(4, 18)
    };

    const formatDuration = (rideDuration) => {
        return  new Date(
            rideDuration * 1000
        ).toISOString().substr(11, 8)
    };

    const Onclick = () => {
        const formattedDuration = formatDuration(duration)
        const endTime = new Date(startTime)
        endTime.setSeconds( endTime.getSeconds() + duration)
        alert(` ${formattedDuration} - ${formatTime(endTime.toISOString())}`);
        setClicked(true)
    };

    return (
    <StyledRide
        onClick={() => Onclick()}
        longDistance={distance> 2}
    >
        {clicked && (
            <div className="is-clicked">CLICKED</div>
        )}
        <RideInfo label={"Taxi Id:"} data={idRide} />
        <RideInfo label={"Start:"} data={formatTime(startTime)} />
        <RideInfo label={"Distance:"} data={distance}/>
        <RideInfo label={"Duration"} data={formatDuration(duration)}/>
        <div className="ride-fare">
            {`Fare: ${fare} €`}
        </div>
    </StyledRide>

)};

export default Ride;