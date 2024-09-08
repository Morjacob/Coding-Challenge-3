// Create a Function to Calculate Average Sales

let calculateAverageSales = (sales) => {
    let salesSum = sales.reduce((sum, figure) => sum + figure,0 );
    let averageSales = salesSum / sales.length;
    return averageSales
}
console.log (calculateAverageSales)

// Create a Function to Determine Performance Rating

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
console.log(determinePerformanceRating)

// Create a Function to Identify Top and Bottom Performers

let = findTopAndBottomPerformers = (workers) => { 
    let performers = workers.reduce ((acc,person) => {
        if (!acc.topPerformer || person.sales > acc.topPerfomer.sales) {
            acc.topPerformer = person;
        }
        if (!acc.bottomPerformer || person.sales < acc.bottomPerfomer.sales) {
            acc.bottomerPerformer = person;
        }
        return acc;
    })

}
console.log(findTopAndBottomPerformers)