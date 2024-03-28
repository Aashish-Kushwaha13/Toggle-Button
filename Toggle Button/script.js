const background_box = document.querySelector(".background_box");
const toggle_box = document.querySelector(".toggle_box");
const circle = document.querySelector(".circle");
const checkbox = document.getElementById("checkbox");

toggle_box.onclick = function()
{
	if(checkbox.checked)
	{
		circle.style.transform = "translateX(100px)";
		circle.style.backgroundColor = "black";
		toggle_box.style.backgroundColor = "white";
		background_box.style.backgroundColor = "black";
	}
	else
	{
		circle.style.transform = "translateX(0px)";
		circle.style.backgroundColor = "white";
		toggle_box.style.backgroundColor = "black";
		background_box.style.backgroundColor = "white";
	}

}