let allTimesArray = [
    {
        name: "9am",
        time: "9:00",
        active: true,
        userTask: ""
    },
    {
        name: "10am",
        time: "10:00",
        active: true,
        userTask: ""
    },
    {
        name: "11am",
        time: "11:00",
        active: true,
        userTask: ""
    },
    {
        name: "12pm",
        time: "12:00",
        active: true,
        userTask: ""
    },
    {
        name: "1pm",
        time: "13:00",
        active: true,
        userTask: ""
    },
    {
        name: "2pm",
        time: "14:00",
        active: true,
        userTask: ""
    },
    {
        name: "3pm",
        time: "15:00",
        active: true,
        userTask: ""
    },
    {
        name: "4pm",
        time: "16:00",
        active: true,
        userTask: ""
    },
    {
        name: "5pm",
        time: "17:00",
        active: true,
        userTask: ""
    }
];

let mainContainer = document.getElementById("mainContainer");


allTimesArray.forEach(object => {
    
    let mainDiv = document.createElement('div');   
    mainDiv.textContent = object.name;
    mainDiv.setAttribute("id", object.time);
    mainContainer.appendChild(mainDiv);
});


