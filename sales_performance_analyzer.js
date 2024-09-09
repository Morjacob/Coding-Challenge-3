// Create a Function to Calculate Average Sales


let calculateAverageSales = (sales) => {
    let salesSum = sales.reduce((sum, figure) => sum + figure,0 );
    let averageSales = salesSum / sales.length;
    return averageSales
};



let determinePerformanceRating = (averageSales) => {
    if (averageSales > 10000) {
        return "Excellent";   
    } else if (averageSales >= 7000 && averageSales <= 10000 ) {
        return "Good";
    } else if (averageSales >= 4000 && averageSales < 7000 ) {
        return "Satisfactory";
    } else if (averageSales < 4000) {
        return "Needs Improvement";
    }   
};




// Create a Function to Identify Top and Bottom Performers


const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },
    { name: 'Diana', sales: [9000, 8500, 9200] },

];

const findTopAndBottomPerformers = (salesData) => { 
    const sales = salesData.map(person => person.sales);
    const maxSales = Math.max(...sales);
    const minSales = Math.min(...sales);
    const topPerformer = workers.find(person => person.sales === maxSales);
    const bottomPerformer = workers.find(person => person.sales === minSales);
    return { topPerformer, bottomPerformer };

}
const result = findTopAndBottomPerformers(salesData);



// Combine Functions to Generate a Performance Report

const generatePerformanceReport = (salesData) => {
    const performanceReport = salesData.map(person => {
        const averageSales = calculateAverageSales(person.sales);
        const rating = determinePerformanceRating(averageSales);
        return { name: person.name, average: averageSales, performanceRating: rating};
      });
    };


  console.log(`Top Performer:`, result.topPerformer);
  console.log(`Bottom Performer:`, result.bottomPerformer);
    

  //Test Your Functions with Sample Data


const performanceReport = generatePerformanceReport(salesData);
console.log (`Performance Report:`,performanceReport)