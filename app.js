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
    var newRowOfImages = [];
    

 
  console.log(newRowOfImages);

  var random1 = randomImageOne();
  var random2 = randomImageTwo();
  var random3 = randomImageThree();
  newRowOfImages.push(random1);
  newRowOfImages.push(random2);
  newRowOfImages.push(random3);


 

  imageNonRepeat();
  
  return newRowOfImages;

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

  allPhotos[randomPic1].imageDisplayedCounter++;
  console.log(allPhotos[randomPic1].imageDisplayedCounter);

//   clickCounter++;
  //   console.log(clickCounter);

  for (var i in allPhotos) {

    if (event.target.alt === allPhotos[i].name) {
      allPhotos[i].numberOfClicks ++;
      console.log('Amount of times the image was clicked ' + allPhotos[i].numberOfClicks + ' ' + allPhotos[i].name);

      clickCounter++;

    }
  }



//   allPhotos[randomPic1].numberOfClicks++;
  //   console.log(this.numberOfClicks);
  makeThreeImages();

}

function handleSecondImageClick(event) {
  //allPhotos[randomPic2].imageDisplayedCounter += 1;
  //console.log('the amount the image has been displayed ' + allPhotos[randomPic2].imageDisplayedCounter);

  for (var i in allPhotos) {

    if (event.target.alt === allPhotos[i].name) {
      allPhotos[i].numberOfClicks ++;
      //console.log('Amount of times the image was clicked ' + allPhotos[i].numberOfClicks + ' ' + allPhotos[i].name);

      clickCounter++;

    }
  }



  //   allPhotos[randomPic2].numberOfClicks++;

  makeThreeImages();
}

function handleThirdImageClick() {

//   allPhotos[randomPic3].imageDisplayedCounter++;
//   clickCounter++;

for (var i in allPhotos) {

    if (event.target.alt === allPhotos[i].name) {
      allPhotos[i].numberOfClicks ++;
      //console.log('Amount of times the image was clicked ' + allPhotos[i].numberOfClicks + ' ' + allPhotos[i].name);

      clickCounter++;

    }
  }


//   allPhotos[randomPic3].numberOfClicks++;

  makeThreeImages();
}


pictureOne.addEventListener('click', handleFirstImageClick);
pictureTwo.addEventListener('click', handleSecondImageClick);
pictureThree.addEventListener('click', handleThirdImageClick);



makeThreeImages();
