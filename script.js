let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js


var allTimesArrayEmpty = [
    {
        name: "9am",
        userTask: ""
    },
    {
        name: "10am",
        userTask: ""
    },
    {
        name: "11am",
        userTask: ""
    },
    {
        name: "12pm",
        userTask: ""
    },
    {
        name: "1pm",
        userTask: ""
    },
    {
        name: "2pm",
        userTask: ""
    },
    {
        name: "3pm",
        userTask: ""
    },
    {
        name: "4pm",
        userTask: ""
    },
    {
        name: "5pm",
        userTask: ""
    }
];


let mainContainer = document.getElementById("mainContainer");
let currentDay = document.getElementById("currentDay");


currentDay.textContent = todayDate; //todays date at the top

var allTimesArray = JSON.parse(localStorage.getItem(todayDate));

if (allTimesArray === null) {
    allTimesArray = allTimesArrayEmpty;
};


allTimesArray.forEach(object => {
    
    let mainDiv = document.createElement("div");   
    let timeDiv = document.createElement("div");    
    let userInputDiv = document.createElement("input");
    let saveDiv = document.createElement("button");
    let currentTimeNow = dayjs().format('H');
    
   
    if (object.name < currentTimeNow) {
        userInputDiv.style.background = "gray";
        userInputDiv.setAttribute("readonly");
      }else if (object.name === currentTimeNow) {
          userInputDiv.style.background = "amber";
          userInputDiv.setAttribute("readonly");
      }else if (object.name > currentTimeNow){
          userInputDiv.style.background = "green";
      }


    timeDiv.textContent = object.name;
    saveDiv.setAttribute("id", "saveBtn-"+object.name)
    saveDiv.textContent = "Save";


    userInputDiv.setAttribute("id", `inputForm-${object.name}`);
    userInputDiv.setAttribute("class", "form-control form-control-lg");
    userInputDiv.setAttribute("placeholder", `What should you be doing at ${object.name}?`);
    userInputDiv.setAttribute("type", "text");
    userInputDiv.value = object.userTask;


    mainDiv.appendChild(timeDiv);
    mainDiv.appendChild(userInputDiv);
    mainDiv.appendChild(saveDiv);


    mainDiv.setAttribute("id", object.name);
    mainContainer.appendChild(mainDiv);
      
    $(`#saveBtn-${object.name}`).on("click", function () {    
        let userData = document.getElementById(`inputForm-${object.name}`);
        let userValue = userData.value; 
          object.userTask = userValue;
          localStorage.setItem(todayDate, JSON.stringify(allTimesArray));
      });


});