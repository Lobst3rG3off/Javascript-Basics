const cardButtons = document.querySelectorAll('.card button');

function handleCardButtonCLick() {
  console.log('you clicked it!');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonCLick)
);
