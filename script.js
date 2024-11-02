const boxes = document.querySelectorAll(".box");
// console.log(boxes);
window.addEventListener("scroll", showBoxes);

function showBoxes() {
	const triggerBottom = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		const boxTop = box.getBoundingClientRect().top;
		if (triggerBottom > boxTop) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
}

showBoxes();

// console.log(window.innerHeight);
// const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
// 	console.log(box.getBoundingClientRect().top);
// });

// window.addEventListener("scroll", show);

// show();

// function show() {
// 	boxes.forEach((box) => {
// 		if (box.getBoundingClientRect().top < (window.innerHeight * 3) / 4) {
// 			box.classList.add("show");
// 		} else {
// 			box.classList.remove("show");
// 		}
// 	});
// }
