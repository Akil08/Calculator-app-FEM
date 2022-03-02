const displaySm = document.querySelector(".display-sm");
const displayBg = document.querySelector(".display-bg");
const numbers = document.querySelectorAll(".number");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const into = document.querySelector(".into");
const del = document.querySelector(".del");
const euqal = document.querySelector(".equal");
const reset = document.querySelector(".reset");
const myRange = document.getElementById("myRange");
let bigDispalyContext = "";
let calculation;

myRange.addEventListener("click",()=>{
    
    if(myRange.value === "1"){
        document.querySelector(".theme").style.color = "hsl(0,0%,100%)";
        var color = "hsl(6,63%,50%)";
        myRange.style.setProperty("--color",color);
        myRange.style.backgroundColor = "hsl(223,31%,20%)";
            document.querySelector("h1").style.color = "hsl(0, 0%, 100%)";
            numbers.forEach(item=>{
                item.style.color = "hsl(221, 14%, 31%)";
                item.style.backgroundColor = "hsl(30, 25%, 89%)";
                item.style.boxShadow = "0 6px 0px -1px hsl(28, 16%,65%)";
            })
            plus.style.backgroundColor = "hsl(45, 7%, 89%)";
            plus.style.color = "hsl(60, 10%, 19%)";
            plus.style.boxShadow = "0 6px 0px -1px hsl(28, 16%,65%)";
            minus.style.backgroundColor = "hsl(45, 7%, 89%)";
            minus.style.color = "hsl(60, 10%, 19%)";
            minus.style.boxShadow = "0 6px 0px -1px hsl(28, 16%,65%)";
            divide.style.backgroundColor = "hsl(45, 7%, 89%)";
            divide.style.color = "hsl(60, 10%, 19%)";
            divide.style.boxShadow = "0 6px 0px -1px hsl(28, 16%,65%)";
            into.style.backgroundColor = "hsl(45, 7%, 89%)";
            into.style.color = "hsl(60, 10%, 19%)";
            into.style.boxShadow = "0 6px 0px -1px hsl(28, 16%,65%)";
            document.querySelector("body").style.backgroundColor = "hsl(222, 26%, 31%)";
            document.querySelector(".display").style.backgroundColor = "hsl(224,36%,15%)";
            document.querySelector(".display").style.color = "hsl(0,0%,100%)";
            document.querySelector(".buttons").style.backgroundColor = "hsl(223, 31%, 20%)";
            del.style.backgroundColor = "hsl(225, 21%, 49%)";
            del.style.boxShadow = "0px 6px 0px -1px hsl(224,28%,35%)";
            reset.style.backgroundColor = "hsl(225, 21%, 49%)";
            reset.style.boxShadow = "0px 6px 0px -1px hsl(224,28%,35%)";
            euqal.style.backgroundColor = "hsl(6, 63%, 50%)";
            euqal.style.boxShadow = "0px 6px 0px -1px hsl(25,99%,27%)";
        }
    else if(myRange.value === "2"){
    document.querySelector(".theme").style.color = "hsl(60, 10%, 19%)";
    var color = "hsl(25,98%,40%)";
    myRange.style.setProperty("--color",color);
    myRange.style.backgroundColor = "hsl(0,5%,81%)";
        document.querySelector("h1").style.color = "hsl(60, 10%, 19%)";
        numbers.forEach(item=>{
            item.style.color = "hsl(60, 10%, 19%)";
            item.style.backgroundColor = "hsl(45, 7%, 89%)";
            item.style.boxShadow = "0 6px 0px -1px hsl(35, 11%, 61%)";
        })
        plus.style.backgroundColor = "hsl(45, 7%, 89%)";
        plus.style.color = "hsl(60, 10%, 19%)";
        plus.style.boxShadow =  "0 6px 0px -1px hsl(35, 11%, 61%)";
        minus.style.backgroundColor = "hsl(45, 7%, 89%)";
        minus.style.color = "hsl(60, 10%, 19%)";
        minus.style.boxShadow =  "0 6px 0px -1px hsl(35, 11%, 61%)";
        divide.style.backgroundColor = "hsl(45, 7%, 89%)";
        divide.style.color = "hsl(60, 10%, 19%)";
        divide.style.boxShadow =  "0 6px 0px -1px hsl(35, 11%, 61%)";
        into.style.backgroundColor = "hsl(45, 7%, 89%)";
        into.style.color = "hsl(60, 10%, 19%)";
        into.style.boxShadow =  "0 6px 0px -1px hsl(35, 11%, 61%)";
        document.querySelector("body").style.backgroundColor = "hsl(0, 0%, 90%)";
        document.querySelector(".display").style.backgroundColor = "hsl(0,0%,93%)";
        document.querySelector(".display").style.color = "hsl(60,10%,19%)";
        document.querySelector(".buttons").style.backgroundColor = "hsl(0, 5%, 81%)";
        del.style.backgroundColor = "hsl(185,42%,37%)";
        del.style.boxShadow = "0 6px 0px -1px hsl(185,58%,25%)";
        reset.style.backgroundColor = "hsl(185,42%,37%)";
        reset.style.boxShadow = "0 6px 0px -1px hsl(185,58%,25%)";
        euqal.style.backgroundColor = "hsl(25,98%,40%)";
        euqal.style.boxShadow = "0 6px 0px -1px hsl(25,99%,27%)";
    }
    else if(myRange.value === "3"){
        document.querySelector(".theme").style.color = "hsl(52, 100%, 62%)";
        var color = "hsl(176,100%,44%)";
        myRange.style.setProperty("--color",color);
        myRange.style.backgroundColor = "hsl(268, 71%, 12%)";
        document.querySelector("h1").style.color = "hsl(52, 100%, 62%)";
        numbers.forEach(item=>{
            item.style.color = "hsl(52, 100%, 62%)";
            item.style.backgroundColor = "hsl(268,47%,21%)";
            item.style.boxShadow = "0 6px 0px -1px hsl(290, 70%, 36%)";
        })
        plus.style.backgroundColor =  "hsl(281, 89%, 26%)";
        plus.style.color =  "hsl(52, 100%, 62%)";
        plus.style.boxShadow =  "0 6px 0px -1px hsl(285, 91%, 52%)";
        minus.style.backgroundColor =  "hsl(281, 89%, 26%)";
        minus.style.color =  "hsl(52, 100%, 62%)";
        minus.style.boxShadow =  "0 6px 0px -1px hsl(285, 91%, 52%)";
        divide.style.backgroundColor =  "hsl(281, 89%, 26%)";
        divide.style.color =  "hsl(52, 100%, 62%)";
        divide.style.boxShadow =  "0 6px 0px -1px hsl(285, 91%, 52%)";
        into.style.backgroundColor =  "hsl(281, 89%, 26%)";
        into.style.color =  "hsl(52, 100%, 62%)";
        into.style.boxShadow =  "0 6px 0px -1px hsl(285, 91%, 52%)";
        document.querySelector("body").style.backgroundColor = "hsl(268, 75%, 9%)";
        document.querySelector(".display").style.backgroundColor = "hsl(268,71%,12%)";
        document.querySelector(".display").style.color = "hsl(52,100%,62%)";
        document.querySelector(".buttons").style.backgroundColor = "hsl(268, 71%, 12%)";
        del.style.backgroundColor = "hsl(281,89%,26%)";
        del.style.boxShadow = "0 6px 0px -1px hsl(290, 70%, 36%)";
        reset.style.backgroundColor = "hsl(281,89%,26%)";
        reset.style.boxShadow = "0 6px 0px -1px hsl(290,70%,36%)";
        euqal.style.color = "hsl(198,20%,13%)"
        euqal.style.backgroundColor = "hsl(176,100%,44%)";
        euqal.style.boxShadow = "0 6px 0px -1px hsl(177,92%,70%)";
    }
})


// Event listener to all numbers
numbers.forEach(item => {
    item.addEventListener("click",(e)=>{
        bigDispalyContext += e.target.innerText;
        displayBg.innerHTML = bigDispalyContext;
    });
})


// event listener to all operators
plus.addEventListener("click",()=>{
    prepareDisplay(displayBg.innerHTML,"+");
})
minus.addEventListener("click",()=>{
    prepareDisplay(displayBg.innerHTML,"-");
})
divide.addEventListener("click",()=>{
    prepareDisplay(displayBg.innerHTML,"/");
})
into.addEventListener("click",()=>{
    prepareDisplay(displayBg.innerHTML,"*");
})


// equal but
euqal.addEventListener("click",()=>{
    start = true;
    let operator = displaySm.innerHTML;
    operator = operator[operator.length-1];
    calculation = eval (  parseFloat(displaySm.innerHTML) + operator + parseFloat(displayBg.innerHTML));
    displayBg.innerHTML = parseInt(calculation) === calculation ? calculation : calculation.toFixed(2);
    displaySm.innerHTML = "";
    bigDispalyContext = "";
})

del.addEventListener("click",()=>{
    if( bigDispalyContext != "" ) {
        let newText = bigDispalyContext;
        displayBg.innerHTML = newText.slice(0,newText.length-1);
        bigDispalyContext = displayBg.innerHTML;
    }   
})

reset.addEventListener("click",()=>{
    bigDispalyContext =  "";
    displayBg.innerHTML = "";
    displaySm.innerHTML = "";
    calculation = "";
})


function prepareDisplay( text,operator ){
    displaySm.innerHTML = text  + operator;
    displayBg.innerHTML = "";
    bigDispalyContext = "";
}









