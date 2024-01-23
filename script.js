let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js
JSON.parse(localStorage.getItem(todayDate)); // Use an empty object as a default value if no data is stored

let allTimesArray = [
    {
        name: "9am",
        userTask: []
    },
    {
        name: "10am",
        userTask: []
    },
    {
        name: "11am",
        userTask: []
    },
    {
        name: "12pm",
        userTask: []
    },
    {
        name: "1pm",
        userTask: []
    },
    {
        name: "2pm",
        userTask: []
    },
    {
        name: "3pm",
        userTask: []
    },
    {
        name: "4pm",
        userTask: []
    },
    {
        name: "5pm",
        userTask: []
    }
];

let mainContainer = document.getElementById("mainContainer");
let currentDay = document.getElementById("currentDay");
//let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js



currentDay.textContent = todayDate; //todays date at the top


allTimesArray.forEach(object => {
    
    let mainDiv = document.createElement("div");   
    let timeDiv = document.createElement("div");    
    let userInputDiv = document.createElement("input");
    let saveDiv = document.createElement("button");

    timeDiv.textContent = object.name;
    saveDiv.setAttribute("id", "saveBtn-"+object.name)
    saveDiv.textContent = "Save";


    //userInputDiv.innerHTML = `<class="form-control form-control-lg" id="inputForm" type="text" placeholder="What Should You be doing at ${object.name}?">`;  //'readonly'//
    userInputDiv.setAttribute("id", `inputForm-${object.name}`);
    userInputDiv.setAttribute("class", "form-control form-control-lg");
    userInputDiv.setAttribute("placeholder", `What should you be doing at ${object.name}?`);
    userInputDiv.setAttribute("type", "text")

  
    
    
    
    mainDiv.appendChild(timeDiv);
    mainDiv.appendChild(userInputDiv);
    mainDiv.appendChild(saveDiv);


    mainDiv.setAttribute("id", object.name);
    mainContainer.appendChild(mainDiv);

    //push what user writes in input to userTask key
    let userValue = document.getElementById(`inputForm-${object.name}`).value;
      $(`#saveBtn-${object.name}`).on("click", function () {     
          object.userTask.push(userValue);
          localStorage.setItem(todayDate, JSON.stringify(allTimesArray));
      });
    
});

//localStorage.setItem(todayDate, JSON.stringify(allTimesArray));

