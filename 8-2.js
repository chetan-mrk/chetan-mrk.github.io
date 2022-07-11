function tab(){
	var num1 = document.getElementById('n1').value;
	var num2 = document.getElementById('n2').value;
	var num3 ='<table>';
	var str = '<table class="table hover"><tbody>';
	for(a=parseInt(num1); a<=parseInt(num2); a++){
		num3 = num3 +'<tr><td>' +(a*1)+'</td><td>'+(a*2)+'</td><td>'+(a*3)+'</td></tr>'+(a*4)+'</td></tr>';
	}
	num3 = num3+'<table>';
	document.getElementById('s1').innerHTML=num3;

}