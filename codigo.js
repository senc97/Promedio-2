	$( document ).ready(function(){

	$("#pokedexform").submit(function(){

		var pokemon = $("#pokemon").val();
		$.ajax("https://pokeapi.co/api/v2/pokemon/"+pokemon+"/")
		.done(function (data){
			$("#pk_name").html(data.name);
			$("#pk_weight").html(data.weight);

		})

		return false;
	})
	})
