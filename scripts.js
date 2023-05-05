
// this made the next page work 
document.getElementById("submit").onclick=function(){
 document.getElementById("main").style.display = "none";
 document.getElementById("thanks").style.display = "block";
}   

// this part will make the rating work 

document.getElementById("1").onclick=function(){
    document.getElementById("value").innerHTML = "1";
}

document.getElementById("2").onclick=function(){
    document.getElementById("value").innerHTML = "2";
}

document.getElementById("3").onclick=function(){
    document.getElementById("value").innerHTML = "3";
}

document.getElementById("4").onclick=function(){
    document.getElementById("value").innerHTML = "4";
}

document.getElementById("5").onclick=function(){
    document.getElementById("value").innerHTML = "5";
}
