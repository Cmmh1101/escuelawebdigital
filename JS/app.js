// skewed hero triangles ===================
const triangleOne = document.querySelector('.triangleOne');
const triangleTwo = document.querySelector('.triangleTwo');

window.addEventListener('scroll', function() {
    const value1 = -15 + window.scrollY / 45;
    const value2 = 15 + window.scrollY / -45;
    triangleOne.style.transform = "skewY(" + value1 + "deg)";
    triangleTwo.style.transform = "skewY(" + value2 + "deg)";
})

// end of skewed hero triangles ===================