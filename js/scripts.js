
var triangle1Area = getTriangleArea(5, -10);
var	triangle2Area = getTriangleArea(2, 5);
var	triangle3Area = getTriangleArea(3, 6);

    function getTriangleArea(a, h) {

if (a <= 0 || h <= 0 ) {
		console.log('nieprawidlowe dane');
}   else  {
		return a*h/2
}
}
console.log(triangle1Area, triangle2Area, triangle3Area);



