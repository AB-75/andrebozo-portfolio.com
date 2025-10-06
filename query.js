bwindow.addEventListener('DOMContentLoaded', () => {
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


// Menu hamburger toggle
document.addEventListener('DOMContentLoaded', function() {
    // Créer le bouton hamburger s'il n'existe pas
    const nav = document.getElementById('nav-bar');
    const header = document.querySelector('header');
    
    // Vérifier si on est sur mobile
    if (window.innerWidth <= 768) {
        // Créer le bouton hamburger
        let hamburger = document.getElementById('hamburger-btn');
        if (!hamburger) {
            hamburger = document.createElement('button');
            hamburger.id = 'hamburger-btn';
            hamburger.innerHTML = '☰';
            hamburger.style.cssText = 'background: none; border: none; color: white; font-size: 30px; cursor: pointer; padding: 0; display: block;';
            header.insertBefore(hamburger, nav);
        }
        
        // Toggle menu au clic
        hamburger.addEventListener('click', function() {
            const ul = nav.querySelector('ul');
            ul.classList.toggle('active');
        });
        
        // Fermer le menu quand on clique sur un lien
        const menuLinks = nav.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                nav.querySelector('ul').classList.remove('active');
            });
        });
    }
});

// Réafficher le menu desktop si on resize
window.addEventListener('resize', function() {
    const ul = document.querySelector('#nav-bar ul');
    if (window.innerWidth > 768) {
        ul.style.display = 'flex';
        ul.classList.remove('active');
    } else {
        ul.style.display = 'none';
    }
});


// Menu hamburger pour mobile
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.getElementById('nav-bar');
    const header = document.querySelector('header');
    
    // Créer le bouton hamburger seulement sur mobile
    function createHamburger() {
        if (window.innerWidth <= 768) {
            let hamburger = document.getElementById('hamburger-btn');
            if (!hamburger) {
                hamburger = document.createElement('button');
                hamburger.id = 'hamburger-btn';
                hamburger.innerHTML = '☰';
                hamburger.style.cssText = 'background: none; border: none; color: white; font-size: 30px; cursor: pointer; padding: 0; display: block; z-index: 10000;';
                header.appendChild(hamburger);
                
                hamburger.addEventListener('click', function() {
                    const ul = nav.querySelector('ul');
                    ul.classList.toggle('active');
                });
            }
        } else {
            const hamburger = document.getElementById('hamburger-btn');
            if (hamburger) hamburger.remove();
        }
    }
    
    createHamburger();
    
    // Fermer le menu quand on clique sur un lien
    const menuLinks = nav.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            const ul = nav.querySelector('ul');
            ul.classList.remove('active');
        });
    });
    
    // Gérer le resize
    window.addEventListener('resize', createHamburger);
});



