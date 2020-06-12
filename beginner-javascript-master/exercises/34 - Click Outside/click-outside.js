const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonCLick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  //  grab the image source
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description;
  //  populate the modal with the new info
  modalInner.innerHTML = `
  
  `
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonCLick)
);
