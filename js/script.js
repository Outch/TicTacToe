'use strict';

var player = 1;

function check()
{
	var id = "td";
	var y = 0;
	for (var i = 1; i < 10; i++)
	{
		if (!document.getElementById(id + i).innerHTML == "")
			y++;
		if (y == 9)
			return document.getElementById('result').innerHTML = "It's a draw..";
	}
}

function init()
{
	var id = "td";
	player = 1;
	for (var i = 1; i < 10; i++)
	{
		document.getElementById(id + i).innerHTML = "";
	}
	document.getElementById('result').innerHTML = "Good Luck !";
}

function crossRing(id)
{
	if (!document.getElementById(id).innerHTML)
	{
		if (player % 2 == 1)
			document.getElementById(id).innerHTML = '<i class="fas fa-times fa-3x"></i>';
		else
			document.getElementById(id).innerHTML ='<i class="fas fa-circle fa-3x"></i>';
	}
	player++;
	check();
}