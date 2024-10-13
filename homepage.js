const tagline = "Drive the Future, Today.";
const taglineElement = document.querySelector(".tagline-text");
let index = 0;
let isDeleting = false;

function typeAnimation() {
    if (!isDeleting && index <= tagline.length) {
        taglineElement.textContent = tagline.slice(0, index);
        index++;
    } else if (isDeleting && index >= 0) {
        taglineElement.textContent = tagline.slice(0, index);
        index--;
    }

    if (index === tagline.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 2000); 
    }

    if (index === 0) {
        isDeleting = false;
    }

    const delay = isDeleting ? 50 : 150; 
    setTimeout(typeAnimation, delay);
}


typeAnimation();
