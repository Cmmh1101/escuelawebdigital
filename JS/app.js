// skewed hero triangles ===================
const TriangleOne = document.querySelector('.triangleOne');
const TriangleTwo = document.querySelector('.triangleTwo');

window.addEventListener('scroll', function() {
    const value1 = -15 + window.scrollY / 45;
    const value2 = 15 + window.scrollY / -45;
    TriangleOne.style.transform = "skewY(" + value1 + "deg)";
    TriangleTwo.style.transform = "skewY(" + value2 + "deg)";
})

// end of skewed hero triangles ===================