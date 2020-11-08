/**
 * Calculates ride fare
 * @param {string} startTime - Ride's start time in ISO date
 * @param {number} distance - Ride's distance
 */
const fareCalculator = (startTime, distance) => {

    // Check data
    if (!startTime || !distance) {
        return 0
    }

    // Initiate fare at 1€ (initial charge)
    let fare = 1;

    // Calculate distance fare: .50€ per 1/5 th of a mile
    fare += Math.ceil(distance * 5) * 0.5;

    // Check for additional fares
    const start = new Date(startTime);
    const startHour = start.getUTCHours();

    if (startHour >= 20 || startHour < 6) { // .50€ additional EUR between 8PM and 6AM
        fare += 0.5
    } else if (startHour >= 16 && startHour < 19) { // 1€ additional for busy periods between 4PM and 7PM
        fare++
    }

    return fare
};

export default fareCalculator;