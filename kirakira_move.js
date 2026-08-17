document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".intro-video");
    
    if (!video) return;
    
    video.preload = "auto";
    
    video.addEventListener("canplaythrough", () => {
        video.play();
    });
    
    video.addEventListener("ended", () => {
        location.href = "index.html";
    });
});
