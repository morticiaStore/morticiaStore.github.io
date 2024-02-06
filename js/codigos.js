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