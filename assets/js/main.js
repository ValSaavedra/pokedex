$(document).ready(function($){
	$.ajax({
		url:'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		datatype: 'JSON',
		data:("limit": '811'),
	})
	.done(function(respuesta) {
		console.log(respuesta);
		console.log("Success");
	})
	.fail(function)() {
		console.log("error");
	})
	.always(function) {
		console.log("complete");
	});
});