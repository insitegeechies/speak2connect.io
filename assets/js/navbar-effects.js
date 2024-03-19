document.addEventListener("DOMContentLoaded", function() {
    // Get the navigation element
    const nav = document.getElementById("navigation");
    const siteName = document.getElementById("site_name");
    const menuList = document.getElementsByClassName("menu-list");
    const navButton = document.getElementById("navbar-button");
    const navSVG = document.getElementById("navSVG");


    // Get the initial position of the navigation
    const navOffset = nav.offsetTop;

    // Add scroll event listener
    window.addEventListener("scroll", function() {
        // Check if the current scroll position is below the initial position of the navigation
        if (window.scrollY > navOffset) {
            // Add a class when scrolling down
            nav.classList.add("bg-white/95");
            siteName.classList.add("bg-[length:100%_2px]", "text-flushMahogany-700");
            siteName.classList.remove("text-white");
            navButton.classList.add("border-flushMahogany-700", "hover:bg-flushMahogany-700", "hover:text-white", "text-flushMahogany-700", "hover:text-flushMahogany-100");
            navButton.classList.remove("border-white", "hover:bg-flushMahogany-500", "text-white");
            navSVG.classList.remove("text-white");
            navSVG.classList.add("text-flushMahogany-950");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.add("text-secondary");
                    anchors[j].classList.remove("text-white");
                }
            }
        } else {
            // Remove the class when scrolling back up
            nav.classList.remove("bg-white/95");
            siteName.classList.remove("bg-[length:100%_2px]", "text-flushMahogany-700");
            siteName.classList.add("text-white");
            navButton.classList.remove("border-flushMahogany-700", "hover:bg-flushMahogany-700", "hover:text-white", "text-flushMahogany-500", "hover:text-flushMahogany-100");
            navButton.classList.add("border-white", "hover:bg-flushMahogany-500", "text-white");
            navSVG.classList.add("text-white");
            navSVG.classList.remove("text-flushMahogany-950");
            for(let i = 0; i < menuList.length; i++) {
                const anchors = menuList[i].getElementsByTagName("a");
                for (let j = 0; j < anchors.length; j++) {
                    anchors[j].classList.remove("text-secondary");
                    anchors[j].classList.add("text-white");
                }
            }
        }
    });
});
