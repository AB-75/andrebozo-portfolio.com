window.addEventListener('DOMContentLoaded', () => {
	const head = document.querySelector('header');
	const startColor = [25, 25, 25, 0]; 
	const endColor = [30, 30, 30, 1]; 
	const height = 500;
  
	window.addEventListener('scroll', () => {
	  const scrollPosition = window.scrollY;
	  const percentage = Math.min(scrollPosition / height, 5);
	  const newColor = startColor.map((value, index) => {
		return value + (endColor[index] - value) * percentage;
	  });
	  head.style.backgroundColor = `rgb(${newColor.join(',')})`;
	});
  });
  



// autr
var link = document.querySelector('#nav-logo');
link.addEventListener('click', function(event) {
	event.preventDefault();
	location.reload();
});



  


function move() {
	var progressBars = document.querySelectorAll('.progress');
	var percentages = [95, 95, 80, 65, 55, 75, 65];
	for (var i = 0; i < progressBars.length; i++) {
		progressBars[i].style.transition = 'width 2s';
		progressBars[i].style.width = percentages[i] + '%';
	}
}





