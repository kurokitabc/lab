window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;
  var scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  document.getElementById('percentage').innerText = Math.round(scrollPercentage) + "%";

  if (scrollPercentage >= 100) {
    document.getElementById('scrollText').innerText = "Welcome to KBCLab!!";
  } else {
    document.getElementById('scrollText').innerText = "スクロールしてください";
  }
});
