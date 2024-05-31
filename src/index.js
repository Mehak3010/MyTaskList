const inpb = document.getElementById("inpbox");
const lstcont = document.getElementById("list-container");
function addtask(){
    if (inpb.value===""){
        alert("Input field should not be empty!!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inpb.value;
        lstcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inpb.value ="";
    save()
}
lstcont.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        save()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save()
    }
},false);

function save(){
    localStorage.setItem("data",lstcont.innerHTML);
}

function display(){
    lstcont.innerHTML = localStorage.getItem("data");
}
display();