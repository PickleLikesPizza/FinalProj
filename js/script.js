const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    const textbox = item.closest('.textbox');
    const imageContainer = textbox.querySelector('.anim1-content');
    const displayImage = textbox.querySelector('.image');

    item.addEventListener('mouseenter', () => {
        const imgSrc = item.getAttribute('data-img');
        
        if (imgSrc && imgSrc.trim() !== "") {
            displayImage.src = imgSrc;
            imageContainer.classList.add('show'); // Triggers the fade-in
        } else {
            imageContainer.classList.remove('show');
        }
    });

    item.addEventListener('mouseleave', () => {
        imageContainer.classList.remove('show'); // Triggers the fade-out
    });
});