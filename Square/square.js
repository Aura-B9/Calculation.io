let length;
let perimeter;
let area;

document.getElementById("mySubmit").onclick = function(){

    length = document.getElementById("myLength").value;

    length = Number(length);

    perimeter = 4 * length ;

    area = length ** 2;

    perimeter = perimeter.toFixed(3);
    area = area.toFixed(3);

    document.getElementById("myPerimeter").textContent = perimeter;

    document.getElementById("myArea").textContent = area;

}