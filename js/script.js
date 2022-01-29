const ibg = () => {
	const ibg = document.querySelectorAll('.ibg')
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage =
				'url(' + ibg[i].querySelector('img').getAttribute('src') + ')'
		}
	}
}

ibg()

const swiper = new Swiper('.slider', {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	slidesPerView: 1,
	loop: true,
	autoHeight: true,
})
