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