const backToTop = () => {
    if (window.scrollY > 100) 
        $("#back-to-top").css("visibility","visible");
    if (window.scrollY <= 100) 
        $("#back-to-top").css("visibility","hidden");
    }
window.addEventListener('scroll', function () {
backToTop()
});