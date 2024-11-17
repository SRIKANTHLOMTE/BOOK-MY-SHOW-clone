document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        type: "loop",
        perPage: 1,
        gap: "20px",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        pagination: false,
        arrows: true,
    }).mount();
});
