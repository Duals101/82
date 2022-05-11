canvas=document.getElementById("Just_lose_it");
ctx=canvas.getContext("2d")
color="darkblue";
linewidth=1
mouseevent=" ";

canvas.addEventListener("mousedown", mousedown);
function mousedown(e){
    color=document.getElementById("color").value;
    linewidth=document.getElementById("linewidth").value;
    mouseevent="mousedown"
} 
canvas.addEventListener("mouseup", mouseup);
function mouseup(e){
    mouseevent="mouseup"
}
canvas.addEventListener("mouseleave", mouseleave);
function mouseleave(e){
    mouseevent="mouseleave"
}
canvas.addEventListener("mousemove", mousemove);
function mousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseevent=="mousedown"){
        ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=linewidth;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();
    }
    lastX=currentX;
    lastY=currentY;
    
}
function cleararea(){
ctx.clearRect(0, 0, canvas.width, canvas.height); 
}