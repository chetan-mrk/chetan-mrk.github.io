function tab(){
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var num3;
	for(var a=1; a<=num2; a++){
		num3 = num1 + ' x '+num2+ ' = '+(num1*num2);
	}
	document.getElementById('s1').innerHTML=num3;

}