let base;
let height;
let perimeter;
let area;

document.getElementById("mySubmit").onclick = function(){

    base = document.getElementById("myBase").value;

    height = document.getElementById("myHeight").value;

    base = Number(base);

    height = Number(height);

    perimeter = 3 * base ;

    area = (0.5) * base * height ;

    perimeter = perimeter.toFixed(3);

    area = area.toFixed(3);

    document.getElementById("myPerimeter").textContent = perimeter ;

    document.getElementById("myArea").textContent = area;
    

}