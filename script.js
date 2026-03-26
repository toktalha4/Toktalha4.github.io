const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

const sendWhatsapp = document.getElementById('sendWhatsapp');
if (sendWhatsapp) {
  sendWhatsapp.addEventListener('click', () => {
    const name = document.getElementById('nameInput')?.value?.trim() || '-';
    const phone = document.getElementById('phoneInput')?.value?.trim() || '-';
    const service = document.getElementById('serviceInput')?.value?.trim() || '-';
    const note = document.getElementById('noteInput')?.value?.trim() || '-';

    const message = [
      'Merhaba, web sitesinden premium randevu talebi bırakıyorum.',
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `İlgilendiğim Hizmet: ${service}`,
      `Not: ${note}`
    ].join('\n');

    const url = `https://wa.me/905000000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealItems.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach(item => observer.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}
