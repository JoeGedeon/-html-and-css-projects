
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display =
  "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showsSlides(slideIndex);

//Next/previous controls
function plusSlides(n) {
  showsSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
  showsSlides(slideIndex = n);
}

function showsSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className.replace(" active" ,
    "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active ";
  captionText.innerHTML = dots[slideIndex-1].lastChild;
}