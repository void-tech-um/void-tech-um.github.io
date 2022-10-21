window.onscroll = function() {scrollFunction()};

var loadLeft = true;
var loadRight = true;

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navbar").classList.add("navbar-solid");
  } else {
    document.getElementById("navbar").classList.remove("navbar-solid");
  }
  loadLeft = checkInView(loadLeft, "about-us", ".left-animation", "comeIn")
  loadRight = checkInView(loadRight, "our-mission", ".right-animation", "comeIn")
}

function checkInView(notInView, section, box, anime) {
  if(!document.getElementById(section)) return;
  if (notInView && document.getElementById(section).getBoundingClientRect().y + 100 < document.documentElement.clientHeight) {
    document.querySelectorAll(box).forEach((el) => {
      el.classList.add(anime);
    })
    return false;
  }
  return true;
}
