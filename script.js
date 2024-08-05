var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrBlur.style.left = dets.x - 250 +"px";
    crsrBlur.style.top = dets.y - 250 +"px";
})
