const nextBtn = document.getElementById("next-btn"); 
const prevBtn = document.getElementById("previous-btn");
let container = document.getElementById("container");
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots");

let max = slides.length - 1;
let current = 0;

slides.forEach((v, i)=> {
	v.style.transform = `translateX(${i * 100}%)`;
});

nextBtn.addEventListener("click", () => {
	if(current === max) {
		current = 0;
		dots[current].classList.add("active");
		dots[current + 3].classList.remove("active");
	} else {
		current++;
		dots[current].classList.add("active");
		dots[current - 1].classList.remove("active");
	}
	slides.forEach((v, i) => {
		v.style.transform = `translateX( ${100 * (i - current) }% )`;
	});
});

prevBtn.addEventListener("click", () => {
	if(current === 0) {
		current = max;
		dots[current].classList.add("active");
		dots[current - 3].classList.remove("active");
	} else {
		current--;
		dots[current].classList.add("active");
		dots[current + 1].classList.remove("active");
	}
	slides.forEach((v, i) => {
		v.style.transform = `translateX( ${100 * (i - current) }% )`;
	});
});

const aboutBtn = document.getElementById("about-link");
const workBtn = document.getElementById("work-link");
const aboutDiv = document.querySelector(".about-div");
const mainDiv = document.querySelector(".main-div");

aboutBtn.addEventListener("click", () => {
	aboutDiv.classList.add("show");
	mainDiv.classList.add("hide");
});

workBtn.addEventListener("click", () => {
	aboutDiv.classList.remove("show");
	mainDiv.classList.remove("hide");
});

window.addEventListener('wheel', throttle(scrollDirection, 300));

function scrollDirection(e) {

	if(e.wheelDeltaY > 0) {

		if(current === max) {
			current = 0;
			dots[current].classList.add("active");
			dots[current + 3].classList.remove("active");
		} else {
			current++;
			dots[current].classList.add("active");
			dots[current - 1].classList.remove("active");
		}
		slides.forEach((v, i) => {
			v.style.transform = `translateX( ${100 * (i - current) }% )`;
		});

	} else {

		if(current === 0) {
			current = max;
			dots[current].classList.add("active");
			dots[current - 3].classList.remove("active");
		} else {
			current--;
			dots[current].classList.add("active");
			dots[current + 1].classList.remove("active");
		}
		slides.forEach((v, i) => {
			v.style.transform = `translateX( ${100 * (i - current) }% )`;
		});
		
	}

	e.stopImmediatePropagation();
};

function throttle(func, interval) {
	let lastCall = 0;
	return function() {
		const now = Date.now();
		if (lastCall + interval < now) {
			lastCall = now;
			return func.apply(this, arguments);
		}
	};
}

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
	return evt.touches || evt.originalEvent.touches; 
}

function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0];                                      
	xDown = firstTouch.clientX;                                      
	yDown = firstTouch.clientY;
};                                                

function handleTouchMove(evt) {
	if ( ! xDown || ! yDown ) {
		return;
	}

	var xUp = evt.touches[0].clientX;                                    
	var yUp = evt.touches[0].clientY;

	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;
	
	if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) { 
		if ( xDiff > 0 ) {

			if(current === max) {
				current = 0;
				dots[current].classList.add("active");
				dots[current + 3].classList.remove("active");
			} else {
				current++;
				dots[current].classList.add("active");
				dots[current - 1].classList.remove("active");
			}
			slides.forEach((v, i) => {
				v.style.transform = `translateX( ${100 * (i - current) }% )`;
			});
		} else {

			if(current === 0) {
				current = max;
				dots[current].classList.add("active");
				dots[current - 3].classList.remove("active");
			} else {
				current--;
				dots[current].classList.add("active");
				dots[current + 1].classList.remove("active");
			}
			slides.forEach((v, i) => {
				v.style.transform = `translateX( ${100 * (i - current) }% )`;
			});
		}                       
	}

	xDown = null;
	yDown = null;                                             
};