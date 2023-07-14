document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('change', function () {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            toggleTheme('light')
        } else {
            body.classList.add('dark-theme');
            toggleTheme('dark')
        }
    });

    const coverImage = document.querySelector('.cover-image');

    coverImage.addEventListener('load', () => {
        const loadWrapper = document.querySelector('.load-wrapper');
        loadWrapper.classList.add('loaded');
    });

    // Function to set the theme query parameter in the URL
    function setThemeQueryParam(theme) {
        const url = new URL(window.location.href);
        if (theme === 'dark') {
            url.searchParams.set('theme', 'dark');
        } else {
            url.searchParams.delete('theme');
        }
        const newUrl = url.href.replace(`${url.origin}${url.pathname}`, '');
        history.replaceState(null, '', `${url.origin}${url.pathname}${newUrl}`);
    }


    // Function to toggle the theme class on the body element
    function toggleTheme(theme) {
        const body = document.body;
        body.classList.remove('dark-theme');
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            setThemeQueryParam('dark');
            updateDownloadButtonHref('dark');
        } else {
            setThemeQueryParam('light');
            updateDownloadButtonHref('light');
        }
    }

    // Function to check if the dark theme query parameter exists
    function checkDarkThemeQueryParam() {
        const urlParams = new URLSearchParams(window.location.search);
        const theme = urlParams.get('theme');
        if (theme === 'dark') {
            toggleTheme('dark');
        }
    }

    // Call the function on page load
    checkDarkThemeQueryParam();

    function updateDownloadButtonHref(theme) {
        const downloadButton = document.querySelector('.download-button');
        const file = theme === 'dark' ? 'assets/nitesh_daga_resume_darkmode.pdf' : 'assets/nitesh_daga_resume_lightmode.pdf';
        downloadButton.setAttribute('href', `${file}`);
    }
});