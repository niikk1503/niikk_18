var arr = [
    {songname:"pehle v main", img:"./images/animal.jpg", url:"./songs/pehle bhi main.mp3"},
    {songname:"jale 2", img:"./images/jale.jpg", url:"./songs/jale 2.mp3"},
    {songname:"Ram Siya Ram", img:"./images/ram.jpg", url:"./songs/Ram Siya Ram.mp3"},
    {songname:"Arjan Vailly Ne", img:"./images/animal.jpg", url:"./songs/Arjan Vailly Ne.mp3"}
]
 
var allsongs = document.querySelector("#allsongs")

function mainFunction(){
var clutter = "";
arr.forEach(function(elem,index){
    clutter += `<div class="songcard" id="${index}">
   <div class="player">
       <img src="${elem.img}"
           alt="">
       <h2>${elem.songname}</h2>
   </div>
   <h4>3:17</h4>
</div>`;
allsongs.innerHTML = clutter;
})
}
mainFunction();

var audio = new Audio()
allsongs.addEventListener("click",function(dets){
   audio.src = arr[dets.target.id].url;
   audio.play()
})