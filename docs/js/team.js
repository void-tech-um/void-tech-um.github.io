window.onscroll = function() {scrollFunction()};
var loadImage = true;

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").classList.add("navbar-solid");
  } else {
    document.getElementById("navbar").classList.remove("navbar-solid");
  }
}