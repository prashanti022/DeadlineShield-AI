
let tasks=[];

function addTask(){

let name=document.getElementById("task").value;
let date=document.getElementById("date").value;
let priority=document.getElementById("priority").value;


if(name==""){
alert("Enter task");
return;
}


let today=new Date();
let due=new Date(date);

let days=Math.ceil(
(due-today)/(1000*60*60*24)
);


let status;


if(days<=0){
status="🔥 Emergency";
}

else if(days==1){
status="⚠️ High Priority";
}

else{
status="✅ Normal";
}


tasks.push({
name,
date,
priority,
status,
done:false
});


display();

generatePlan();

}


function display(){

let list=document.getElementById("taskList");

list.innerHTML="";


let completed=0;


tasks.forEach((t,i)=>{


if(t.done)
completed++;


list.innerHTML+=`

<div class="task ${t.done?'completed':''}">

<h3>${t.name}</h3>

<p>${t.status}</p>

<p>Priority: ${t.priority}</p>

<button onclick="completeTask(${i})">
Complete
</button>

</div>

`;

});


document.getElementById("total").innerHTML=tasks.length;

document.getElementById("complete").innerHTML=completed;


let score=tasks.length?
Math.round((completed/tasks.length)*100):0;


document.getElementById("score").innerHTML=score+"%";

}



function completeTask(i){

tasks[i].done=true;

display();

}



function generatePlan(){

if(tasks.length){

document.getElementById("planner").innerHTML=

"Today's Plan:<br>✔ Finish urgent tasks first<br>✔ Use focus timer<br>✔ Review before deadline";

}

}



function toggleMode(){

document.body.classList.toggle("dark");

}



let seconds=1500;


function startTimer(){

let timer=setInterval(()=>{

let min=Math.floor(seconds/60);

let sec=seconds%60;


document.getElementById("timer").innerHTML=
`${min}:${sec}`;


seconds--;


if(seconds<0){

clearInterval(timer);

alert("Focus session completed!");

}

},1000);

}
