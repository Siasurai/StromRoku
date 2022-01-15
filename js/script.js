//navbar
var navbar = document.querySelector('nav');

window.addEventListener("scroll", function (){
  navbar.classList.toggle('nav_sticky', window.scrollY > 0)
})

// slider

var slideIndex = 0;
var left = document.querySelector('.arrow_left');
var right = document.querySelector ('.arrow_right');
showSlides(slideIndex);

left.addEventListener('click', function() {
  minusSlide();
});
right.addEventListener('click', function() {
  plusSlide();
});

function minusSlide(){
	showSlides(currentSlide() - 1);
}
function plusSlide() {
	showSlides(currentSlide() + 1);
}
function currentSlide() {
	var slides = document.querySelectorAll(".slider__card");
	let i;
	slides.forEach(function (slide, idx){
		if (slide.style.display == "flex"){
			console.log(idx + 1)
			i = idx;
		}
	})
	return i;
}
function showSlides (n) {
	var i;
	var slides = document.querySelectorAll(".slider__card");

	if (n > slides.length - 1) {
		n=0
	}
	if (n < 0) {
		n=slides.length - 1
	}
	for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  	}
  slides[n].style.display = "flex";
}

// toggle

var mounth = document.querySelector('.support__tarrif_mounth');
var once = document.querySelector('.support__tarrif_once');
var indicator = document.querySelector('.indicator');

once.onclick = function(){
  indicator.classList.add('indicator_active');
  once.style.color = "#fff"
  mounth.style.color = "#29323d"
}
mounth.onclick = function(){
  indicator.classList.remove('indicator_active');
  once.style.color = "#29323d"
  mounth.style.color = "#fff"
}
