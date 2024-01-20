const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('wsf-color-theme') === 'dark' || (!('wsf-color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('wsf-color-theme')) {
        if (localStorage.getItem('wsf-color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('wsf-color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('wsf-color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('wsf-color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('wsf-color-theme', 'dark');
        }
    }

});
