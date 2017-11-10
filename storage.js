// SET
document.getElementById("buttons").addEventListener("click",function(evt) {
    var target = evt.target;
    if (target.id == 'button1'){
    	if (document.getElementById("key11").value.length == 0 || document.getElementById("key12").value.length == 0 )
    	{
    			alert("Error");
    	}
    	else{
    		//////////////////BIND////////////////////
    		var obj1= {name :document.getElementById("key11").value};
    		var print1 =function(a){
    				return sessionStorage.setItem(obj1.name,a);
    		}
    		var bound=print1.bind(obj1);
    		console.log(bound(document.getElementById("key12").value));
		alert("added");}
    }	
	
	if (target.id == 'button2'){
		if (document.getElementById("key11").value.length == 0 || document.getElementById("key12").value.length == 0 )
    	{
    			alert("Error");
    	}
		else{
			///////////////APPLY///////////////////
			var obj2= {name : document.getElementById("key11").value};
			var print2= function(c){
				return localStorage.setItem(obj2.name,c);
			}
			console.log(print2.apply(this,[document.getElementById("key12").value]));
			alert("added");}
	}
	
	if (target.id == 'button12'){
		//////////////CALL/////////////////////
		var obj= {name :document.getElementById("key11").value};
		var print3 = function(b){
			return document.cookie = obj.name + '=' + b;
		};
		console.log(print3.call(this, document.getElementById("key12").value));
		alert("added");
	}
},false);
//GET

document.getElementById("buttons1").addEventListener("click",function(evt1) {
    var target1 = evt1.target;
    if (target1.id == 'button3'){
    	
		console.log(sessionStorage.getItem(document.getElementById("key21").value));
		
		alert("received");
    }	
	if (target1.id == 'button4'){
		
		console.log(localStorage.getItem(document.getElementById("key21").value));
		alert("received");
	}
},false);
//GETALL
document.getElementById("buttons2").addEventListener("click",function(evt2) {
	var target2 = evt2.target;
	if(target2.id == 'button5'){
		for (var i = 0; i < sessionStorage.length; i++){
    		console.log(sessionStorage.getItem(sessionStorage.key(i)));
      }
	}

	if(target2.id == 'button6'){
		for (var i = 0; i < localStorage.length; i++){
    		console.log(localStorage.getItem(localStorage.key(i)));
      }
	}

},false);
//DELALL
document.getElementById("buttons3").addEventListener("click",function(evt3) {
	var target3 = evt3.target;
	if(target3.id == 'button7'){
		sessionStorage.clear();
		alert("deleted");
	}

	if(target3.id == 'button8'){
		localStorage.clear();
		alert("deleted");
	}

},false);






