const hamburger = document.querySelector(".hamburger"),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skill__progress-percent'),
      lines = document.querySelectorAll('.skill__progress-index span'); 
      
percents.forEach((i, idx) => {
    lines[idx].style.width = i.innerHTML
});  