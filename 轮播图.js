// JavaScript Document
document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel img');
    const totalSlides = slides.length;

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    }, 3000); // 切换间隔时间为3秒
});
