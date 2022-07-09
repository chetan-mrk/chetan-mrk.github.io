function smpint(){
   var p = document.getElementById('n1').value;
   var t = document.getElementById('n2').value;
   var r = document.getElementById('n3').value;
   var ptr = parseInt(p)*parseInt(t)*parseInt(r)/100;
   document.getElementById('n4').value=ptr;
}