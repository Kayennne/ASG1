let slideIndex = [1,1];
let slideId = ["tankpic", "damagepic", "supportpic","maps"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);


function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 3) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}






// let dmgslideIndex = 1;
// dmgshowSlides(dmgslideIndex);

// function dmgplusSlides(n) {
//   dmgshowSlides(dmgslideIndex += n);
// }

// function dmgcurrentSlide(n) {
//   dmgshowSlides(dmgslideIndex = n);
// }

// function dmgshowSlides(n) {
//   let i;
//   let dslides = document.getElementsByClassName("damagepic");
//   let ddots = document.getElementsByClassName("ddot");
//   if (n > dslides.length) {dmgslideIndex = 1}    
//   if (n < 1) {dmgslideIndex = dslides.length}
//   for (i = 0; i < dslides.length; i++) {
//     dslides[i].style.display = "none";  
//   }
//   for (i = 0; i < ddots.length; i++) {
//     ddots[i].className = ddots[i].className.replace(" active", "");
//   }
//   dslides[dmgslideIndex-1].style.display = "block";  
//   ddots[dmgslideIndex-1].className += " active";
// }

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("tankpic");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }