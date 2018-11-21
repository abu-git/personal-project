
/*--------button counter function--------------*/
var count = 0;
function counter(){
	count++;
	return count;
}
/*---------------------------------------------*/
function randToDollars(){
	var current = document.getElementById('rands').value;
	var result = (current * 0.07)
  	document.getElementById('demo').innerHTML = result;
  	//alert(result);
}

function eurosToPounds(num){
	var current = document.getElementById('euros').value;
  	var result = (current * 0.88);
  	document.getElementById('demo2').innerHTML = result;
}
/*--------------------hide/show element -----------*/
function hideShowImage(){
  current = document.getElementById("container");
  if(current.style.display === "none"){
    current.style.display = "block";
  }else{
    current.style.display = "none";
  }
}
/*--------------------------------------------------*/

/*---------------background color change with timer---------------------*/
function backgroundChange(){
	window.setTimeout( "backgroundChange()", 10000); // 10000 milliseconds delay

	var index = Math.round(Math.random() * 9);

	var colorValue = "FFFFFF"; // default color - white (index = 0)

	if(index == 1){
		colorValue = "FFCCCC"; //peach
	}else if(index == 2){
		colorValue = "CCAFFF"; //violet	
	}else if(index == 3){
		colorValue = "A6BEFF"; //lt blue	
	}else if(index == 4){
		colorValue = "99FFFF"; //cyan	
	}else if(index == 5){
		colorValue = "D5CCBB"; //tan
	}else if(index == 6){
		colorValue = "99FF99"; //lt green
	}else if(index == 7){
		colorValue = "FFFF99"; //lt yellow
	}else if(index == 8){
		colorValue = "FFCC99"; //lt orange	
	}else if(index == 9){
		colorValue = "CCCCCC"; //lt grey
	}
	

	document.getElementsByTagName("body")[0].style.backgroundColor = "#" + colorValue;
}

/*---------------------------------------------------------------------------*/

