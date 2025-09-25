document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'cursor-tooltip';
    tooltip.textContent = 'Click on me for more info!';
    document.body.appendChild(tooltip);

    const items = document.querySelectorAll('.work-item, .project-item');

    items.forEach(item => {
        item.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
        });

        item.addEventListener('mousemove', (e) => {
            tooltip.style.left = `${e.pageX + 15}px`;
            tooltip.style.top = `${e.pageY - 10}px`;
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});
