//center
document.getElementById("main-title").style.textAlign = "center";
document.getElementById("description").style.textAlign = "center";
//justify content
var pizzaList = document.getElementById("pizza-list");
pizzaList.style.display = "flex";
pizzaList.style.justifyContent = "space-around";
//change src
document.querySelectorAll(".pizza-img")[1].src = "images/veggie.png";