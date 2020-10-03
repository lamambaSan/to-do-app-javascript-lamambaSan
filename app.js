let submitBtn = document.getElementById("submitBtn");
let displayZone = document.getElementById("displayZone");
let elementCount = 0;
let newInput = document.getElementById("newInput");
function addToDo(){
	elementCount++;
	if(elementCount >= 11){
		elementCount--;
		alert("FINISH YOUR 10 TASKS BEFORE ADDING NEW ONES");
	}else{
		if(newInput.value == " "){
			elementCount--;
			alert("DONT BE LAZY, ADD A TASK");
		}else{
			var text;
			console.log(elementCount);
			var newToDo = document.createElement("button");
			text = elementCount + ". " + newInput.value;
			newToDo.innerText = text;
			newToDo.classList.add("element");
			newToDo.classList.add("animate");
			
			var idAtttribute = "elem"+elementCount;
			console.log(idAtttribute);
			newToDo.setAttribute("id",idAtttribute);
			displayZone.appendChild(newToDo);
			newInput.value = " ";
			newToDo.addEventListener('click', function(){
				newToDo.classList.remove("animate");
				newToDo.classList.add("finished");
			})

		}
	}
	
}
newInput.addEventListener('keypress',function(e){
	if(e.key == "Enter"){
		addToDo();
	}
})
function completed(elem){
	var element = elem;
	elem.remove();
}
