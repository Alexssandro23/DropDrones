// function trocarImg(e){
//     document.getElementById('trocar-1').src=e;

// }
const imgs =document.getElementById("img");
const img=document.querySelectorAll("#img img");

let idx = 0;

function slide(){
    idx++;
    if(idx>img.length-1){
        idx=0;
    }
    imgs.style.transform = `translateX(${-idx * 385}px)`;
    console.log('entrou');
}
setInterval(slide, 3100);
