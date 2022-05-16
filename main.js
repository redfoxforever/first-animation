let sunImg = document.querySelector('.sun-img'),
    leftTopImg = document.querySelector('.left-top'),
    leftBottomImg = document.querySelector('.left-bottom'),
    sunshineImg = document.querySelector('.sunshine-img'),
    rightTopImg = document.querySelector('.right-top'),
    rightBottomImg = document.querySelector('.right-bottom')


window.addEventListener('scroll', (e) => {
    sunImg.style.transform = `translateY(-${window.scrollY / 4}%)`
    // console.log(window.scrollY);
    leftTopImg.style.transform = `translateX(${window.scrollY / 3}%)`
    setTimeout(() => {
        leftBottomImg.style.transform = `translateX(${window.scrollY / 3}%)`
    }, 600);
    setTimeout(() => {
        rightTopImg.style.transform = `translateX(-${window.scrollY / 3}%)`        
    }, 400);
    rightBottomImg.style.transform = `translateX(-${window.scrollY / 2.5}%)`        
    setTimeout(() => {
        sunshineImg.style.opacity = `${window.scrollY}`        
    }, 500);
})