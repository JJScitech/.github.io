let classList = ["btn-primary", "btn-turq", "btn-yellow"];
let i=0;
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
document.getElementById("button").addEventListener("click", btnPressed);
function btnPressed() {
		if (i==2) {
			i=0
		}
		else {
			i++
		}
		document.getElementById("button").className = classList[i];
		document.getElementById("button").style.marginLeft = `${getRandomInt(90)}%`
		document.getElementById("button").style.marginTop = `${getRandomInt(90)}vh`
}
