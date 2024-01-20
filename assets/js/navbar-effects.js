document.addEventListener("DOMContentLoaded", function() {
    // Get the navigation element
    const nav = document.getElementById("navigation");
    const siteName = document.getElementById("site_name");
    const menuList = document.getElementsByClassName("menu-list");


    // Get the initial position of the navigation
    const navOffset = nav.offsetTop;

    // Add scroll event listener
    window.addEventListener("scroll", function() {
        // Check if the current scroll position is below the initial position of the navigation
        if (window.scrollY > navOffset) {
            // Add a class when scrolling down
            nav.classList.add("bg-white/95", "dark:bg-flushMahogany-950/95");
            siteName.classList.add("bg-[length:100%_2px]");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.add("text-flushMahogany-950", "dark:text-flushMahogany-500");
                    anchors[j].classList.remove("text-flushMahogany-600", "dark:text-gray-100");
                }
            }
        } else {
            // Remove the class when scrolling back up
            nav.classList.remove("bg-white/95", "dark:bg-flushMahogany-950/95");
            siteName.classList.remove("bg-[length:100%_2px]");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.remove("text-flushMahogany-950", "dark:text-flushMahogany-500");
                    anchors[j].classList.add("text-flushMahogany-600", "dark:text-gray-100");
                }
            }
        }
    });
});
