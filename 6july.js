function asc(){
     var nl = document.getElementById('num1').value;
	 var n2 = document.getElementById('num2').value;
	 if(n2.length < n1.length ){
	 document.getElementById('num1').value=n2;
	 document.getElementById('num2').value=n1;
}}
function dsc(){
     var bl = document.getElementById('num1').value;
	 var b2 = document.getElementById('num2').value;
	 if(b2.length > b1.length){
	 document.getElementById('num1').value=b2;
	 document.getElementById('num2').value=b1;
	 
}}