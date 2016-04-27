
function onDropdownClick() {
	this.classList.toggle('dropdown-open');
	this.addEventListener('mouseleave', function() {
		this.classList.remove('dropdown-open');
	});
}

function main() {
	var navbars = document.getElementsByClassName('navbar');
	for (var i = 0; i < navbars.length; ++i) {
		var dropdowns = navbars[i].getElementsByClassName('dropdown');
		for (var j = 0; j < dropdowns.length; ++j) {
			dropdowns[j].addEventListener('click', onDropdownClick);
		}
	}

	/* Burger */
	document.getElementById('navbar-burger').addEventListener('click', function(){
		this.parentElement.classList.toggle('navbar-side-open');
	});

	/* Search toggle*/
	var search_toggle = document.getElementsByClassName(' navbar-search-toggle');
	for (var i = 0; i < search_toggle.length; ++i) {
		search_toggle[i].addEventListener('click', function(){
			document.getElementById('navbar-search').classList.toggle('navbar-search-active');
			document.getElementById('navbar-search-input').focus();
			var navmain = document.getElementById('navbar-main');
			if (navmain.classList.contains('navbar-side-open')) {
				navmain.classList.remove('navbar-side-open');
			}
		});
	}

	document.getElementById('navbar-search-clear').addEventListener('click', function() {
		document.getElementById('navbar-search-input').value = '';
		document.getElementById('navbar-search-input').focus();
	});
}

document.addEventListener('DOMContentLoaded', main);