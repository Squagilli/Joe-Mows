window.addEventListener('DOMContentLoaded', function() {
// When the event DOMContentLoaded occurs, it is safe to access the DOM
window.addEventListener('scroll', stickHeader());
// Get the navbar
const navbar = document.querySelector("#myHeader");
  
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position 

});
// When the user scrolls the page, execute myFunction 
function stickHeader() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    } else {
    navbar.classList.remove("sticky");
    }
}