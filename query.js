
document.querySelector('.scroll-down').addEventListener('click', function(event) {
	event.preventDefault();
	event.target.classList.add('disappear');
	document.querySelector('#présentation').scrollIntoView({ behavior: 'smooth' });
});


var link = document.querySelector('#nav-logo');
link.addEventListener('click', function(event) {
	event.preventDefault();
	location.reload();
});

$(document).ready(function(){
	$('.logo-a').click(function(){
	  location.reload();
	});
  });
  


function move() {
	var progressBars = document.querySelectorAll('.progress');
	var percentages = [95, 95, 80, 65, 55, 75, 65];
	for (var i = 0; i < progressBars.length; i++) {
		progressBars[i].style.transition = 'width 2s';
		progressBars[i].style.width = percentages[i] + '%';
	}
}



document.getElementById("nav_bouton").addEventListener("click", function(event){
	event.preventDefault();
	window.history.replaceState(null, null, event.target.href);
  });
