function substituir(){
	let img = document.getElementById("img");
	let aleatoria = Math.trunc(Math.random()*10);
	img.src = "img/" + aleatoria + ".jpg";
}