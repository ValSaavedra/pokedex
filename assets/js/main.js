$(document).ready(function($){	
	$.ajax({
		url:'http://pokeapi.co/api/v2/pokemon/',
		type: 'GET',
		datatype: 'JSON',
		data:{"limit": '811'},
	})
	.done(function(respuesta) {
		//llamar pokemon container con jquery
		respuesta.results.forEach(function(e, img){
		var fotoPoke = img + 1;

		$(".pokemon").append("<div class='col s4'><img src='http://pokeapi.co/media/img/" + fotoPoke + ".png'><div>" + e.name + "</div></div>")
		})
		
		console.log("Success");
	})
	.fail(function(){
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
});

