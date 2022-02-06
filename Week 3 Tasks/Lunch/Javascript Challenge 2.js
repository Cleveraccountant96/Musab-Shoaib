function random_item(myArray)
{
  
return myArray[Math.floor(Math.random()*myArray.length)];
     
}

var myArray = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
var message = "The paying for dinner is ";
document.getElementById("name").innerHTML = "the person paying for dinner is " + random_item(myArray);

/*
function random_name(names)
{
  
return names[Math.floor(Math.random()*names.length)];
     
}

var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
*/