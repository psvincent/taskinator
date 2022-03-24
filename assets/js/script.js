// The El at the end of this buttonEl variable represents that it is a DOM element (Document Object  Model) Naming it ButtonEl helps you keep track of which variables store DOM elements.
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

// This function handles the task of making the new li element and adding a class to it and appending it to the ul so it doesn't have to get jumbled up in the addEventListener.
var createTaskHandler = function() {
    // This variable creates a new li element.
    var listItemEl = document.createElement("li");
    // This .className assigns the listItemEl variable a class so it is styled correctly.
    listItemEl.className = "task-item";
    // This .textContent is the text that is in the newly created li.
    listItemEl.textContent = "This is a new task.";
    // this .appendChild takes the tasksToDoEl variable that is assigned to the ul and puts the newly created li that was made above in it.
    tasksToDoEl.appendChild(listItemEl);
};

// The addEventListener method can be used by an element object- in this case the buttonEl object.
buttonEl.addEventListener("click", createTaskHandler);
    























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