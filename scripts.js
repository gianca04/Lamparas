document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    const showItem = index => {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    };

    document.querySelector('.next').addEventListener('click', showNext);
    document.querySelector('.prev').addEventListener('click', showPrev);

    showItem(currentIndex);
});
