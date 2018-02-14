const init = () => {
    let slides = document.querySelectorAll('.testimonial-item'),
    button = document.getElementById('button'),
    arrows = document.querySelectorAll('.lnr'),
    carouselCount = 0,
    scrollInterval,
    interval = 5000;
    
    const sliderEvent = (e) => {
        e = e || window.event;
        e.preventDefault();
        carouselCount = carouselCount + 100;
        slider();
        if(e.type !== "autoClick"){
           clearInterval(scrollInterval);
           scrollInterval = setInterval(autoScroll, interval);
        }
    }
    
    arrows[0].addEventListener('click', (e) => {
       e = e || window.event;
        e.preventDefault();
        carouselCount = carouselCount - 100; 
        slider();
        if (e.type !== 'autoClick') {
            clearInterval(scrollInterval);
            scrollInterval = setInterval(autoScroll, interval);
        }
    });
    
    arrows[1].addEventListener('click', sliderEvent);
    //arrows[1].addEventListener('autoClick', sliderEvent);
    
    
    
    const slider = () => {
		switch (carouselCount) {
			case -100:
				carouselCount = 0;
				break;
			case 300:
				carouselCount = 0;
				break;
			default:
				break;
		}
		console.log(carouselCount);
		for (var i = 0; i < slides.length; i += 1) {
			slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
		}
	}
    
    //let autoClick = new Event('autoClick');
//    const autoScroll = () => {
//        arrows[1].dispatchEvent(autoClick);
//    }
//    
//    scrollInterval = setInterval(autoScroll, interval);
    
}