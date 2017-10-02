function swapClass(myDiv)
{
	if(myDiv.classList.contains("on"))
	{
		myDiv.className="off";
		document.body.style.background="white";
		myDiv.innerHTML="ON";
		myDiv.float=left;
	}
	else
	{
		myDiv.className="on";
		document.body.style.background="black";
		myDiv.innerHTML="OFF";
		myDiv.float=right;
		
	}
}