// var cursor= document.querySelector(".cursor")
// var blur= document.querySelector(".cursor-blur")
// document.addEventListener("mousemove",function(dets){
//      cursor.style.left= dets.x+"px"
//      cursor.style.top= dets.y+"px"
// })
// document.addEventListener("mousemove",function(dets){
//      blur.style.left= dets.x - 150 +"px"
//      blur.style.top= dets.y - 150 +"px"
// })


gsap.to(".nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 1,
  
  scrollTrigger: {
    trigger: ".nav",
    scroller:"body",
    // markers:true,
    start:"top -12%",
    end:"top -11%",
    scrub:2
  }
});

gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub:2
    }
})
