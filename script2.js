function lw(x){
        var xhr = new XMLHttpRequest();
        var y = document.getElementById("p1").innerHTML;
	var out = "";
        if (y === "Enter image:tag"){
        	var out = "docker run -dit ";
        }
        if (y === "Enter container name/ID to remove"){
                var out = "docker rm --force ";
        }
	if (x === undefined){
		var i = out.concat(document.getElementById("in1").value);
	}
	else{
		var i = x;
	}
        xhr.open("GET","http://192.168.0.103/cgi-bin/Docker.py?x="+i,true);
        xhr.send();
        xhr.onload = function( ){
	var out = xhr.responseText;
	document.getElementById('id1').innerHTML = out;
                }
	document.getElementById('p1').innerHTML = "Write your code here:";
}

function lw1(x){
	document.getElementById('p1').innerHTML = x;
}
