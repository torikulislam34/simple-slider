const images = [
    'images/image-1.jpg',
    'images/image-2.jpg',
    'images/image-3.jpg',
    'images/image-4.jpg',
    'images/image-5.jpg',
    'images/image-6.jpg',
    'images/image-7.jpg',
    'images/image-8.jpg',
    'images/image-9.jpg',
    'images/image-10.jpg',
    'images/image-11.jpg',
    'images/image-12.jpg',
    'images/image-13.jpg',
    'images/image-14.jpg',
];
let imageIndex = 0;
const slidImg = document.getElementById('img-slid');
setInterval(
    slid = () => {
    if(imageIndex >= images.length){
        imageIndex = 0;
    }
    const imageUrl = images[imageIndex];
    slidImg.setAttribute('src', imageUrl)
    // console.log(imageUrl);
    imageIndex ++;
}
, 2000)