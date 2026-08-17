document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector('.intro-video');
    if (!video) return;

    video.onloadedmetadata = () => {
        const duration = video.duration * 1000; // ミリ秒に変換
        setTimeout(() => {
            window.location.href = "index.html";
        }, duration);
    };
});

