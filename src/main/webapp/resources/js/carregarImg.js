//debugger;
var itens = document.querySelectorAll("#tabela_data tr");
var listBtnEditar = document.querySelectorAll("button");
var imagemBean = document.querySelector("#foto");
var imagemBase64 = '';

for (var i = 0; itens.length > i; i++) {
    itens[i].addEventListener('click', function(e) {
	var itemSelecionado = e.currentTarget;
	var image = itemSelecionado.querySelector("td img");
	imagemBase64 = image.src;
    }, false);

}

function loadImg() {
    if (imagemBase64 !== "") {
	document.getElementById("foto-preview").src = imagemBase64;
    } else {
	document.getElementById("foto-preview").src = "../../resources/images/icons/SemImagem-300x300px.png";
    }

}
