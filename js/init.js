

const swiperTitle = new Swiper('.title-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 /* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    closeNav(); 
  });
});


const scrollToTopButton = document.getElementById('scrollToTop');


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});


scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', 
        block: 'start', 
      });
    }
  });
});
document.querySelector('.lang__select').addEventListener('change', function () {
  const selectedLang = this.value; 
  const currentUrl = window.location.origin;
  const currentPath = window.location.pathname;

  // Розбиваємо поточний шлях на частини
  const pathParts = currentPath.split('/').filter(part => part); // Очищаємо порожні елементи

  
  if (['en', 'uk', 'ru', 'pl', 'ro', 'hu'].includes(pathParts[0])) {
    pathParts.shift(); 
  }

  
  if (selectedLang === 'uk') {
    const newUrl = `${currentUrl}/${pathParts.join('/')}`; 
    window.location.href = newUrl;
  } else {
   
    const newUrl = `${currentUrl}/${selectedLang}/${pathParts.join('/')}`;
    window.location.href = newUrl;
  }
});