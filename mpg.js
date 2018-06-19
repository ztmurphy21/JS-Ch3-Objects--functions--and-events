	var $ = function (id){
		return document.getElementById(id);
		}
	var calculateMpg = function(){
		var miles = parseFloat($("miles").value);
		var gallons = parseFloat($("gallons").value);
		if(isNaN(miles) || isNaN(gallons)){
			alert("Both entries must be numeric");
		} else{
			var mpg = miles / gallons;
			$("mpg").value = mpg.toFixed(1);
		}
	}
	window.onload = function () {
		$("calculate").onclick = calculateMpg;
		$("miles").focus();
	}