document.addEventListener("DOMContentLoaded", function() {
    // Get the navigation element
    const nav = document.getElementById("navigation");
    const siteName = document.getElementById("site_name");
    const menuList = document.getElementsByClassName("menu-list");
    const navButton = document.getElementById("navbar-button");


    // Get the initial position of the navigation
    const navOffset = nav.offsetTop;

    // Add scroll event listener
    window.addEventListener("scroll", function() {
        // Check if the current scroll position is below the initial position of the navigation
        if (window.scrollY > navOffset) {
            // Add a class when scrolling down
            nav.classList.add("bg-white/95", "dark:bg-gold-600");
            siteName.classList.remove( "dark:text-white");
            siteName.classList.add("bg-[length:100%_2px]", "dark:text-secondary");
            navButton.classList.add("border-yellow-metal-700", "hover:bg-yellow-metal-700", "hover:text-gold-500", "text-yellow-metal-700", "hover:text-white");
            navButton.classList.remove("border-gold-500", "hover:bg-gold-500", "text-gold-500");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.add("text-secondary", "dark:text-secondary");
                    anchors[j].classList.remove("text-secondary", "dark:text-gray-100");
                }
            }
        } else {
            // Remove the class when scrolling back up
            nav.classList.remove("bg-white/95", "dark:bg-gold-600");
            siteName.classList.add("dark:text-white");
            siteName.classList.remove("bg-[length:100%_2px]", "dark:text-secondary", "hover:text-gold-500");
            navButton.classList.remove("border-yellow-metal-700", "hover:bg-yellow-metal-700", "hover:text-gold-500", "text-yellow-metal-700", "hover:text-white");
            navButton.classList.add("border-gold-500", "hover:bg-gold-500", "text-gold-500");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.remove("text-secondary", "dark:text-secondary");
                    anchors[j].classList.add("text-secondary", "dark:text-gray-100");
                }
            }
        }
    });
});
