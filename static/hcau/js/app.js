gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})
	
	
	gsap.fromTo('.btn-guide-arrow', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			start: "top top",
	end:10,
		//	trigger: '.hero-section',
			// start: '100',
			// end: '-100',
		//	scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

	let itemsC = gsap.utils.toArray('.gallery__center .gallery__item')

	itemsC.forEach(item => {
		gsap.fromTo(item, { opacity: 0, y: -50 }, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})
	

	gsap.fromTo('.hero-section2', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section2',
			start: 'center',
			end: '820',
			scrub: true
		}
	})
}
const showNav = gsap.from("#parallax__nav", {
	yPercent: -200,
	paused: true,
	duration: 0.2
}).progress(1);

ScrollTrigger.create({
	start: "top top",
	end: 99999,
	onUpdate: (self) => {
		self.direction === -1 ? showNav.play() : showNav.reverse();
	}
});