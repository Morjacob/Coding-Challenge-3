// Create a Function to Calculate Average Sales


let calculateAverageSales = (sales) => {
    let salesSum = sales.reduce((sum, figure) => sum + figure,0 );
    let averageSales = salesSum / sales.length;
    return averageSales
}
console.log(`Average sales: $${calculateAverageSales(sales)}`);

// Create a Function to Determine Performance Rating

let determinePerformanceRating = (averageSales) => {
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

const workers = ['Alice', 'Bob', 'Charlie', 'Diana'];

const findTopAndBottomPerformers = (workers) => { 
    const sales = workers.map(person => person.sales);
    const maxSales = Math.max(...sales);
    const minSales = Math.min(...sales);
    const topPerformer = workers.find(person => person.sales === maxSales);
    const bottomPerformer = workers.find(person => person.sales === minSales);
    return { topPerformer, bottomPerformer };

}
const result = findTopAndBottomPerformers(workers);
console.log(`Top Performer:`, result.topPerformer);
console.log(`Bottom Performer:`, result.bottomPerformer);

// Combine Functions to Generate a Performance Report

