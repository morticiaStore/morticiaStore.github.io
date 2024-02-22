function showDropBarCategorias(){
	$("#dropBarCategorias > img").css("display","none");
	$("#dropBarCategorias > nav").css("display","inline");
}

function hideDropBarCategorias(){
	$("#dropBarCategorias > img").css("display","inline");
	$("#dropBarCategorias > nav").css("display","none");
}

function showSearchBar(){
	$("#searchBar").css("display","flex");
}

function hideSearchBar(){
	$("#searchBar").css("display","none");

}

function addCarrinho(){

	function x(){
		return Number($("#numItemsCarrinho").text().split("")[1])+1
	}

	$("#numItemsCarrinho").text("("+ x() +")");
}

function showUserBox(){
	$("#userBox").css("display", "flex");
}

function hideUserBox(){
	$("#userBox").css("display", "none");
}

function showLogin(){
	$("h1").text("Login")
	$("#corpoCadastro").css("display", "none");
	$("#corpoLogin").css("display", "grid");
	$("#corpo > p").replaceWith('<p style="padding-left: 20px;">Não tem uma conta?<em style="color: blue;" onclick="showCadastro()"> Cadastrar</em></p>')
}

function showCadastro(){
	$("h1").text("Cadastro")
	$("#corpoLogin").css("display", "none");
	$("#corpoCadastro").css("display", "grid");
	$("#corpo > p").replaceWith('<p style="padding-left: 20px;">Já tem uma conta? <em style="color: blue;" onclick="showLogin()">Fazer Login</em></p>')
}