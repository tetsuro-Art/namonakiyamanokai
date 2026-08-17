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
    cost video = document.getElementById('.intro-video');
    video.addEventLitener('timeupdate',function onFirstFrame(){
    if(video.currentTime>0) {
    console.log('kirakira-start')

    if (!video) return;    
    video.onloadedmetadata = () => {
        const duration = video.duration * 1000; // ミリ秒に変換
        setTimeout(() => {
            window.location.href = "index.html";
        }, duration);
    };
});
 

