function Circle(){
	var rad = document.getElementById('n1').value;
	document.getElementById('n2').value=3.14*rad;
	document.getElementById('n3').value=3.14*2*rad;
}
function Sqaure(){
	var side = document.getElementById('s1').value;
	document.getElementById('s2').value=side*side;
}
function Rectangle(){
	var lt = document.getElementById('r1').value;
	var ht = document.getElementById('r2').value;
	document.getElementById('r3').value=lt*ht;
	document.getElementById('r4').value=2*(lt*ht);
}
