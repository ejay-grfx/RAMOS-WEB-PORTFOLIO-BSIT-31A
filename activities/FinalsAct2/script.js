const message = document.getElementById("message")
const button = document.getElementById("button1")
const button2 = document.getElementById("button2")

const Profile = document.getElementById("Profile")
const Grades = document.getElementById("Grades")
const Schedule = document.getElementById("Schedule")

function showmessage(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking")
        }, 2000)
    })
}

button.addEventListener("click", function(){
    message.innerHTML = "Loading...";
    message.style.color = "red"
    showmessage()

    .then(function(result){
        message.innerHTML = "checking"
        message.style.color = "green"
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("checking")
            },1000)
        })
    })

    .then(function(result){
        message.innerHTML = "Please Wait..."
        message.style.color = "violet"
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Please Wait")
            },2000)
        })
    })

    .then(function(result){
        message.innerHTML = "loading assets..."
        message.style.color = "brown"
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Please Wait")
            },2000)
        })
    })
   
});

button2.addEventListener("click", function(){
    message.innerHTML = "Loading Dashboard...";

    Profile.innerHTML = "Profile: Waiting";
    Grades.innerHTML = "Grades: Waiting";
    Schedule.innerHTML = "Schedule: Waiting";
    button.style.backgroundColor ="red"
    button2.style.backgroundColor = "green"

    const ProfilePromise =  new Promise(function(resolve){
        setTimeout(function(){
            Profile.innerHTML = "Profile:Loaded";

            resolve();
        }, 1000)
    })

    const GradesPromise =  new Promise(function(resolve){
        setTimeout(function(){
            Grades.innerHTML = "Grades:Loaded";

            resolve();
        }, 2000)
    })

    const SchedulePromise =  new Promise(function(resolve){
        setTimeout(function(){
            Schedule.innerHTML = "Schedule:Loaded";

            resolve();
        }, 2000)
    });

    Promise.all([ProfilePromise, GradesPromise, SchedulePromise]).then(function(){
        message.innerHTML = "Dashboard Loaded!";
    });
});
