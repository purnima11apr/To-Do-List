const inputBox = document.getElementById("input-box"); 
const list = document.getElementById("list");

function addTask(){ //calling function on click of button
  
    if(inputBox.value === ''){  //if input is empty
        alert("You must write something");
    } else {    //if user type 
        let li = document.createElement("li");  //create list
        li.innerHTML = inputBox.value;  //giving value to list
        list.appendChild(li);  //adding list in container
        let span = document.createElement("span"); //creating span for cross sign to delete list
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData(); //calling this func to save data
}

list.addEventListener("click" , function(e){ //adding listner for list to check pr uncheck
   if(e.target.tagName === "LI"){    //if click on list it add class checked to li
    e.target.classList.toggle("checked");
    saveData(); //calling this func to save data
   } else if(e.target.tagName === "SPAN"){  //if click on span (cross) it'll remove the list
        e.target.parentElement.remove();
        saveData(); //calling this func to save data
   }
} , false)

function saveData() { //make this function so data will save and will be there if we refresh the page
  
    localStorage.setItem("data" , list.innerHTML);
}

function showTask() {  //to show task whenever we open the site
  
    list.innerHTML = localStorage.getItem("data");
}

showTask();