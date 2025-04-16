const emblaNode = document.querySelector('.embla');
if (emblaNode) {
  const embla = EmblaCarousel(emblaNode, { loop: true, align: 'center' });
}

const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

setInterval(() => {
  const now = new Date();
  const clock = document.getElementById('time');
  if (clock) {
    clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}, 1000);