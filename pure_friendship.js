var pics = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg",
    "img/img7.jpg",
    "img/img8.jpg",
    "img/img9.jpg",
    "img/img10.jpg",
    "img/img11.jpg",
    "img/img12.jpg",
    "img/img13.jpg"
]
var img = document.querySelector("img");
var i = 1;
document.querySelector("button").addEventListener("click",function(){
    i=i%13;
    img.src=pics[i++];
});