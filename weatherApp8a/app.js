"use strict";

function MyApp()
{
	var version = "v1.0";
	
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	this.start = function()
	{
		$("#app>header").append(version);
		setStatus("ready");
		var $weatherWidget = $("div.weather-widget");
		WeatherWidget = new WeatherWidget();
		$("#getWeather").on("click",function(){
		WeatherWidget.update();
		});
	};
} // end MyApp

$(function() {
	window.app = new MyApp();
	window.app.start();
});
