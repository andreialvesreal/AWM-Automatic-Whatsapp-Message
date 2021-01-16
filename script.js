function inicio(){
	document.getElementById('link').style.display="none";
}

function geraMsg(){
	var formWpp = document.getElementById('formWpp')
	var nome = document.getElementById('nome').value
	var assunto = document.getElementById('assunto').value
	var num = document.getElementById('numwpp').value

	if (nome == "" || assunto == "" || num == "") {
		alert("Algum dos campos não foi preenchido.\nPor favor, preencha e tente novamente.")
		return false;
	}

	msgPronta.innerHTML = ("Olá! Meu nome é "  + nome + ", gostaria de falar a respeito de " + assunto + ". Aguardo o seu retorno!")
	document.getElementById('link').style.display="block";

	link.href = "https://api.whatsapp.com/send?phone=55" + num + "&text=Ol%C3%A1!%20Meu%20nome%20%C3%A9%20"+nome+"%2C%20gostaria%20de%20falar%20a%20respeito%20de%20"+assunto+".%20Aguardo%20seu%20retorno!"

}