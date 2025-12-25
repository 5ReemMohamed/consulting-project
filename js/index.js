const navbar = document.getElementById('mainNavbar');
const navbarOffset = navbar.offsetTop;

function handleScroll() {
  if (window.pageYOffset > navbarOffset + 50) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }

  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', handleScroll);

const scrollTopBtn = document.getElementById('scrollTopBtn');
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const counters = document.querySelectorAll('.stat-number');
const speed = 80;


counters.forEach(counter => {
const updateCount = () => {
const target = +counter.getAttribute('data-target');
const count = +counter.innerText.replace('+', '');
const inc = Math.ceil(target / speed);


if (count < target) {
counter.innerHTML = `${count + inc}<span>+</span>`;
setTimeout(updateCount, 20);
} else {
counter.innerHTML = `${target}<span>+</span>`;
}
};


updateCount();
});

var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 800,
    rtl: true,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});
   AOS.init({
    once: false,    // allow repeating animation
    mirror: true,   // animate again when scrolling up
  });