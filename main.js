const emblaNode = document.querySelector('.carousel');
const embla = EmblaCarousel(emblaNode, { loop: true, align: 'center' });

// Optional: update clock
setInterval(() => {
  const now = new Date();
  document.getElementById('time').textContent =
    now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}, 1000);
