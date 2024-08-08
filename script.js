var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrBlur.style.left = dets.x - 250 +"px";
    crsrBlur.style.top = dets.y - 250 +"px";
})


gsap.to('#nav', {
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height : "70px",
    duration: 0.5,
    scrollTrigger: {
        trigger: '#nav',
        scroller: 'body',
        // markers: true,
        start: 'top -10%',
        end: 'top -20%',
        scrub: 1
    }
})