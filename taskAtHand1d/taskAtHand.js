"use strict";

// using a function contructor form to create an object
function TaskAtHandApp()
{
	var version = "v1.3",
		appStorage = new AppStorage("taskAtHand");
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
		loadTaskList();
		setBackup();
		document.getElementById("retry").addEventListener("click",undoBtn);
		setStatus("ready");
	};
	function addTask()
	{
	setBackup();
	var taskName = $("#new-task-name").val();
	if (taskName)
		{
		addTaskElement(taskName);
		$("#new-task-name").val("").focus();
		
		}
	}
	
	function addTaskElement(taskName)
	{
		
		setBackup();
		
	var $task = $("#task-template .task").clone();
	$("span.task-name", $task).text(taskName);
	
	$("#task-list").append($task);
	
	$("button.delete", $task).click(function() {
		removeTask($task);
	});
	
	$("button.move-up", $task).click(function() {
		moveTask($task, true);
	});
	
	$("button.move-down", $task).click(function() {
		moveTask($task, false);
	});
	
	$("span.task-name", $task).click(function(){
		onEditTaskName($(this));
	});
	
	$("input.task-name", $task).change(function() {
		onChangeTaskName($(this));
	})
	
	.blur(function() {
		$(this).hide().siblings("span.task-name").show();
	});
	saveTaskList();
	}
	
	function removeTask($task)
	{
		setBackup();
		$task.remove();
		saveTaskList();
	}
	function moveTask($task, moveUp)
	{
		setBackup();
		if(moveUp)
		{
			$task.insertBefore($task.prev());
		}
		else
		{
			$task.insertAfter($task.next());	
		}
		saveTaskList();
	}	
	function onChangeTaskName($input)
	{
	setBackup();
	$input.hide();
	var $span = $input.siblings("span.task-name");
	if ($input.val())
	{
		$span.text($input.val());
	}
	$span.show();
	}
	
	function onEditTaskName($span)
	{	
		$span.hide()
			.siblings("input.task-name")
			.val($span.text())
			.show()
			.focus();
	}
	
	function saveTaskList()
	{
		var tasks = [];
		$("#task-list .task span.task-name").each(function() {
			tasks.push($(this).text())
		});	
		appStorage.setValue("taskList", tasks);
	}
	function loadTaskList()
	{
		var tasks = appStorage.getValue("taskList");
		if (tasks)
		{
			for (var i in tasks)
			{		
				addTaskElement(tasks[i]);
			}	
		}
	}
	
	function setBackup()
	{
			var tasks = [];
			$("#task-list .task span.task-name").each(function() {
				tasks.push($(this).text())
			});
			appStorage.setValue("backupList", tasks);
	}	
	
	function undoBtn()
	{
			appStorage.setValue("taskList", appStorage.getValue("backupList"));
			location.reload();
	}
	
	
	
} // end MyApp


$(function() {
	window.app = new TaskAtHandApp();
	window.app.start();
});

