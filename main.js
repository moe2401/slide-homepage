let i = 0;
let images = [];
let time = 5000;

//image list
images[0] = "img/asian-food.jpg";
images[1] = "img/coffee.jpg";
images[2] = "img/hamburger.jpg";
images[3] = "img/italian-food.jpg";


//change image
function changeImg(){
    document.getElementById("main-img").style.backgroundImage = "url(" + images[i] +")";

    if(i < images.length - 1){
        i++;
    } else{
        i = 0;
    }

    setTimeout("changeImg()", time);
}

// window.onload = changeImg();