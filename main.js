// Меню бургер
$(document).ready(function() {
	$('.nav__icon').click(function(event) {
		$('.nav__icon,.nav__bar').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$('.nav__bar').click(function(){
    $('.nav__icon, .nav__bar').removeClass('active');
    $('body').removeClass('lock');
});



//Плавающая шапка
window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 190);
});


//попапы

$('.open-popup').click(function(e) {
  e.preventDefault();
  $('.popup-bg').fadeIn(800);
  $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
  $('.popup-bg').fadeOut(800);
  $('html').removeClass('no-scroll');
});

$('.popup-bg').click(function (e) {
  if (!$(e.target).closest(".popup").length) {
    $('.popup-bg').fadeOut(600);
  }
});

//медленный скролл
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}
