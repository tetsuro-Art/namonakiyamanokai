const items = document.querySelectorAll('.gallery-item');

for (let i = 0; i < items.length; i++) {
    const keyframes = [
        { opacity: 0, transform: 'translateY(50px)' },
        { opacity: 1, transform: 'translateY(0)' }
    ];

    const options = {
        duration: 600,
        delay: i * 1500,
        fill: 'forwards'
    };

    items[i].animate(keyframes, options);
}
