'use strict';

var pictureOne = document.getElementById('picture1');
var pictureTwo = document.getElementById('picture2');
var pictureThree = document.getElementById('picture3');

var allPhotos = [];
var imageNames = [];
console.log(imageNames);

var randomPic1 = 0;
var randomPic2 = 0;
var randomPic3 = 0;

var maxClicks = 25;
var clickCounter = 0;
console.log(clickCounter);


function ImageGallery(name, ext) {
  this.name = name;
  this.ext = ext;
  this.filePath = `img/${name}.${ext}`;

  this.imageDisplayedCounter = 0;
  this.numberOfClicks = 0;

  imageNames.push(this.name);
  allPhotos.push(this);
}

new ImageGallery('bag', 'jpg');
new ImageGallery('banana', 'jpg');
new ImageGallery('bathroom', 'jpg');
new ImageGallery('boots', 'jpg');
new ImageGallery('breakfast', 'jpg');
new ImageGallery('bubblegum', 'jpg');
new ImageGallery('chair', 'jpg');
new ImageGallery('cthulhu', 'jpg');
new ImageGallery('dog-duck', 'jpg');
new ImageGallery('dragon', 'jpg');
new ImageGallery('pen', 'jpg');
new ImageGallery('pet-sweep', 'jpg');
new ImageGallery('scissors', 'jpg');
new ImageGallery('shark', 'jpg');
new ImageGallery('sweep', 'png');
new ImageGallery('tauntaun', 'jpg');
new ImageGallery('unicorn', 'jpg');
new ImageGallery('usb', 'gif');
new ImageGallery('water-can', 'jpg');
new ImageGallery('wine-glass', 'jpg');

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
  allPhotos[randomPic1].imageDisplayedCounter++;
  return randomPic1;
}

function randomImageTwo() {
  var randomPic2 = Math.floor(Math.random() * allPhotos.length);
  pictureTwo.src = allPhotos[randomPic2].filePath;
  pictureTwo.alt = allPhotos[randomPic2].name;
  pictureTwo.title = allPhotos[randomPic2].name;
  allPhotos[randomPic2].imageDisplayedCounter++;
  return randomPic2;
}

function randomImageThree() {
  var randomPic3 = Math.floor(Math.random() * allPhotos.length);
  pictureThree.src = allPhotos[randomPic3].filePath;
  pictureThree.alt = allPhotos[randomPic3].name;
  pictureThree.title = allPhotos[randomPic3].name;
  allPhotos[randomPic3].imageDisplayedCounter++;
  return randomPic3;
}

function handleFirstImageClick() {
  for (var i in allPhotos) {
    if (event.target.alt === allPhotos[i].name) {
      allPhotos[i].numberOfClicks ++;
      clickCounter++;
    }
  }
  if (clickCounter === maxClicks){
    makeList();
  }
  makeThreeImages();
}

function handleSecondImageClick(event) {
  for (var i in allPhotos) {
    if (event.target.alt === allPhotos[i].name) {
      allPhotos[i].numberOfClicks ++;
      clickCounter++;
    }
    if (clickCounter === maxClicks){
      makeList();
    }
  }
  makeThreeImages();
}

function handleThirdImageClick() {
  for (var i in allPhotos) {
    if (event.target.alt === allPhotos[i].name) {
      allPhotos[i].numberOfClicks ++;
      clickCounter++;
    }
  }
  if (clickCounter === maxClicks){
    makeList();
  }
  makeThreeImages();
}

function makeList () {
  var myData = document.getElementById('dataList');
  var newUL = document.createElement('ul');
  for (var i = 0; i < allPhotos.length; i++) {
    var newLI = document.createElement('li');
    newLI.innerText = allPhotos[i].numberOfClicks + ' votes for ' + allPhotos[i].name + ' (Total times displayed: ' + allPhotos[i].imageDisplayedCounter + ')';
    newUL.appendChild(newLI);
  }
  myData.appendChild(newUL);
}
console.log(clickCounter);

pictureOne.addEventListener('click', handleFirstImageClick);
pictureTwo.addEventListener('click', handleSecondImageClick);
pictureThree.addEventListener('click', handleThirdImageClick);

makeThreeImages();
