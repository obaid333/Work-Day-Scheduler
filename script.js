let todayDate = dayjs().format('dddd - DD of MMMM YYYY'); // todays date using day.js
let storedData = JSON.parse(localStorage.getItem(todayDate)) || {}; // Use an empty object as a default value if no data is stored

let allTimesArray = [
    {
        name: "9am",
        time: "9:00",
        userTask: storedData["9am"] || ""
    },
    {
        name: "10am",
        userTask: storedData["10am"] || ""
    },
    {
        name: "11am",
        userTask: storedData["11am"] || ""
    },
    {
        name: "12pm",
        userTask: storedData["12pm"] || ""
    },
    {
        name: "1pm",
        userTask: storedData["1pm"] || ""
    },
    {
        name: "2pm",
        userTask: storedData["2pm"] || ""
    },
    {
        name: "3pm",
        userTask: storedData["3pm"] || ""
    },
    {
        name: "4pm",
        userTask: storedData["4pm"] || ""
    },
    {
        name: "5pm",
        userTask: storedData["5pm"] || ""
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

