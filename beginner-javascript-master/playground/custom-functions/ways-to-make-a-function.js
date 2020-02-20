// // function doctorize(firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Anon Function
// // function (firstName) {
// //   return `Dr. ${firstName}`;
// // }

// // Function Expression
// // const doctorize = function(firstName) {
// //   return `Dr. ${firstName}`;
// // };

// /* eslint-disable */
// const inchToCM = inches => inches * 2.54;

// // function add(a, b = 3) {
// //   const total = a + b;
// //   return total;
// // }

// // const add = (a, b = 3) => a + b;

// // returning an object

// // function makeABaby(first, last) {
// //   const baby = {
// //     name: `${first} ${last}`,
// //     age: 0
// //   }
// //   return baby;
// // }

// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// // IIFE
// // Immediately Invoked Function Expression

// (function(age) {
//   return `You are cool and age ${age}`;
// })(10);

// // Methods!!!
// const wes = {
//   name: 'Westopher Bos',
//   // Method!
//   sayHi: function() {
//     console.log(`Hey ${this.name}`);
//     return 'Hey Wes';
//   },
//   // Short hand Method
//   yellHi() {
//     console.log('HEY WESSSSS');
//   },
//   // Arrow function
//   wisperHi: () => {
//     console.log('hii wesss im a mouse');
//   }
// }

// // Callback Functions
// // Click Callback
// const button = document.querySelector('.clickMe');

// function handleClick() {
//   console.log('Great Clicking!!');
// }

// button.addEventListener('click', function() {
//   console.log('NIce Job!!!');
// });

// // Timer Callback
// setTimeout(() => {
//   console.log('DONE! Time to eat!');
// }, 1000);

// function declaration
// function doctorize(firstName) {
//   return `Dr.${firstName}`;
// }
// anon function
//  function (firstName) {
//      return `Dr.${firstName}`;
//    }

// function Expression Puts a function into a variable definition.
// const doctorize = function(firstName) {
//   return `Dr.${firstName}`;
// };

// arrow functions are annon, you have to put them into a function expression below is an example of an implicit return
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// iife immedately invoked function expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// methods!!
const wes = {
  name: 'Wes Bos',
  // long way method
  sayHi() {
    console.log('Hey Wes');
    return 'Hey Wes!';
  },
  // short hand method
  yellHi() {
    console.log('Hey WESSS');
  },
  // Arrow Function
  whisperHi: () => {
    console.log('Im whispering Stupid');
  },
};

// callback functions
// click callback

const button = document.querySelector('.clickMe');
console.log(button);

function handleClick() {
  console.log('Great Clicking');
}
button.addEventListener('click', function() {
  console.log('Nice Job!');
});

// callback functions are ones that are passed back and called by the browser at a later point. In this case it waits for the button to click to fire off the anon function.

// timer callback
setTimeout(function() {
  console.log('time to eat!');
}, 1000);
