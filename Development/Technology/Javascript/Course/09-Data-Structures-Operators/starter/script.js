'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};


const arr = [2,3,4];

// Array De-structuring
const [a,b,c] = arr;
console.log(a,b,c);

// Extracting only required data
let [first, ,second] = restaurant.categories;
console.log(first,second);

// Swapping two variables
[first, second] = [second, first];
console.log(first,second);

// Destructuring array returned by a function
const [starter, main]= restaurant.order(2,0);
console.log(starter, main);

// Destructuring nested array
const newArr = [1,2,[3,4]];
const [i,j,[k,l]] = newArr;
console.log(i,j,k,l);

// Default values while destructuring
const [p=0,q=0,r=0] = [8,9];
console.log(p,q,r);