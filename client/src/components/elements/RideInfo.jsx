import React from 'react'
import { StyledRideInfo } from "../styles/StyledRide";


const RideInfo = ({label, data}) => (
    <StyledRideInfo >
        <div>{label}</div>
        <div>{data}</div>
    </StyledRideInfo>
);
export default RideInfo;