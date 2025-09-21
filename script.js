class V5ScrollProductFeatures2 {
	constructor() {
		this.sectionId = '#pf-2';
		this.mbSwiper = null;
		this.mbSwiperActiveIndex = 0;
		this.screen2Img = document.querySelector(
			'.v5-scroll-product-features-2 .scroll-img-2'
		);
		this.screen3Img = document.querySelector(
			'.v5-scroll-product-features-2 .scroll-img-3-2'
		);
		this.swiperDom = document.querySelector(
			'.v5-scroll-product-features-2 .swiper'
		);
		if (window.innerWidth > 1023) {
			this.pcScrollTimeLine();
		} else {
			this.mbScollTimeLine();
			this.mbSwiperFunc();
		}
	}

	// PC端滚动动画
	pcScrollTimeLine() {
		if (!window._scrollTriggerRegistered) {
			window.gsap.registerPlugin(window.ScrollTrigger);
			window._scrollTriggerRegistered = true;
		}

		const self = this;
		let topH = '4.1666667vw';
		const productTabsBox = document.querySelector('.product-tabs-box');
		if (productTabsBox) {
			topH = productTabsBox.offsetHeight + 'px';
		} else {
			topH = document.querySelector('header').offsetHeight + 'px';
		}

		let tl;
		// 储存实例动画已经进行了多长的时间
		const time = tl ? tl.time() : 0;
		if (tl) {
			tl.kill();
		}
		tl = window.gsap.timeline({
			scrollTrigger: {
				trigger: this.sectionId,
				pin: true, // 将触发元素固定，在激活时
				start: `top ${topH}`, // 当触发元素的顶部碰到视口顶部时
				end: `bottom 25%`, // 在起始位置滚动 xxx 后结束
				scrub: 2, // 平滑擦洗，需要2秒钟来“赶上”滚动条
				// markers: true,
				snap: {
					snapTo: 'labels', // 吸附到时间轴中最近的标签
					duration: 0.2, // 吸附动画至少需要0.2秒，但不超过3秒（由速度决定）
					delay: 0, // 从最后一次滚动事件后等待0.2秒再进行吸附
					ease: 'power3.inOut' // 吸附动画的缓动效果（默认为"power3"）
				}
			}
		});

		tl.addLabel('start')
			.to('.v5-scroll-product-features-2 .title1', {
				y: '360px',
				ease: 'power3.inOut',
				duration: 0.3
			})
			.to(
				'.v5-scroll-product-features-2 .scroll-img-1',
				{
					y: '-100%',
					ease: 'power3.inOut',
					visibility: 'visible',
					duration: 0.3
				},
				'<'
			)
			.addLabel('Screen2')
			.to(
				'.v5-scroll-product-features-2 .scroll-img-2',
				{
					opacity: 1,
					ease: 'power3.inOut',
					duration: 0.3
				},
				'Screen2'
			)

			.addLabel('Screen3')
			.to(
				'.v5-scroll-product-features-2 .title1',
				{
					opacity: 0,
					ease: 'power3.inOut',
					duration: 0.1
				},
				'Screen3'
			)
			.to(
				'.v5-scroll-product-features-2 .scroll-img-2',
				{
					opacity: 0,
					ease: 'power3.inOut',
					duration: 0.1
				},
				'Screen3'
			)
			.to(
				'.v5-scroll-product-features-2 .scroll-img-3-1',
				{
					opacity: 1,
					ease: 'power3.in',
					duration: 0.3
				},
				'Screen3'
			)
			.to(
				'.v5-scroll-product-features-2 .scroll-img-3-2',
				{
					y: '-100%',
					ease: 'power3.inOut',
					duration: 0.3
				},
				'Screen3'
			)
			.to(
				'.v5-scroll-product-features-2 .title3',
				{
					opacity: 1,
					ease: 'power3.inOut',
					duration: 0.3
				},
				'Screen3'
			)
			.addLabel('end');
		tl.time(time);
	}

	mbScollTimeLine() {
		const self = this;
		if (!window._scrollTriggerRegistered) {
			window.gsap.registerPlugin(window.ScrollTrigger);
			window._scrollTriggerRegistered = true;
		}

		let topH = '4.1666667vw';
		const productTabsBox = document.querySelector('.product-tabs-box');
		if (productTabsBox) {
			topH = productTabsBox.offsetHeight + 'px';
		} else {
			topH = document.querySelector('header').offsetHeight + 'px';
		}

		let tl;
		// 储存实例动画已经进行了多长的时间
		const time = tl ? tl.time() : 0;
		if (tl) {
			tl.kill();
		}
		tl = window.gsap.timeline({
			scrollTrigger: {
				trigger: this.sectionId,
				pin: true, // 将触发元素固定，在激活时
				start: `top ${topH}`, // 当触发元素的顶部碰到视口顶部时
				end: `bottom 70%`, // 在起始位置滚动 xxx 后结束
				scrub: 0.1, // 平滑擦洗，需要2秒钟来“赶上”滚动条
				markers: true,
				snap: [0, 1],
				onUpdate: (curr) => {
					if (curr.direction === -1) {
						// 向上滚动
						if (
							self.screen3Img.getAttribute('data-opacity') === '1'
						) {
							window.gsap.to(
								'.v5-scroll-product-features-2 .scroll-img-3-2',
								{
									opacity: 0,
									ease: 'power3.inOut',
									duration: 0.3,
									onComplete: () => {
										self.screen3Img.setAttribute(
											'data-opacity',
											'0'
										);
									}
								}
							);
						}
						if (curr.progress.toFixed(2) === '0.00') {
							this.mbSwiper?.slideTo(0);
							this.mbSwiper.disable();
						}
					} else {
						// 向下滚动
					}
				}
			}
		});

		tl.addLabel('start')
			.to('.v5-scroll-product-features-2 .title1', {
				y: '360px',
				ease: 'power3.inOut',
				duration: 0.3
			})
			.to(
				'.v5-scroll-product-features-2 .scroll-img-1',
				{
					y: '-100%',
					ease: 'power3.inOut',
					visibility: 'visible',
					duration: 0.3
				},
				'<'
			)
			.to('.v5-scroll-product-features-2 .scroll-img-2', {
				opacity: 1,
				ease: 'power3.inOut',
				duration: 0.3,
				onUpdate: () => {
					self.screen2Img.setAttribute('data-opacity', '1');
					this.mbSwiper.enable();
				}
			})
			.to('.v5-scroll-product-features-2 .scroll-img-2', {
				visibility: 'visible',
				ease: 'power3.inOut',
				duration: 0.3
			})
			.addLabel('end');

		tl.time(time);
	}
	// 移动端Swiper
	mbSwiperFunc() {
		const self = this;
		this.mbSwiper = new window.Swiper(
			'.v5-scroll-product-features-2 .swiper',
			{
				direction: 'horizontal',
				slidesPerView: 1.2,
				spaceBetween: 0,
				mousewheel: false,
				slideToClickedSlide: true,
				on: {
					slideChangeTransitionEnd: function () {
						self.mbSwiperActiveIndex = this.activeIndex;
						if (this.activeIndex === 0) {
							const screen2Opacity =
								self.screen2Img.getAttribute('data-opacity');
							if (screen2Opacity === '1') return;
							window.gsap.to(
								'.v5-scroll-product-features-2 .scroll-img-3-2',
								{
									opacity: 0,
									y: '100%',
									ease: 'power3.inOut',
									duration: 0.3,
									onComplete: () => {
										self.screen3Img.setAttribute(
											'data-opacity',
											'0'
										);
									}
								}
							);
							window.gsap.to(
								'.v5-scroll-product-features-2 .scroll-img-2',
								{
									opacity: 1,
									ease: 'power3.inOut',
									duration: 0.3,
									onComplete: () => {
										self.screen2Img.setAttribute(
											'data-opacity',
											'1'
										);
									}
								}
							);
						}
						if (this.activeIndex === 1) {
							window.gsap.to(
								'.v5-scroll-product-features-2 .scroll-img-2',
								{
									opacity: 0,
									ease: 'power3.inOut',
									duration: 0.1,
									onComplete: () => {
										self.screen2Img.setAttribute(
											'data-opacity',
											'0'
										);
									}
								}
							);
							window.gsap.to(
								'.v5-scroll-product-features-2 .scroll-img-3-2',
								{
									opacity: 1,
									y: '-100%',
									ease: 'power3.inOut',
									duration: 0.3,
									onComplete: () => {
										self.screen3Img.setAttribute(
											'data-opacity',
											'1'
										);
									}
								}
							);
						}
					}
				}
			}
		);
	}
}
new V5ScrollProductFeatures2();
