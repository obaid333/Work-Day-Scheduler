let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js
JSON.parse(localStorage.getItem(todayDate));

let allTimesArray = [
    {
        name: "9am",
        time: "9:00",
        userTask: ""
    },
    {
        name: "10am",
        time: "10:00",
        userTask: ""
    },
    {
        name: "11am",
        time: "11:00",
        userTask: ""
    },
    {
        name: "12pm",
        time: "12:00",
        userTask: ""
    },
    {
        name: "1pm",
        time: "13:00",
        userTask: ""
    },
    {
        name: "2pm",
        time: "14:00",
        userTask: ""
    },
    {
        name: "3pm",
        time: "15:00",
        userTask: ""
    },
    {
        name: "4pm",
        time: "16:00",
        userTask: ""
    },
    {
        name: "5pm",
        time: "17:00",
        userTask: ""
    }
];

let mainContainer = document.getElementById("mainContainer");
let currentDay = document.getElementById("currentDay");
//let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js



currentDay.textContent = todayDate; //todays date at the top


allTimesArray.forEach(object => {
    
    let mainDiv = document.createElement("div");   
    let timeDiv = document.createElement("div");    
    let userInputDiv = document.createElement("form");
    let saveDiv = document.createElement("button");

    timeDiv.textContent = object.name;
    saveDiv.setAttribute("id", "saveBtn")
    saveDiv.textContent = "Save";


    userInputDiv.innerHTML = `<input class="form-control form-control-lg" id="inputForm" type="text" placeholder="What Should You be doing at ${object.name}?">`;  //'readonly'//
    $("#inputForm").on("input", function(event) {
        let userInput = event.target.value;
        //object.userTask.push(userInput);
    })
    

    $("#saveBtn").on( "click", function() {
        //object.userTask.push(userInput);
        localStorage.setItem(todayDate, JSON.stringify(allTimesArray));
    });
    
    
    mainDiv.appendChild(timeDiv);
    mainDiv.appendChild(userInputDiv);
    mainDiv.appendChild(saveDiv);


    mainDiv.setAttribute("id", object.time);
    mainContainer.appendChild(mainDiv);
});

//localStorage.setItem(todayDate, JSON.stringify(allTimesArray));

