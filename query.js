
document.querySelector('.scroll-down').addEventListener('click', function(event) {
	event.preventDefault();
	event.target.classList.add('disappear');
	document.querySelector('#box2').scrollIntoView({ behavior: 'smooth' });
});

// window.addEventListener('scroll', function() {
// 	var scrollPosition = window.pageYOffset;
// 	var element = document.querySelector('.intro_section');
// 	element.style.transform = 'translateX(' + scrollPosition + 'px)';
// });

var link = document.querySelector('#nav-logo');
link.addEventListener('click', function(event) {
	event.preventDefault();
	location.reload();
});


window.addEventListener('scroll', function() {
    let introSection = document.querySelector('.intro_section');
    let value = window.scrollY;
    introSection.style.right = value * 2 + 'px';
});