// Create a Function to Calculate Average Sales

let calculateAverageSales = (sales) => {
    let salesSum = sales.reduce((sum, figure) => sum + figure,0 );
    let averageSales = salesSum / sales.length;
    return averageSales
}

//Create a Function to Determine Performance Rating

let determinePerformanceRating = (performanceRating) => {
    if (averageSales > $10000) {
        return "excellent";   
    } else if (averageSales >= $7000 && averageSales <= $10000 ) {
        return "Good";
    } else if (averageSales >= $4000 && averageSales < $7000 ) {
        return "Satisfactory";
    } else if (averageSales < 4000) {
        return "Needs Improvement";
    }   
}