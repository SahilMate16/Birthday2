document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('reveal-btn');
  const surpriseMessage = document.getElementById('surprise-message');
  const musicBtn = document.getElementById('music-btn');
  const muteBtn = document.getElementById('mute-btn');
  const volumeSlider = document.getElementById('volume-slider');
  const backgroundMusic = document.getElementById('background-music');
  const images = document.querySelectorAll('.personal-img');
  const secretMessages = document.querySelectorAll('.secret-message');

  // Balloon animation setup
  const canvas = document.getElementById('balloons');
  const ctx = canvas.getContext('2d');
  let balloons = [];

  // Reveal surprise message
  revealBtn.addEventListener('click', () => {
    surpriseMessage.classList.toggle('hidden');
  });

  // Play or pause music
  musicBtn.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicBtn.textContent = '⏸️ Pause Music';
    } else {
      backgroundMusic.pause();
      musicBtn.textContent = '🎵 Play Music';
    }
  });

  // Mute and unmute music
  muteBtn.addEventListener('click', () => {
    backgroundMusic.muted = !backgroundMusic.muted;
    muteBtn.textContent = backgroundMusic.muted ? '🔇 Unmute' : '🔊 Mute';
  });

  // Adjust music volume
  volumeSlider.addEventListener('input', (e) => {
    backgroundMusic.volume = e.target.value;
  });

  // Toggle secret messages when images are clicked
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      secretMessages[index].classList.toggle('hidden');
    });
  });

  // Balloon animation
  function createBalloon() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 100,
      size: Math.random() * 30 + 20,
      speed: Math.random() * 2 + 1,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    };
  }

  function updateBalloons() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balloons.forEach((balloon, i) => {
      balloon.y -= balloon.speed;
      if (balloon.y + balloon.size < 0) {
        balloons[i] = createBalloon();
      }
      ctx.beginPath();
      ctx.arc(balloon.x, balloon.y, balloon.size, 0, Math.PI * 2);
      ctx.fillStyle = balloon.color;
      ctx.fill();
    });
    requestAnimationFrame(updateBalloons);
  }

  function initializeBalloons() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    balloons = Array.from({ length: 20 }, createBalloon);
    updateBalloons();
  }

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  initializeBalloons();
});
