console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e) {
  // hide all tab panels
  console.log(tabPanels);
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unsleected
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
  // mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);

  // find the associated tab panel and show it.
  const { id } = e.currentTarget;

  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;

  //   tabPanels.forEach(element => {});
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
