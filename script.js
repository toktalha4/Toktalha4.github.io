const WHATSAPP_NUMBER = '905377072206';

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const siteHeader = document.querySelector('.site-header');

if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

window.addEventListener('scroll', () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle('scrolled', window.scrollY > 12);
});

document.querySelectorAll('.wa-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const message = button.getAttribute('data-wa-message') || 'Merhaba, bilgi almak istiyorum.';
    openWhatsApp(message);
  });
});

const sendWhatsapp = document.getElementById('sendWhatsapp');
if (sendWhatsapp) {
  sendWhatsapp.addEventListener('click', () => {
    const name = document.getElementById('nameInput')?.value?.trim() || '-';
    const phone = document.getElementById('phoneInput')?.value?.trim() || '-';
    const service = document.getElementById('serviceInput')?.value?.trim() || '-';
    const time = document.getElementById('timeInput')?.value?.trim() || '-';
    const note = document.getElementById('noteInput')?.value?.trim() || '-';

    const message = [
      'Merhaba, Hair Time Protez web sitesi üzerinden bilgi ve randevu talebi bırakıyorum.',
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `İlgilendiğim Hizmet: ${service}`,
      `Ulaşım Zamanı: ${time}`,
      `Not: ${note}`
    ].join('\n');

    openWhatsApp(message);
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

const compareRange = document.getElementById('compareRange');
const compareOverlay = document.getElementById('compareOverlay');
const compareHandle = document.getElementById('compareHandle');

function updateCompare(value) {
  const safeValue = `${value}%`;
  if (compareOverlay) compareOverlay.style.width = safeValue;
  if (compareHandle) compareHandle.style.left = safeValue;
}

if (compareRange) {
  updateCompare(compareRange.value);
  compareRange.addEventListener('input', (event) => {
    updateCompare(event.target.value);
  });
}
