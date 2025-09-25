document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    if (slides.length > 0) {
        showSlide(slideIndex);
        
        // Set up event listeners for navigation buttons
        document.querySelectorAll('.prev').forEach(button => {
            button.addEventListener('click', function() {
                changeSlide(-1);
            });
        });
        
        document.querySelectorAll('.next').forEach(button => {
            button.addEventListener('click', function() {
                changeSlide(1);
            });
        });
        
        // Add keyboard navigation
        document.addEventListener('keydown', function(event) {
            // Only navigate if we're on a page with slides
            if (slides.length === 0) return;
            
            switch(event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    changeSlide(-1);
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    changeSlide(1);
                    break;
            }
        });
    }
    
    // Function to show the current slide
    function showSlide(index) {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Display the current slide
        slides[index].style.display = "block";
        
        // Update button visibility based on current slide
        updateNavigationButtons();
    }
    
    // Function to change slides
    function changeSlide(direction) {
        slideIndex += direction;
        
        // Handle wrap-around
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        } else if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        
        showSlide(slideIndex);
    }
    
    // Function to update navigation button visibility/opacity
    function updateNavigationButtons() {
        const prevButtons = document.querySelectorAll('.prev');
        const nextButtons = document.querySelectorAll('.next');
        
        // Optional: Add visual feedback for first/last slides
        prevButtons.forEach(btn => {
            btn.style.opacity = slideIndex === 0 ? '0.5' : '1';
        });
        
        nextButtons.forEach(btn => {
            btn.style.opacity = slideIndex === slides.length - 1 ? '0.5' : '1';
        });
    }
});
