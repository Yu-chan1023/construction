// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.matchMedia({
//   "(min-width: 769px)": function() {
//     tl = new TimelineMax();
//     tl.staggerTo('.loading-logo span', 4, {opacity: 1}, 0.5)
//       .staggerTo('.loading-logo span', 1 , {margin: 0, delay: '-2'})
//       .to('.overlay', 1, {width: "100%"})
//       .to('.overlay img', 1, {width: "50%"})
//       .to('.loading-logo', .5, {display: 'none'})
//       .to('.loading-wrapper', 1, {width: 0})
//       .from('header', 1.5, {x: '-300', ease: 'back.out(3)'})
//       .staggerFrom('.top h1 span', 0.85 , {x: '-200', rotateZ: 180, ease: Power2.easeOut}, 0.05)
//       .to('body', 1, {overflow: 'auto'});
//   },
//   "(max-width: 768px)": function() {
//     tl = new TimelineMax();
//     tl.staggerTo('.loading-logo span', 4, {opacity: 1}, 0.5)
//       .staggerTo('.loading-logo span', 1 , {margin: 0, delay: '-2'})
//       .to('.overlay', 1, {width: "100%"})
//       .to('.overlay img', 1, {width: "50%"})
//       .to('.loading-logo', .5, {display: 'none'})
//       .to('.loading-wrapper', 1, {width: 0})
//       .from('.menu-btn', 1, {x: '-100', ease: 'back.out(3)'})
//       .staggerFrom('.top h1 span', 0.85 , {x: '-200', rotateZ: 180, ease: Power2.easeOut}, 0.05)
//       .to('body', 1, {overflow: 'auto'});
//   }
// })

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.top',
//     start: 'top bottom',
//     end: 'bottom top',
//     scrub: true,
//   }
// })
// .from(".para0", {y: '100px'})

// ScrollTrigger.matchMedia({
//   "(min-width: 769px)": function() {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: '.images',
//         start: 'top bottom',
//         end: 'bottom top',
//         scrub: true,
//       }
//     })
//     .from(".para", {y: '100px'})
//     .from(".para2", {y: '100px'})
//     .from(".para3", {y: '100px'})
//   },
//   "(max-width: 768px)": function() {
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: '.images',
//         start: 'top bottom',
//         end: 'bottom 70%',
//         scrub: true,
//       }
//     })
//     .from(".para", {y: '70px'})
//     .from(".para2", {y: '30px'})
//     .from(".para3", {y: '30px'})
//   }
// })

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.product',
//     start: 'top bottom',
//     end: 'bottom 70%',
//     scrub: true,
//   }
// })
// .from(".para4", {xPercent: '-200'})
// .from(".para5", {xPercent: '200'})

// gsap.timeline({
//   scrollTrigger: {
//     trigger: '.access',
//     start: 'top bottom',
//     end: 'bottom 70%',
//     scrub: true,
//   }
// })
// .from(".para6", {y: '100'})

// gsap.timeline({
//   scrollTrigger: {
//     trigger: 'footer',
//     start: 'top bottom',
//     end: 'bottom bottom',
//     scrub: true,
//   }
// })
// .from("footer", {y: '-100'})


//   const menu = document.getElementById('menu-btn');
//   const list = document.getElementById('menu-lists');
//   menu.addEventListener('click', () => {
//     const btn = gsap.timeline();
//     btn.to(list, 1, {xPercent: 100}) 
//   })
