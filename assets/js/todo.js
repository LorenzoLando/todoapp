//check off specific todos by clicking
$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span", function(event){
	//faccio fade out dell`elemento parent dello span
	$(this).parent().fadeOut(500, function() {
		//utilizzo una funzione di callbak
		//in questo modo remove() avviene DOPO fadeout
		$(this).remove();
	});
	event.stopPropagation();

});


$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		//grabbing text for new todos
		var todoText = $(this).val();
		//puliamo il campo input 
		$(this).val("");
		//crea nuovo li e aggiungilo allo ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " +todoText+" </li>");
		
	}
});

//facciamo sparire l input quando premiamo l icona plus e ricomparire se la ri premiamo

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
 




