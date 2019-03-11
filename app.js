'use strict';
console.log('Script loaded');

var pictureOne = document.getElementById('picture1');
var pictureTwo = document.getElementById('picture2');
var pictureThree = document.getElementById('picture3');
var deleteImage = document.getElementById('imageSection');
var ctx = document.getElementById('barChart').getContext('2d');
console.log(ctx);
var allPhotos = [];
var imageNames = [];
console.log(imageNames);

// var randomPic1 = 0;
// var randomPic2 = 0;
// var randomPic3 = 0;

var maxClicks = 25;
var clickCounter = 0;
var usedImages = [];
console.log('My Shit', usedImages);

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

  if (randomPic1 === randomPic2
        || randomPic1 === randomPic3
        || randomPic2 === randomPic3
        || usedImages.indexOf(randomPic1) !== -1
        || usedImages.indexOf(randomPic2) !== -1
        || usedImages.indexOf(randomPic3) !== -1
  ){
    makeThreeImages();
    console.log(makeThreeImages);
  } else {
    usedImages.length = 0;
    usedImages.push(randomPic1);
    usedImages.push(randomPic2);
    usedImages.push(randomPic3);
  }
}

var randomPic1;
var randomPic2;
var randomPic3;

function randomImageOne() {
  randomPic1 = Math.floor(Math.random() * allPhotos.length);
  pictureOne.src = allPhotos[randomPic1].filePath;
  pictureOne.alt = allPhotos[randomPic1].name;
  pictureOne.title = allPhotos[randomPic1].name;
  allPhotos[randomPic1].imageDisplayedCounter++;
  return randomPic1;
}

function randomImageTwo() {
  randomPic2 = Math.floor(Math.random() * allPhotos.length);
  pictureTwo.src = allPhotos[randomPic2].filePath;
  pictureTwo.alt = allPhotos[randomPic2].name;
  pictureTwo.title = allPhotos[randomPic2].name;
  allPhotos[randomPic2].imageDisplayedCounter++;
  return randomPic2;
}

function randomImageThree() {
  randomPic3 = Math.floor(Math.random() * allPhotos.length);
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
    if (clickCounter === maxClicks){
      break;
    }
  }
  if (clickCounter === maxClicks){
    deleteImage.remove();
    chartMaker();
    makeNewList();
    storeData();
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
      break;
    }
  }
  if (clickCounter === maxClicks){
    deleteImage.remove();
    chartMaker();
    makeNewList();
    storeData();
  }
  makeThreeImages();
}

function handleThirdImageClick() {
  for (var i in allPhotos) {
    if (event.target.alt === allPhotos[i].name) {
      allPhotos[i].numberOfClicks ++;
      clickCounter++;
    }
    if (clickCounter === maxClicks){
      break;
    }
  }
  if (clickCounter === maxClicks){
    deleteImage.remove();
    chartMaker();
    makeNewList();
    storeData();
  }
  makeThreeImages();
}

function makeNewList() {
  var myData = document.getElementById('dataList');
  var hrEl = document.createElement('tr');
  var ihEl = document.createElement('th');
  ihEl.textContent = '';
  var hdEl = document.createElement('th');
  hdEl.textContent = 'Display Total';
  var h2El = document.createElement('th');
  h2El.textContent = 'Votes Total';
  var nhEl = document.createElement('th');
  nhEl.textContent = 'Image Name';
  hrEl.appendChild(ihEl);
  hrEl.appendChild(nhEl);
  hrEl.appendChild(hdEl);
  hrEl.appendChild(h2El);

  var idEl = document.createElement('td');
  var nameEl = document.createElement('td');
  var tdEl = document.createElement('td');
  var dEl = document.createElement('td');
  for (var i = 0; i < allPhotos.length; i++) {
    var trEl = document.createElement('tr');
    trEl.innerText = allPhotos[i].numberOfClicks;
    tdEl.appendChild(trEl);

    var drEl = document.createElement('tr');
    drEl.innerText = allPhotos[i].imageDisplayedCounter;
    dEl.appendChild(drEl);

    var name2El = document.createElement('tr');
    name2El.innerText = allPhotos[i].name;
    nameEl.appendChild(name2El);

    var irEl = document.createElement('tr');
    irEl.innerHTML = '<img src="' + allPhotos[i].filePath + '" class="tableImages">';
    idEl.appendChild(irEl);
  }
  myData.appendChild(hrEl);
  myData.appendChild(idEl);
  myData.appendChild(nameEl);
  myData.appendChild(dEl);
  myData.appendChild(tdEl);
}

// function makeList () {
//   var myData = document.getElementById('dataList');
//   var newUL = document.createElement('ul');
//   for (var i = 0; i < allPhotos.length; i++) {
//     var newLI = document.createElement('li');
//     newLI.innerText = allPhotos[i].numberOfClicks + ' votes for ' + allPhotos[i].name + ' (Total times displayed: ' + allPhotos[i].imageDisplayedCounter + ')';
//     newUL.appendChild(newLI);
//   }
//   myData.appendChild(newUL);
// }
console.log(clickCounter);

pictureOne.addEventListener('click', handleFirstImageClick);
pictureTwo.addEventListener('click', handleSecondImageClick);
pictureThree.addEventListener('click', handleThirdImageClick);

makeThreeImages();

function chartMaker () {


  var clicks = [];
  for (var i = 0; i < allPhotos.length; i++){
    clicks.push(allPhotos[i].numberOfClicks);
  }
  var displayed = [];
  for (var j = 0; j < allPhotos.length; j++){
    displayed.push(allPhotos[j].imageDisplayedCounter);
  }

  var data = {
    labels: imageNames,
    datasets: [
      {
        label: 'Image Displayed',
        backgroundColor: '#421b9b33',
        data: displayed
      },
      {
        label: 'Image Votes',
        backgroundColor: '#51eaea33',
        data: clicks
      }
    ]
  };

  var MyData = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      barValueSpacing: 20,
      scales: {
        yAxes: [{
          ticks: {
            min: 0,
          }
        }]
      }
    }
  });
}

function storeData() {
  localStorage.setItem('myData', JSON.stringify(allPhotos));
  var retrieveData = localStorage.getItem('myData');
  console.log(retrieveData, JSON.parse(retrieveData));
}

if (true) {
  console.log('string');
  var something = localStorage.getItem('myData');
  allPhotos = JSON.parse(something);
}
