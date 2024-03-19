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
            nav.classList.add("bg-white/95", "dark:bg-silver-600");
            siteName.classList.remove( "dark:text-white");
            siteName.classList.add("bg-[length:100%_2px]", "dark:text-flushMahogany-100");
            navButton.classList.add("border-flushMahogany-700", "hover:bg-flushMahogany-700", "hover:text-white", "text-flushMahogany-700", "hover:text-flushMahogany-100");
            navButton.classList.remove("border-flushMahogany-500", "hover:bg-flushMahogany-500", "text-flushMahogany-500");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.add("text-secondary", "dark:text-shark-100");
                    anchors[j].classList.remove("text-secondary", "dark:text-gray-100");
                }
            }
        } else {
            // Remove the class when scrolling back up
            nav.classList.remove("bg-white/95", "dark:bg-silver-600");
            siteName.classList.add("dark:text-white");
            siteName.classList.remove("bg-[length:100%_2px]", "dark:text-secondary", "hover:text-gold-500");
            navButton.classList.remove("border-flushMahogany-700", "hover:bg-flushMahogany-700", "hover:text-white", "text-flushMahogany-500", "hover:text-flushMahogany-100");
            navButton.classList.add("border-flushMahogany-500", "hover:bg-flushMahogany-500", "text-flushMahogany-500");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.remove("text-secondary", "dark:text-shark-100");
                    anchors[j].classList.add("text-secondary", "dark:text-gray-100");
                }
            }
        }
    });
});
