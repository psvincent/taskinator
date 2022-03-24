// The El at the end of this buttonEl variable represents that it is a DOM element (Document Object  Model) Naming it ButtonEl helps you keep track of which variables store DOM elements.
//var buttonEl = document.querySelector("#save-task");

var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// This function handles the task of making the new li element and adding a class to it and appending it to the ul so it doesn't have to get jumbled up in the addEventListener.
var createTaskHandler = function(event) {

    // The event.preventDefault makes sure the browser doesn't reload the page everytime the function is called.
    event.preventDefault();

    // This pulls the input with the name equal to "task-name" and then also takes only the value from it instead of the whole object and the value is what the user enters.
    // The value of the variable taskNameInput will now be whatever the user enters in the input element.
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // This pulls the select value the user selects on the dropdown menu.
    // The value of the variable taskTypeInput is now whatever the user enters on the dropdown select element.
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    // This variable creates a new li element.
    var listItemEl = document.createElement("li");
    // This .className assigns the listItemEl variable a class so it is styled correctly.
    listItemEl.className = "task-item";
    // This taskInfoEl variable creates a div that will hold both the users input value and select value.
    var taskInfoEl = document.createElement("div");
    // This assigns the class to the div container above.
    taskInfoEl.className = "task-info";
    // This gets the actual content onto the different divs and styles them accordingly using classes and uses the variables to enter the correct values where they need to be.
    // This also uses .innerHTML which allows you to write html with the tags and everything in it where as .textContent only allows you to enter text without html tags.
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    // This .appendChild takes the listItemEl which is the new li and puts the div with the user given values inside of it.
    listItemEl.appendChild(taskInfoEl);
    // this .appendChild takes the tasksToDoEl variable that is assigned to the ul and puts the newly created li that was made above in it.
    tasksToDoEl.appendChild(listItemEl);
    // The li is bigger than the div so the listItemElvariable is bigger than the taskInfoEl variable.
};

// The on submit listens for either a button to be clicked with a type attribute value of submit or when a user presses enter on their keyboard.
formEl.addEventListener("submit", createTaskHandler);

// The addEventListener method can be used by an element object- in this case the buttonEl object.
// buttonEl.addEventListener("click", createTaskHandler);
    























// <html>
// <body>

// **DESCRIBES** This is a list of villains and you are going to add a villain to it using js.

// <ul class="list-group" id="villains">
// <li class="list-group-item">Darth Vader</li>
// <li class="list-group-item">Odium</li>
// <li class="list-group-item">Gerald Tarrant</li>
// <li class="list-group-item">Voldemort</li>
// <script>

// **DESCRIBES** This listEl variable selects the ul by id #villains.

// var listEl = document.querySelector("#villains");

// **DESCRIBES** This villainListEl variable creates an li element inside the ul.

// var villainListEl = document.createElement("li");

// **DESCRIBES** This .textContent adds the text Thanos to the variable villainListEl which is the empty li.

// villainListEl.textContent = "Thanos";

// **DESCRIBES** This .className styles it the same as the other lis so it looks the same as everything else in the list.

// villainListEl.className = "list-group-item";

// **DESCRIBES** The .appendChild takes the parent element which in this case is the ul which has the class of villains so is connected to the variable listEl and adds a child element to it which is an li which is attached to villainListEl.
// **DESCRIBES** Basically the .appendChild is pretty much actually creating the new li "Thanos".

// listEl.appendChild(villainListEl);
// </script>
// </body>
// </html>