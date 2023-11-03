const backToTop = () => {
    if (window.scrollY > 20) 
        $("#back-to-top").css("visibility","visible");
    if (window.scrollY <= 19) 
        $("#back-to-top").css("visibility","hidden");
    }
window.addEventListener('scroll', function () {
backToTop()
});

