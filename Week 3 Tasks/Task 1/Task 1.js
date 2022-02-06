function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
str1 = "musab";
str2 = "shoaib"
document.getElementById("name").innerHTML="My name is " + capFirst(str1) + " " + capFirst(str2);