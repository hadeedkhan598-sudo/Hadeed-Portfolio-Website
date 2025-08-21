let icon = document.getElementById("icon");
let menu = document.getElementById("resmenu");
icon.addEventListener("click", function(){
    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "block";
    }
    else{
         menu.style.display = "none";
    }
})