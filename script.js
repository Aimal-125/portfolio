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