// JavaScript to add "active" class to the menu item with a matching href
document.addEventListener('DOMContentLoaded', function () {
    var currentLocation = window.location.href;

    // Get all anchor elements in the menu
    var menuItems = document.querySelectorAll('.menu-list a');

    // Loop through the menu items
    menuItems.forEach(function (menuItem) {
        // Check if the href of the menu item matches the current page URL
        if (menuItem.href === currentLocation) {
            // Add the "active" class to the matching menu item
            menuItem.classList.add('active-link');
        }
    });
});