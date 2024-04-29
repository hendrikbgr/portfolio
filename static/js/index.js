document.addEventListener('DOMContentLoaded', function() {
    var images = [
        'https://images.pexels.com/photos/730231/pexels-photo-730231.jpeg',
        'https://images.pexels.com/photos/732852/pexels-photo-732852.jpeg',
        'https://images.pexels.com/photos/1081849/pexels-photo-1081849.jpeg',
        'https://images.pexels.com/photos/1081851/pexels-photo-1081851.jpeg'
        // Add more image URLs as needed
    ];

    // Select a random image from the array
    var image = document.getElementById('fadeImage');
    image.src = images[Math.floor(Math.random() * images.length)];

    // Random rotation from -15 to +15 degrees
    var rotationDegrees = Math.floor(Math.random() * 11) - 5; // Generates a number from -5 to +5
    image.style.transform = `rotate(${rotationDegrees}deg)`;

    // Add scroll event listener for fading effect
    window.addEventListener('scroll', function() {
        var windowHeight = window.innerHeight;
        var scrollY = window.scrollY || window.pageYOffset;

        var fadeStart = 100; // Start fading after 100px of scroll
        var fadeUntil = windowHeight; // Completely faded at the window height

        var opacity = 1;
        if (scrollY <= fadeStart) {
            opacity = 1;
        } else if (scrollY <= fadeUntil) {
            opacity = 1 - (scrollY - fadeStart) / (fadeUntil - fadeStart);
        } else {
            opacity = 0;
        }

        image.style.opacity = opacity;
    });
});