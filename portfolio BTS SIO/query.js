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
	  if (window.matchMedia("(min-width: 415px)").matches) {
		head.style.backgroundColor = `rgb(${newColor.join(',')})`;
	  }
	});
  });
  
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



// sidebar

window.addEventListener('DOMContentLoaded', () => {
	const uls = document.querySelectorAll('ul');
  
	window.addEventListener('resize', () => {
	  if (window.matchMedia("(max-width: 414px)").matches) {
		for (let i = 0; i < uls.length; i++) {
		  uls[i].style.display = 'content';
		}
	  } else {
		for (let i = 0; i < uls.length; i++) {
		  uls[i].style.display = 'none';
		}
	  }
	});
  
	var button = document.querySelector('#nav-bar li');
	button.addEventListener('click', function(event) {
	  event.preventDefault();
	  if (window.matchMedia("(min-width: 415px)").matches) {
		const sidebar = document.querySelector('.ul');
		if (sidebar.style.display === 'none') {
		  sidebar.style.display = 'content';
		} else {
		  sidebar.style.display = 'none';
		}
	  }
	});
  });

