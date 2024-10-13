// JavaScript to rotate the images on click
const images = document.querySelectorAll('.rotating-image');
images.forEach((image) => {
    let rotation = 0;

    image.addEventListener('click', () => {
        rotation += 360; // Increase the rotation by 360 degrees
        image.style.transform = `rotate(${rotation}deg) rotateY(20deg) rotateX(20deg)`; // Apply the 3D rotation
    });
});
