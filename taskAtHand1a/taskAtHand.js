"use strict";

// using a function contructor form to create an object
function TaskAtHandApp()
{
	var version = "v1.0";

	// creating a private function
	function setStatus(message)
	{
		$("#app>footer").text(message);
	}

	// creating a public function
	this.start = function()
	{
		$("#new-task-name").keypress(function(e)
		{
			if (e.which == 13) //Enter Key
			{
				addTask();
				return false;
			}
		})
		.focus();
		$("#app>header").append(version);
		setStatus("ready");
	};
	function addTask()
	{
	var taskName = $("#new-task-name").val();
	if (taskName)
	{
		addTaskElement(taskName);
		$("#new-task-name").val("").focus();
		
		}
	}
	
	function addTaskElement(taskName)
	{
	var $task = $("<li></li>");
	//$task.text(taskName);
	var $delete = $("<button class='delete'>X</button>");
	var $moveUp = $("<button class='move-up'>^</button>");
	var $moveDown = $("<button class='move-down'>v</button>");
	$task.append($delete)
		 .append($moveUp)
		 .append($moveDown)
		 .append("<span class='task-name'>"+taskName+
					"</span>");
	$("#task-list").append($task);
	$delete.click(function() { $task.remove(); });
	$moveUp.click(function() { $task.insertBefore($task.prev());});
	$moveDown.click(function() { $task.insertAfter($task.next());});
		
	}
} // end MyApp


$(function() {
	window.app = new TaskAtHandApp();
	window.app.start();
});

