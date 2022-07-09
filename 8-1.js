function f1(){
	var ip = document.getElementById('n1').value;
	document.getElementById('s1').textContent='Result is: '+ip;
}
function f2(){
	var jv = 'Apple';
	jv = jv+'Orange';
	document.getElementById('s1').textContent=jv;
}
function f3(){
	var n = 10;
	n= n+3;
	document.getElementById('s1').textContent=n;
}
function f4(){
	var v= document.getElementById('n1').value;
	var a=0;
	var t ='Chetan';
	for(a=1; a<=v; a++){
		t=t+' \n  '+a;
	}
		document.getElementById('s1').textContent=t;
	     console.log(t);
}