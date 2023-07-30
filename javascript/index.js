var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers: true,
    start: "top 1%",
    end: "100% 50%",
    scrub: 5,
    duration: 1,
    // pin: true,
  },
});

gsap.to(".home-img .yellow-box-div", {
  x: 100,
  transition: 0.2,
});
gsap.to(".home-img .blue-box-div", {
  x: 10,  
  transition: 0.2,
});
