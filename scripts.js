


document.addEventListener('DOMContentLoaded', function() {
// When the event DOMContentLoaded occurs, it is safe to access the DOM
    window.addEventListener('scroll', stickHeader);

    const navBar = document.querySelector('#myHeader');
    const stick = navBar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position 
    function stickHeader() {
        if (window.pageYOffset >= stick) {
        navBar.classList.add("sticky");
        } else {
        navBar.classList.remove("sticky");
        }
    }
});


// When the user scrolls the page, execute myFunction 
