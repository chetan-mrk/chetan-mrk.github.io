function demo(){
	console.log('Hello Mirteka');
	var nm = document.getElementById('t1').value;
	var num1 = 2* parseInt(nm);
	console.log(num1);
}
function db(){
	var num = document.getElementById('t1').value;
	document.getElementById('resl').textContent='Result is: '+2*num;
}