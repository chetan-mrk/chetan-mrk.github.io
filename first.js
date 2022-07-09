function ct(){
         console.log('Hello');
}
function hello(){
         console.log('Hello Mornig');
}

function display(){
	    var bt = document.getElementById('fs').value;
         console.log('Hello Display'+bt);
}
function clone(){
	    var cl = document.getElementById('fs').value;
        document.getElementById('sc').value= cl;
}

function clr(){
	console.log('clear');
	    document.getElementById('fs').value= '';
	    document.getElementById('sc').value= '';

}
function swp(){
	
	    var  sp= document.getElementById('fs').value;
		var  sp1= document.getElementById('sc').value;
	    document.getElementById('sc').value= sp;
		document.getElementById('fs').value= sp1;

}
