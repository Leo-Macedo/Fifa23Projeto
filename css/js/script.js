function mudar(){
	let img = document.getElementById("img");
	let trocar = Math.trunc(Math.random()*10);
	img.src = "img/" + trocar + ".jpg";
}