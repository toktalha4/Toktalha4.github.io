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
    const note = document.getElementById('noteInput')?.value?.trim() || '-';

    const message = `Merhaba, web sitesinden ulaşıyorum.%0AAd Soyad: ${encodeURIComponent(name)}%0ATelefon: ${encodeURIComponent(phone)}%0ANot: ${encodeURIComponent(note)}`;
    const url = `https://wa.me/905000000000?text=${message}`;
    window.open(url, '_blank');
  });
}
