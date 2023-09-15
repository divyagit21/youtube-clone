var menuIcon=document.querySelector(".menu-icon");
var sidebar=document.querySelector(".sidebar");
var container=document.querySelector(".container");

// when we click on menuicon it open small side bar which we created as class and if it is there then it gets closed
// large container to toogle the page when menu close and open
menuIcon.onclick=function(){
     sidebar.classList.toggle("small-sidebar");
     container.classList.toggle("large-container");
}