gsap.registerPlugin(ScrollTrigger);

opening = new TimelineMax();
opening.addLabel('opening')
       .to('.line', 1, {width: '100%'}, 'opening')
       .to('.line', 0.1, {opacity: 0}, 'opening+=0.9')
       .to('.index02 .index02-top', 1, {height: 0}, 'opening+=1')
       .to('.index02 .index02-bottom', 1, {height: 0}, 'opening+=1')
       .to('.index01 .index01-top', 1, {height: 0, opacity: 0, rotateZ: '-10deg'}, 'opening+=1.2')
       .to('.index01 .index01-bottom', 1, {height: 0, opacity: 0, rotateZ: '-10deg'}, 'opening+=1.2')
       .from('.overflow', 2, {opacity: 0}, 'opening+=1.2')

gsap.timeline({
  scrollTrigger: {
    trigger: '.contact',
    start: 'top bottom',
  }
})

.to(".contact-overlay", 2, {width: 0, rotateZ: '0deg'})
gsap.timeline({
  scrollTrigger: {
    trigger: '.campany',
    start: 'top bottom',
  }
})

.to(".campany-overlay", 2, {width: 0, rotateZ: '0deg'})
gsap.timeline({
  scrollTrigger: {
    trigger: '.collection',
    start: 'top bottom',
  }
})
.to(".collection-overlay", 2, {width: 0, rotateZ: '0deg'})
gsap.timeline({
  scrollTrigger: {
    trigger: '.concept',
    start: 'top bottom',
  }
})
.to(".concept-overlay", 2, {width: 0, rotateZ: '0deg'})

gsap.timeline({
  scrollTrigger: {
    trigger: '.news',
    start: 'top bottom',
  }
})
.from(".news", 1, {opacity: 0, y: '50px'})

gsap.timeline({
  scrollTrigger: {
    trigger: '.facility',
    start: 'top bottom',
  }
})
.staggerFrom(".facility-items li", 1.8, {opacity: 0}, 0.3)

gsap.timeline({
  scrollTrigger: {
    trigger: '.progress',
    start: 'top bottom',
  }
})
.staggerFrom(".progress-items li", 1.8, {opacity: 0}, 0.3)