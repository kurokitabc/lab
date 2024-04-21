window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;
  var scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  document.getElementById('percentage').innerText = Math.round(scrollPercentage) + "%";
});
