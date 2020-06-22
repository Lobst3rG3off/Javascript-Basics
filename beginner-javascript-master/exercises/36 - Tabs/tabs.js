console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

const handleTabClick = e => {
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

  //   method 1
  //   const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  //   tabPanel.hidden = false;

  // Method 2 find in the array of tab panels
  console.log(tabPanels);
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
};

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
