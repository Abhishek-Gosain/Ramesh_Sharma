

const zoomBtn = document.querySelectorAll('.zoom-text');
const allImages = document.querySelectorAll('.img-container');
const imageView = document.querySelector('.image-view');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const imageBox = document.querySelector('.image-box');
const closeBtn = document.querySelector('.close-btn');
const image = document.querySelectorAll('div.gallery > a ');

let currentImageIdx = 0;
let imageUrl = '';
let navImg = [];
let navIdx  = 0

image.forEach(function (item,index) {
    // console.log(item.getAttribute('href'))
    navImg.push(item.getAttribute('href'))
})


//clear the view
imageView.addEventListener('click', function(){
    this.style.display = "none";
    imageBox.style.display = "none";
})

//close button clear the view
closeBtn.addEventListener('click',function(){
    imageBox.style.display = "none";
    imageView.style.display = "none"; 
})


zoomBtn.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        imageUrl = btn.children[0].getAttribute('href')
        navIdx = index + 1
        imageView.style.display = "block";
        imageBox.style.display = "block";
        currentImageIdx = index + 1;
        currentImageDisplay(currentImageIdx);
    })
})

function currentImageDisplay(position){
    imageBox.style.background = `url(${imageUrl}) center/cover no-repeat `;
}

prevBtn.addEventListener('click', function(){
    imageUrl = navImg[navIdx--] 
    console.log(navIdx)
    console.log(navImg)
    if (navIdx === 0) {
        navIdx = navImg.length-1
    }
    currentImageDisplay(currentImageIdx);
})

nextBtn.addEventListener('click', function(){
        imageUrl = navImg[navIdx++] 
        if (navIdx === navImg.length) {
            navIdx = 0
        }
    currentImageDisplay(currentImageIdx);
})