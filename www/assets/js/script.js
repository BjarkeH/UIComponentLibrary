window.addEventListener('beforeload', function(){
    var bannerGraphic = document.querySelector('.banner__graphic-img');
    bannerGraphic.style.display = "none";
});

window.addEventListener("DOMContentLoaded", function(){
    /**
     * Content Loaded add code
     */

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZ2FuaXNtcy9IZXJvQmFubmVyL2hlcm9iYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZWxvYWQnLCBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGJhbm5lckdyYXBoaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyX19ncmFwaGljLWltZycpO1xyXG4gICAgYmFubmVyR3JhcGhpYy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAvKipcclxuICAgICAqIENvbnRlbnQgTG9hZGVkIGFkZCBjb2RlXHJcbiAgICAgKi9cclxuXHJcbiAgICB2YXIgYW5pbWF0aW9uSGFzUnVuID0gMDtcclxuXHJcbiAgICB2YXIgYmFubmVyR3JhcGhpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX2dyYXBoaWMtaW1nJyk7XHJcbiAgICB2YXIgYmFubmVySGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX3RpdGxlIGgxJyk7XHJcbiAgICB2YXIgYmFubmVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lcl9fdGl0bGUgYnV0dG9uJyk7XHJcblxyXG4gICAgaWYoYmFubmVyR3JhcGhpYyA9PT0gbnVsbCAmJiBiYW5uZXJIZWFkaW5nID09PSBudWxsICYmIGJhbm5lckJ1dHRvbiA9PT0gbnVsbCl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBiYW5uZXJHcmFwaGljLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgYmFubmVyR3JhcGhpYy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcblxyXG5cclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICBiYW5uZXJHcmFwaGljLnN0eWxlLm9wYWNpdHkgPSAxOyAgICAgICAgXHJcbiAgICB9LCAxMTAwKTtcclxuICAgICAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBhZGRBbmltYXRpb25zKCkge1xyXG4gICAgICAgIGJhbm5lckdyYXBoaWMuY2xhc3NMaXN0LmFkZCgnZmFkZUluUmlnaHRTbGlnaHRseScpO1xyXG4gICAgICAgIGJhbm5lckhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKTtcclxuICAgICAgICBiYW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3Nsb3cnKTtcclxuICAgICAgICBiYW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkRvd24nKTtcclxuICAgIFxyXG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZCcpO1xyXG4gICAgICAgIC8vIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxheS0ycycpO1xyXG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzbG93Jyk7XHJcbiAgICAgICAgYmFubmVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2ZhZGVJbkRvd24nKTtcclxuICAgIH07XHJcbiAgICBhZGRBbmltYXRpb25zKCk7XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVBbmltYXRpb25zKCkge1xyXG4gICAgICAgIGJhbm5lckdyYXBoaWMuY2xhc3NMaXN0LnJlbW92ZSgnZmFkZUluUmlnaHRTbGlnaHRseScpO1xyXG4gICAgICAgIGJhbm5lckhlYWRpbmcuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZWQnKTtcclxuICAgICAgICBiYW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3Nsb3cnKTtcclxuICAgICAgICBiYW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbkRvd24nKTtcclxuICAgIFxyXG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlZCcpO1xyXG4gICAgICAgIC8vIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdkZWxheS0ycycpO1xyXG4gICAgICAgIGJhbm5lckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzbG93Jyk7XHJcbiAgICAgICAgYmFubmVyQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhZGVJbkRvd24nKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpeyAgICAgICAgXHJcbiAgICAgICAgcmVtb3ZlQW5pbWF0aW9ucygpO1xyXG4gICAgfSwgMjgwMCk7XHJcblxyXG5cclxuXHJcbn0pOyJdfQ==
