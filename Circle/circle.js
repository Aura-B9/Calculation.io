/* progrme for calculating circle's area & circumference */

const PI = 3.14 ;
let radius;
let circumference;
let area;

// radius = window.prompt(`Enter the radius of circle`);


document.getElementById("myButton").onclick = function(){

    radius = document.getElementById("myTxt").value 

    radius = Number(radius);
    circumference = 2 * PI * radius;
    circumference = circumference.toFixed(3);
    area = PI * (radius ** 2);
    area = area.toFixed(3);
    document.getElementById("myCir").textContent = circumference ;
    document.getElementById("myArea").textContent = area ;
}