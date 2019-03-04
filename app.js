"use strict";

var pictureOne = document.getElementById("picture1");
var pictureTwo = document.getElementById("picture2");
var pictureThree = document.getElementById("picture3");

var allPhotos = [];

var randomPic1 = 0;
var randomPic2 = 0;
var randomPic3 = 0;

function ImageGallery(name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;

  allPhotos.push(this);
}

new ImageGallery("bag", "jpg");
new ImageGallery("banana", "jpg");
new ImageGallery("bathroom", "jpg");
new ImageGallery("boots", "jpg");
new ImageGallery("breakfast", "jpg");
new ImageGallery("bubblegum", "jpg");
new ImageGallery("chair", "jpg");
new ImageGallery("cthulhu", "jpg");
new ImageGallery("dog-duck", "jpg");
new ImageGallery("dragon", "jpg");
new ImageGallery("pen", "jpg");
new ImageGallery("pet-sweep", "jpg");
new ImageGallery("scissors", "jpg");
new ImageGallery("shark", "jpg");
new ImageGallery("sweep", "png");
new ImageGallery("tauntaun", "jpg");
new ImageGallery("unicorn", "jpg");
new ImageGallery("usb", "gif");
new ImageGallery("water-can", "jpg");
new ImageGallery("wine-glass", "jpg");

function makeThreeImages() {
  randomImageOne();
  randomImageTwo();
  randomImageThree();
  imageNonRepeat();
}

function imageNonRepeat() {
  while (pictureOne.src === pictureTwo.src
    || pictureOne.src === pictureThree.src
    || pictureTwo.src === pictureThree.src) {
    makeThreeImages();
  }
}

function randomImageOne() {
  var randomPic1 = Math.floor(Math.random() * allPhotos.length);
  pictureOne.src = allPhotos[randomPic1].filePath;
  pictureOne.alt = allPhotos[randomPic1].name;
  pictureOne.title = allPhotos[randomPic1].name;
}

function randomImageTwo() {
  var randomPic2 = Math.floor(Math.random() * allPhotos.length);
  pictureTwo.src = allPhotos[randomPic2].filePath;
  pictureTwo.alt = allPhotos[randomPic2].name;
  pictureTwo.title = allPhotos[randomPic2].name;
}

function randomImageThree() {
  var randomPic3 = Math.floor(Math.random() * allPhotos.length);
  pictureThree.src = allPhotos[randomPic3].filePath;
  pictureThree.alt = allPhotos[randomPic3].name;
  pictureThree.title = allPhotos[randomPic3].name;
}

function handleFirstImageClick() {
  makeThreeImages();
  
}

function handleSecondImageClick() {
  makeThreeImages();
}

function handleThirdImageClick() {
  makeThreeImages();
}


pictureOne.addEventListener('click', handleFirstImageClick);
pictureTwo.addEventListener('click', handleSecondImageClick);
pictureThree.addEventListener('click', handleThirdImageClick);



makeThreeImages();
