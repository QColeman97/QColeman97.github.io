const projectTabItems = document.querySelectorAll('.project-tab')
const projectCardItems = document.querySelectorAll('.project-card')
// Select tab content item
function selectProjectItem(e) {
    removeProjectBorder();
    removeProjectShow();
    // Add border to current tab
    this.classList.add('project-tab-border');
    // Grab content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

function removeProjectBorder() {
    projectTabItems.forEach(item => item.classList.remove('project-tab-border'));
}

function removeProjectShow() {
    projectCardItems.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
projectTabItems.forEach(item => item.addEventListener('click', selectProjectItem));