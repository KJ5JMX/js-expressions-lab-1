//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;



function convertToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
    
}
const celsiusTemps = [
    day2TempC, day4TempC, day6TempC, day8TempC, day10TempC,
    day12TempC, day14TempC, day16TempC, day18TempC, day20TempC,
    day22TempC, day24TempC, day26TempC, day28TempC, day30TempC
  ];
    const fahrenheitTemps = [
        day1TempF, day3TempF, day5TempF, day7TempF, day9TempF,
        day11TempF, day13TempF, day15TempF, day17TempF, day19TempF,
        day21TempF, day23TempF, day25TempF, day27TempF, day29TempF
    ];  



//! Start the calculation of the total temperatures

function sum_ferhenheit_temps(fahrenheitTemps) {
    return fahrenheitTemps.reduce((acc, temp) => acc + temp, 0);
}
function sum_celsius_temps(celsiusTemps) {
    return celsiusTemps.reduce((acc, temp) => acc + temp, 0);
}


//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

const tot_temperature_in_fahrenheit = sum_ferhenheit_temps(fahrenheitTemps);
const tot_temperature_in_celsius = sum_celsius_temps(celsiusTemps);
console.log(tot_temperature_in_celsius);
console.log(tot_temperature_in_fahrenheit);

//! Start the calculation of the average temperatures
function avg_ferhenheit_temps(fahrenheitTemps) {
    return sum_ferhenheit_temps(fahrenheitTemps) / fahrenheitTemps.length;
}
function avg_celsius_temps(celsiusTemps) {
    return sum_celsius_temps(celsiusTemps) / celsiusTemps.length;
}
//* Then apply the conversion to calculate the average in the other unit of measurement

const avg_temperature_in_fahrenheit = avg_ferhenheit_temps(fahrenheitTemps);
const avg_temperature_in_celsius = avg_celsius_temps(celsiusTemps);
console.log(avg_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit); 

//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
     tot_temperature_in_fahrenheit,
     tot_temperature_in_celsius,
     avg_temperature_in_fahrenheit,
     avg_temperature_in_celsius
};

//? The following code is a test file that will be used to test the code above







//sum of all temperatures


