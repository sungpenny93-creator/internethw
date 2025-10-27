// 打字效果
const typingText = document.getElementById('typing-text');
const text = "🏙️ 歡迎來到我的興趣網站";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}

window.addEventListener('load', () => {
  typeEffect();
});

// 滾動進場動畫
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-item, .slide-in, .city-section').forEach(el => observer.observe(el));

// Chart.js 圖表
const ctx = document.getElementById('myChart');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['音樂', '電影', '運動', '旅遊', '閱讀'],
      datasets: [{
        label: '我對各興趣的喜好程度',
        data: [8, 7, 6, 9, 5],
        borderWidth: 1,
        backgroundColor: ['#ff9999', '#99ccff', '#ffcc99', '#ccffcc', '#c299ff']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: { y: { beginAtZero: true } }
    }
  });
}
