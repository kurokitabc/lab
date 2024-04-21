document.addEventListener('DOMContentLoaded', function() {
	var siteDescription = document.getElementById('siteDescription');
	var welcomeText = document.getElementById('welcomeText');
	var achievements = document.getElementById('achievements');
	var lastScrollPosition = 0;
  
	function updateScroll() {
	  var scrollPosition = window.scrollY;
  
	  if (scrollPosition > lastScrollPosition) {
		siteDescription.classList.remove('hide');
		welcomeText.classList.add('fade-in');
		achievements.classList.remove('hide');
	  } else {
		siteDescription.classList.add('hide');
		welcomeText.classList.remove('fade-in');
		achievements.classList.add('hide');
	  }
  
	  lastScrollPosition = scrollPosition;
	}
  
	window.addEventListener('scroll', function() {
	  updateScroll();
	});
  });
