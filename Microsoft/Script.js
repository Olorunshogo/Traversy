// The button helps to get back to the top of the page
document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

// This block is for the slideshow
{
    let slideIndex =1;
    showSlides(slideIndex);

    // The next and previous controls
    function plusSlides (n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName('.showcase fade');
        let controls = document.getElementsByClassName('fas fa-chevron-left', 'fas fa-chevron-right');
        if (n > slides.length) {slideIndex = 1}
        if (n < slides.length) {slideIndex = slides.length}
    }
}