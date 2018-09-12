window.addEventListener('beforeload', function(){
    var bannerGraphic = document.querySelector('.banner__graphic-img');
    bannerGraphic.style.display = "none";
});

window.addEventListener("DOMContentLoaded", function(){
    /**
     * Content Loaded add code
     */

    var cta = document.querySelector('.banner button');

    if(cta === null || cta === undefined){
        return;
    }

    cta.addEventListener('click', function(){
        alert("The Catalogue is not yet implemented, but I am glad that the call to action worked.");
    });

    var animationHasRun = 0;

    var bannerGraphic = document.querySelector('.banner__graphic-img');
    var bannerHeading = document.querySelector('.banner__title h1');
    var bannerButton = document.querySelector('.banner__title button');

    if(bannerGraphic === null && bannerHeading === null && bannerButton === null){
        return;
    }


    // bannerGraphic.style.opacity = 0;
    bannerGraphic.style.display = "flex";


    setTimeout(function(){
        bannerGraphic.style.opacity = 1;        
    }, 1100);
        

    function addAnimations() {
        bannerGraphic.classList.add('fadeInRightSlightly');
        bannerHeading.classList.add('animated');
        bannerHeading.classList.add('slow');
        bannerHeading.classList.add('fadeInDown');
    
        bannerButton.classList.add('animated');
        // bannerButton.classList.add('delay-2s');
        bannerButton.classList.add('slow');
        bannerButton.classList.add('fadeInDown');
    };
    addAnimations();



    function removeAnimations() {
        bannerGraphic.classList.remove('fadeInRightSlightly');
        bannerHeading.classList.remove('animated');
        bannerHeading.classList.remove('slow');
        bannerHeading.classList.remove('fadeInDown');
    
        bannerButton.classList.remove('animated');
        // bannerButton.classList.remove('delay-2s');
        bannerButton.classList.remove('slow');
        bannerButton.classList.remove('fadeInDown');
    }
    
    setTimeout(function(){        
        removeAnimations();
    }, 2800);



});
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZ2FuaXNtcy8wMS1IZXJvQmFubmVycy9oZXJvYmFubmVyLmpzIiwiT3JnYW5pc21zL0hlYWRlci9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVsb2FkJywgZnVuY3Rpb24oKXtcclxuICAgIHZhciBiYW5uZXJHcmFwaGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lcl9fZ3JhcGhpYy1pbWcnKTtcclxuICAgIGJhbm5lckdyYXBoaWMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpe1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb250ZW50IExvYWRlZCBhZGQgY29kZVxyXG4gICAgICovXHJcblxyXG4gICAgdmFyIGN0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXIgYnV0dG9uJyk7XHJcblxyXG4gICAgaWYoY3RhID09PSBudWxsIHx8IGN0YSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY3RhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICBhbGVydChcIlRoZSBDYXRhbG9ndWUgaXMgbm90IHlldCBpbXBsZW1lbnRlZCwgYnV0IEkgYW0gZ2xhZCB0aGF0IHRoZSBjYWxsIHRvIGFjdGlvbiB3b3JrZWQuXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGFuaW1hdGlvbkhhc1J1biA9IDA7XHJcblxyXG4gICAgdmFyIGJhbm5lckdyYXBoaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyX19ncmFwaGljLWltZycpO1xyXG4gICAgdmFyIGJhbm5lckhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyX190aXRsZSBoMScpO1xyXG4gICAgdmFyIGJhbm5lckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX3RpdGxlIGJ1dHRvbicpO1xyXG5cclxuICAgIGlmKGJhbm5lckdyYXBoaWMgPT09IG51bGwgJiYgYmFubmVySGVhZGluZyA9PT0gbnVsbCAmJiBiYW5uZXJCdXR0b24gPT09IG51bGwpe1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gYmFubmVyR3JhcGhpYy5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIGJhbm5lckdyYXBoaWMuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG5cclxuXHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgYmFubmVyR3JhcGhpYy5zdHlsZS5vcGFjaXR5ID0gMTsgICAgICAgIFxyXG4gICAgfSwgMTEwMCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBiYW5uZXJHcmFwaGljLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJblJpZ2h0U2xpZ2h0bHknKTtcclxuICAgICAgICBiYW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyk7XHJcbiAgICAgICAgYmFubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKCdzbG93Jyk7XHJcbiAgICAgICAgYmFubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKCdmYWRlSW5Eb3duJyk7XHJcbiAgICBcclxuICAgICAgICBiYW5uZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcclxuICAgICAgICAvLyBiYW5uZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsYXktMnMnKTtcclxuICAgICAgICBiYW5uZXJCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2xvdycpO1xyXG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYWRlSW5Eb3duJyk7XHJcbiAgICB9O1xyXG4gICAgYWRkQW5pbWF0aW9ucygpO1xyXG5cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQW5pbWF0aW9ucygpIHtcclxuICAgICAgICBiYW5uZXJHcmFwaGljLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJblJpZ2h0U2xpZ2h0bHknKTtcclxuICAgICAgICBiYW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVkJyk7XHJcbiAgICAgICAgYmFubmVySGVhZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdzbG93Jyk7XHJcbiAgICAgICAgYmFubmVySGVhZGluZy5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW5Eb3duJyk7XHJcbiAgICBcclxuICAgICAgICBiYW5uZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcclxuICAgICAgICAvLyBiYW5uZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnZGVsYXktMnMnKTtcclxuICAgICAgICBiYW5uZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc2xvdycpO1xyXG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlSW5Eb3duJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgICAgICAgIFxyXG4gICAgICAgIHJlbW92ZUFuaW1hdGlvbnMoKTtcclxuICAgIH0sIDI4MDApO1xyXG5cclxuXHJcblxyXG59KTsiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFR1cm4gb24gZm9yIGRlYnVnZ2luIHNjcm9sbCBsb2NhdGlvbiBvbiB0aGUgd2luZG93XHJcbiAgICAgKi9cclxuICAgIC8vY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpXHJcblxyXG4gICAgdmFyIHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICB2YXIgaGVhZGVyRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xyXG5cclxuICAgIGlmKHBvc2l0aW9uID4gMjAwKXtcclxuICAgICAgICBoZWFkZXJFbGVtLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci0tc2Nyb2xsZWQnKTtcclxuICAgICAgICBoZWFkZXJFbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwJSlcIjtcclxuICAgIH0gZWxzZSBpZiAocG9zaXRpb24gPCAxMDAgKXtcclxuICAgICAgICBoZWFkZXJFbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlci0tc2Nyb2xsZWQnKTtcclxuICAgICAgICBoZWFkZXJFbGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgwJSlcIjtcclxuICAgIH0gZWxzZSBpZihwb3NpdGlvbiA+IDE2MCAmJiBwb3NpdGlvbiA8IDIwMCkge1xyXG4gICAgICAgIGhlYWRlckVsZW0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMDAlKVwiO1xyXG4gICAgfVxyXG59KTsiXX0=
