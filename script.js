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
//let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js



currentDay.textContent = todayDate; //todays date at the top


allTimesArray.forEach(object => {
    
    let mainDiv = document.createElement("div");   
    let timeDiv = document.createElement("div");    
    let userInputDiv = document.createElement("form");
    let saveDiv = document.createElement("button");

    timeDiv.textContent = object.name;
    saveDiv.setAttribute("id", "saveBtn-" + object.name)
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


    mainDiv.setAttribute("id", object.name);
    mainContainer.appendChild(mainDiv);
});

//localStorage.setItem(todayDate, JSON.stringify(allTimesArray));

