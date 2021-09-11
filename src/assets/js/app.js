// import Glide from '@glidejs/glide';
import gsap from 'gsap';


// import 'jquery/dist/jquery';
// import '@popperjs/core';

// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/alert';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
// import 'bootstrap/js/dist/collapse';
// // import 'bootstrap/js/dist/dropdown';/////////////////////////////////
// import 'bootstrap/js/dist/modal';
// // import 'bootstrap/js/dist/tooltip';/////////////////////////////////
// // import 'bootstrap/js/dist/popover';/////////////////////////////////
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';


document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------------------------------------- slider:
  // const options = {
  //   type: 'carousel',
  //   startAt: 0,
  //   perView: 3,
  //   dragThreshold: false,
  //   gap: 30,
  //   autoplay: false,
  //   keyboard: false,
  //   animationDuration: 400,
  //   animationTimingFunc: "ease-in-out",
  //   breakpoints: {
  //     1200: {
  //       perView: 1,
  //     }
  //   }
  // };

  // new Glide('.glide', options).mount();



  document.querySelector('.button').addEventListener('click', play);


  function play() {
    tl.play().restart();
  }


  // const tl = gsap.to('.item1', {
  //   x: "100",
  //   duration: 1,
  //   // delay: 1
  // }).pause();
  // //   .to('.item1', {
  // //     x: "200",
  // //     y: "100",
  // //     duration: 2
  // //   });

  // const tl = gsap.timeline();

  // tl.to('.item1', {
  //   x: "100",
  //   duration: 2,
  // })
  //   .to('.item2', {
  //     x: "100",
  //     duration: 2,
  //   }, "-=3")
  //   .pause();
  // to('.item1', {
  //   x: "100",
  //   duration: 3,
  // }, "+=1");


  const tween = gsap.to('.item1', {
    x: "100",
    duration: 2,
  });

  console.log(tween);


















})