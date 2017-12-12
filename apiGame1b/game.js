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
	
	$("#getQuestion2").on("click",function()
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
	
	$("#getQuestion3").on("click",function()
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
	
	$("#getQuestion4").on("click",function()
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
	
	$("#getQuestion5").on("click",function()
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
	
	$("#getQuestion6").on("click",function()
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
			$('#Answer').css("visibility", "visible");
	});
	
	
	$("#point1").on("click",function() {
		alert("You got a point, probably. Write it down I trust you."); 
	});
	
	$("#point2").on("click",function() {
		alert("You got a point, probably. Write it down I trust you."); 
	});
}

window.onload = function(){
	TheApp();
}