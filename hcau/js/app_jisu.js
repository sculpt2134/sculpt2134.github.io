document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ScrollTrigger.isTouch !== 1) {
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.5,
            effects: true
        });

        gsap.fromTo('.hero-section', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'center',
                end: '820',
                scrub: true
            }
        });

        gsap.fromTo('.btn-guide-arrow', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                start: "top top",
                end: 10,
            }
        });

        let itemsL = gsap.utils.toArray('.gallery__left .gallery__item');

        itemsL.forEach(item => {
            gsap.fromTo(item, { opacity: 0, y: -50 }, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            });
        });

        let itemsR = gsap.utils.toArray('.gallery__right .gallery__item');

        itemsR.forEach(item => {
            gsap.fromTo(item, { opacity: 0, y: 50 }, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-750',
                    end: 'top',
                    scrub: true
                }
            });
        });

        let itemsC = gsap.utils.toArray('.gallery__center .gallery__item');

        itemsC.forEach(item => {
            gsap.fromTo(item, { opacity: 0, y: -50 }, {
                opacity: 1, y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            });
        });

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

        // 페이지가 로드된 후 실행되는 부분
        const sections = document.querySelectorAll('.content > div[id^="one"], .content > div[id^="two"], .content > div[id^="three"], .content > div[id^="four"]');
        const asideLinks = document.querySelectorAll('aside a');

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            let closestSection = null;
            let closestDistance = Infinity;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const distance = Math.abs(scrollPosition - sectionTop);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestSection = section;
                }
            });

            if (closestSection) {
                const correspondingLink = document.querySelector(`aside a[href="#${closestSection.id}"]`);

                if (correspondingLink) {
                    asideLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    correspondingLink.classList.add('active');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        // 링크 클릭시 실행되는 부분
        asideLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                // 링크 클릭 이벤트를 막음
                event.preventDefault();

                // 링크의 href 속성으로 이동
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    // 대응하는 섹션의 상단 위치로 스크롤
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });

                    // 모든 링크에서 'active' 클래스 제거
                    asideLinks.forEach(otherLink => {
                        otherLink.classList.remove('active');
                    });

                    // 클릭된 링크에 'active' 클래스 추가
                    link.classList.add('active');

                    // 스크롤 트리거 업데이트 이벤트 강제 호출
                    ScrollTrigger.update();
                }
            });
        });
    }
});
