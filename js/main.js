/* scripts.js */
$(document).ready(function(){

        // Function to generate bubbles
        function createBubble() {
            var size = Math.random() * 80 + 20; // Bubbles size range
            var bubble = $('<span class="bubble"></span>').css({
                width: size + 'px',
                height: size + 'px',
                left: Math.random() * 100 + 'vw',
                top: 0
            });
    
            $('body').append(bubble);
    
            // Remove bubble after animation ends to free up memory
            setTimeout(function(){
                bubble.remove();
            }, 10000);
        }
            setInterval(createBubble, 200);

    $("#contactForm").on("submit", function(event){
        event.preventDefault();
        alert("Form submitted!");
    });
    var previousScroll = 0;
 
    $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();
        
        if (currentScroll > previousScroll){
            // Scroll Down
            $('header').css('top', '-100px'); // Adjust value based on header height
        } else {
            // Scroll Up
            $('header').css('top', '0');
        }
        
        previousScroll = currentScroll;
    });
});

