

/*-----------------------student object--------------------------*/
var student = {
		number: '0414',
		name: ['John', 'Doe'],
		dept:'Full Stack',
		studentInfo: function(){
			alert("student name:" + this.name[0] + ' ' + this.name[1] + ", student id:" + this.number + ", department:" + this.dept);
		}
};
/*---------------------------------------------------------------*/



/*--------------------------animal object constructor---------------------*/
function Animal(name, age, kind){
	this.name = name;
	this.age = age;
	this.kind = kind;
	this.details = function(){
		alert("animal name:" + this.name + ", animal age:" + this.age + ", kind of animal:" + this.kind);
	};
}
/*-----------------------------------------------------------------------*/




/*--------------------cat object--------------------------------------*/
var catObject = new Animal('Daisy', 6, 'cat');
function catCall(){
	catObject.details();
}
/*---------------------------------------------------------------------*/




/*-----------------dog object------------------------------------------*/
var dogObject;
dogObject = new Animal();
dogObject.name = 'Bingo';
dogObject.age = 7;
dogObject.kind = 'dog';


function dogCall(){
	dogObject.details();
}
/*---------------------------------------------------------------------*/


/*------------------------change dog object name------------------------*/
function changeDogName(){
	var newName = document.getElementById('entryPoint').value;
	dogObject.name = newName;
	dogCall();
}
/*-----------------------------------------------------------------------*/




/*----------------------add new property code------------------------------*/
function update(){
	var newProp = document.getElementById("propName").value;
	var newValue = document.getElementById("propValue").value;
	dogObject[newProp] = newValue;
	alert(JSON.stringify(dogObject));
}
/*--------------------------------------------------------------------------*/


/*--------------------------password checker--------------------------------*/
var passwordChecker = {};
passwordChecker.actualPassword = 'easy';
passwordChecker.dud = '';
passwordChecker.show = function(){
	alert(this.dud + " -->Wrong Entry appended");
};

function confirm(){
	var entry = "" + document.getElementById('pword').value;
	var compare = "" + passwordChecker.actualPassword;
	if(entry === compare){
		alert('successful login!');
	}else{
		passwordChecker.dud = passwordChecker.dud + " " + entry;
		alert("unsuccesful login!");
		passwordChecker.show(); 
	}
}
/*---------------------------------------------------------------------------*/