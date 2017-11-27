"use strict";

function TheApp()
{	
	$("#getQuestion").on("click",function()
	{
		
		$.ajax({
			url: "http://jservice.io/api/random",
			dataType : "json"
		})
		
		.done(function(data){
			$("#Question").text(data[0].question);
			console.log(data);
			$("#Answer").text(data[0].answer);
			console.log(data);
		});
		
	});
	
	$("#getAnswer").on("click",function(){
	});
}

window.onload = function(){
	TheApp();
}