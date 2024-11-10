let length;
let height;
let perimeter;
let area;

document.getElementById("mySubmit").onclick = function(){

    length =     document.getElementById("myLength").value;

    height =     document.getElementById("myHeight").value;

    length = Number(length);
    height = Number(height);

    perimeter = 2 * (length + height );

    area = length * height;

    perimeter = perimeter.toFixed(3);
    area = area.toFixed(3);

    document.getElementById("myPerimeter").textContent = perimeter;

    document.getElementById("myArea").textContent = area;

}