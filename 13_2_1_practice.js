var numbers = [0,2,4,6,8];
var doubled = numbers.map(function(num){
    return num +5;
});
console.log(doubled);



var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.population;
});
console.log(cityNames);




var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});
// The filter() method, in turn, takes an anonymous function as its argument. The anonymous function's sole task is to take in a parameter, called num.
console.log(larger);


// Filter the results to include only animals whose species name starts with the letter "s."
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var animals = words.filter(function(letter){
    const firstLetters = letter
    .split(' ')
    .map(word => word.charAt(0))
    .join('');   
    var check = letter.charAt(0);
    return check;
});
console.log(animals)

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
console.log(words.slice(3, ))

