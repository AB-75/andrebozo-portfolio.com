// Changement de couleur du header au scroll
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

// Reload au clic sur le logo
var link = document.querySelector('#nav-logo');
if (link) {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		location.reload();
	});
}

// Animation des barres de progression
function move() {
	var progressBars = document.querySelectorAll('.progress');
	var percentages = [95, 95, 80, 65, 55, 75];
	for (var i = 0; i < progressBars.length; i++) {
		progressBars[i].style.transition = 'width 2s';
		progressBars[i].style.width = percentages[i] + '%';
	}
}

// MENU HAMBURGER - VERSION CORRIGÉE (UN SEUL BOUTON)
(function() {
	// Éviter l'exécution multiple
	if (window.hamburgerInitialized) return;
	window.hamburgerInitialized = true;

	const nav = document.getElementById('nav-bar');
	const header = document.querySelector('header');
	
	if (!nav || !header) {
		console.error('Navigation elements not found');
		return;
	}

	const ul = nav.querySelector('ul');
	if (!ul) {
		console.error('Menu ul not found');
		return;
	}

	let hamburger = null;

	// Fonction pour créer/supprimer le hamburger selon la taille d'écran
	function manageHamburger() {
		// Supprimer TOUS les hamburgers existants pour éviter les doublons
		const existingHamburgers = document.querySelectorAll('#hamburger-btn, [aria-label="Toggle menu"]');
		existingHamburgers.forEach(btn => btn.remove());
		hamburger = null;

		if (window.innerWidth <= 768) {
			// Mode mobile - créer UN SEUL hamburger
			hamburger = document.createElement('button');
			hamburger.id = 'hamburger-btn';
			hamburger.innerHTML = '☰';
			hamburger.setAttribute('aria-label', 'Toggle menu');
			hamburger.style.cssText = 'background: none; border: none; color: white; font-size: 30px; cursor: pointer; padding: 10px; display: block; z-index: 10000; position: relative;';
			
			// Insérer le hamburger comme premier enfant du header
			header.insertBefore(hamburger, header.firstChild);
			
			// Événement click sur le hamburger
			hamburger.addEventListener('click', function(e) {
				e.stopPropagation();
				const isActive = ul.classList.toggle('active');
				
				// Afficher/cacher le menu
				if (isActive) {
					ul.style.display = 'flex';
					hamburger.innerHTML = '✕';
				} else {
					ul.style.display = 'none';
					hamburger.innerHTML = '☰';
				}
			});
			
			// S'assurer que le menu est caché par défaut sur mobile
			ul.style.display = 'none';
			ul.classList.remove('active');
			
		} else {
			// Mode desktop - pas de hamburger
			ul.style.display = 'flex';
			ul.classList.remove('active');
		}
	}

	// Attendre que le DOM soit complètement chargé
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', manageHamburger);
	} else {
		manageHamburger();
	}

	// Fermer le menu quand on clique sur un lien
	const menuLinks = nav.querySelectorAll('a');
	menuLinks.forEach(link => {
		link.addEventListener('click', function() {
			if (window.innerWidth <= 768) {
				ul.classList.remove('active');
				ul.style.display = 'none';
				if (hamburger) {
					hamburger.innerHTML = '☰';
				}
			}
		});
	});

	// Gérer le redimensionnement de la fenêtre avec debounce
	let resizeTimer;
	window.addEventListener('resize', function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(manageHamburger, 250);
	});

	// Fermer le menu si on clique en dehors
	document.addEventListener('click', function(event) {
		if (window.innerWidth <= 768 && 
			ul.classList.contains('active') && 
			!nav.contains(event.target) && 
			hamburger && 
			!hamburger.contains(event.target)) {
			ul.classList.remove('active');
			ul.style.display = 'none';
			if (hamburger) {
				hamburger.innerHTML = '☰';
			}
		}
	});
})();
