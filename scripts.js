let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = '-150px'; // Hides the header when scrolling down
    } else {
        // Scroll up
        header.style.top = '0'; // Shows the header when scrolling up
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

let bgCanvas = document.getElementById('bakgrunn');
window.onload = function () {
    bgCanvas.patternizer({
        stripes: [
            {
                color: '#1a4d2e',
                rotation: 45,
                opacity: 75,
                mode: 'normal',
                width: 113,
                gap: 40,
                offset: 0
            },
            {
                color: '#4F6F52',
                rotation: 45,
                opacity: 80,
                mode: 'normal',
                width: 226,
                gap: 55,
                offset: 131
            },
            {
                color: '#000000',
                rotation: 45,
                opacity: 75,
                mode: 'normal',
                width: 50,
                gap: 50,
                offset: 101
            }
        ],
        bg: '#4f6f52'
    });

}

// resize the canvas to the window size
function onResize() {

    // number of pixels of extra canvas drawn
    var buffer = 100;

    // if extra canvas size is less than the buffer amount
    if (bgCanvas.width - window.innerWidth < buffer ||
        bgCanvas.height - window.innerHeight < buffer) {

        // resize the canvas to window plus double the buffer
        bgCanvas.width = window.innerWidth + (buffer * 2);
        bgCanvas.height = window.innerHeight + (buffer * 2);

        render();
    }

}

function init() {
    onResize();
    // create a listener for resize
    // cowboy's throttle plugin keeps this event from running hog wild
    window.addEventListener('resize', Cowboy.throttle(200, onResize), false);
}

init();
