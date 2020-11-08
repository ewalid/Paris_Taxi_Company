import styled from 'styled-components';


export const StyledRide = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.longDistance ? `#f34949` : `#fffafa`)};
  border-radius: 5px;
  padding: 10px;
  cursor: pointer; 
  font-size: 15px;
  border: solid 1px #47463d;
    
  .ride-fare {
    align-self: center;
    font-weight: bold;
  }
  
  .is-clicked {
     align-self: center;
  }
  
`;

export const StyledRideInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 5px 5px 0;
`;