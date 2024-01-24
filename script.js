let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js


var allTimesArrayEmpty = [
    {
        name: "09:00",
        userTask: ""
    },
    {
        name: "10:00",
        userTask: ""
    },
    {
        name: "11:00",
        userTask: ""
    },
    {
        name: "12:00",
        userTask: ""
    },
    {
        name: "13:00",
        userTask: ""
    },
    {
        name: "14:00",
        userTask: ""
    },
    {
        name: "15:00",
        userTask: ""
    },
    {
        name: "16:00",
        userTask: ""
    },
    {
        name: "17:00",
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
    let currentTimeNow = dayjs().format('HH');
 
    
   
    if (parseInt(object.name) < parseInt(currentTimeNow)) {
        userInputDiv.style.background = "gray";
        userInputDiv.setAttribute("readonly", "");
        console.log(parseInt(object.name), parseInt(currentTimeNow));
      }else if (parseInt(object.name) === parseInt(currentTimeNow)) {
          userInputDiv.style.background = "yellow";
          userInputDiv.setAttribute("readonly", "");
      }else if (parseInt(object.name) > parseInt(currentTimeNow)){
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