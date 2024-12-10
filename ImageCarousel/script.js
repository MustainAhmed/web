const images=document.getElementById('imgs');
const leftBtn=document.getElementById('left');
const rightBtn=document.getElementById('right');
const image=document.querySelectorAll('#imgs img');

let index=0;

let interval=setInterval(run,2000)

function run(){
    index++;
    changeImg();
}

function changeImg(){
    if(index<0){
        index=image.length -1;
    }
    else if(index>image.length -1){
        index=0;
    }

    images.style.transform=`translateX(${-index*700}px)`;
}