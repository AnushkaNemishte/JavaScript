const slideshow = document.getElementById('slideshow-img')
var i = 0;
var imagess = [];
var time = 2000;

//images list
imagess[0] = "image1.jpg";
imagess[1] = "image2.jpg";
imagess[2] = "image3.jpg";
imagess[3] = "image4.jpg";

function changeImg() {
    slideshow.src = imagess[i];

  if (i < imagess.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
changeImg()