let  inputs=document.getElementById("inp");
let text=document.querySelector(".text");
function Add(){
    if(inputs.value==""){
    
    alert("you have not enter any task plz add task")
    }else{
        alert("YOU WANT TO ADD THIS TASK Click ON OK")
        let newEle=document.createElement("ul");
        newEle.innerHTML=`${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click",remove);
        function remove(){
            newEle.remove()
            alert("YOU WANT TO DELETE THIS TASK CLICK ON OK")
        }

    }
}