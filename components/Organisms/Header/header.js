window.addEventListener('scroll', function(){

    /**
     * Turn on for debuggin scroll location on the window
     */
    //console.log(window.scrollY)

    var position = window.scrollY;
    var headerElem = document.querySelector('header');

    if(position > 200){
        headerElem.classList.add('header--scrolled');
        headerElem.style.transform = "translateY(0%)";
    } else if (position < 100 ){
        headerElem.classList.remove('header--scrolled');
        headerElem.style.transform = "translateY(0%)";
    } else if(position > 160 && position < 200) {
        headerElem.style.transform = "translateY(-100%)";
    }
});