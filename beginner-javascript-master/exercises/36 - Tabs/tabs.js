console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  //hide all tab panels
  
  //mark all tabs as unsleected
  //mark the clicked tab as selected
  //find the associated tab panel and show it.
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
