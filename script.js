const button = document.querySelector("button");
const body = document.querySelector("body");
const colors =["violet","indigo","blue","green","yellow","orange","red"];
body.style.backgroundColor="pink";
document.addEventListener("click",function(){
    const colorIndex= parseInt(Math.random()*colors.length);
    body.style.backgroundColor=colors[colorIndex];
});