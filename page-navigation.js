document.addEventListener('DOMContentLoaded', function() {
    // Handle clicks on work items - redirect to work.html
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        item.addEventListener('click', function() {
            window.location.href = 'work.html';
        });
    });

    // Handle clicks on project items - redirect to play.html
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            window.location.href = 'play.html';
        });
    });
});
