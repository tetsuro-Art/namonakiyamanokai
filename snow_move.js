const containerSnow = document.querySelector('#particle-container');

const createParticle = () => {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // 雪の初期位置（画面上から）
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `-20px`;

    // 雪のサイズをランダム化（自然さアップ）
    const size = 5 + Math.random() * 10; // 5〜15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // 落下速度をランダム化（自然な雪）
    const fallDuration = 3 + Math.random() * 4; // 3〜7秒
    particle.style.animationDuration = `${fallDuration}s`;

    // 風で左右に揺れるアニメーションを追加
    const sway = Math.random() * 30; // 左右に最大30px揺れる
    particle.style.animationTimingFunction = "linear";
    particle.style.setProperty('--sway', `${sway}px`);

    containerSnow.appendChild(particle);

    // 雪が消えるタイミング
    setTimeout(() => {
        particle.remove();
    }, fallDuration * 1000);
}

// 200msごとに雪を生成
setInterval(createParticle, 200);
