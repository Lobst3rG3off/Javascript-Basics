const people = [
  { name: 'Wes', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'Merica' },
  { name: 'Snickers', cool: false, country: 'Dog Country' },
];

people.forEach((person, index) => {
  console.groupCollapsed(`${person.name}`);
  console.log(person.country);
  console.log(person.country)
  console.log('Done')
  console.group(`${person.name}`);
});

// console.table(people);

// Console Methods

// Callstack, Stack Trace

// Grabbing Elements

// Breakpoints

// Scope

// Network Requests

// Break On Attribute

// Some Setup Code

function doAlotOfStuff() {
    console.group('Doing some stuff')
    console.log('Hey Im One')
    console.warn('Watch out')
    console.error('hey')
    console.groupEnd('Doing some stuff');
}

function doctorize(name) {
//   console.count(`Running Doctorize for ${name}`);
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Wes'));
  console.log(name);
}

function bootstrap() {
console.log('Running App');
    go();
}

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
