const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPage(){
    var tl =gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
      });
}

function circleFlatten(){
      
      var xscale = 1;
      var yscale = 1;
      
      var xprev = 0;
      var yprev = 0;
      
      window.addEventListener("mousemove", function (event) {  
          // Calculate scale using mouse movement difference
          xscale = gsap.utils.clamp(0.8, 1.2, (event.clientX - xprev) / 50); 
          yscale = gsap.utils.clamp(0.8, 1.2, (event.clientY - yprev) / 50); 
      
          // Update previous mouse position for the next movement
          xprev = event.clientX;
          yprev = event.clientY;
      
          // Apply transformation directly to the minicircle
          document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px) scale(${xscale}, ${yscale})`;
      });
      
}

function mouseMove(){
    window.addEventListener("mousemove", function(){
        document.querySelector("#minicircle").style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    })
}
mouseMove();
circleFlatten();
firstPage();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });