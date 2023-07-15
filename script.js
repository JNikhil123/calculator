let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value = string;
        }
        else if(e.target.innerHTML == '√'){
            string=Math.sqrt(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'sin'){
            string=Math.sin(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'cos'){
            string=Math.cos(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'tan'){
            string=Math.tan(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'ln'){
            string=Math.log(string);
            input.value = string;
        }
        else if(e.target.innerHTML == '^2'){
            string=Math.pow(string, 2);
            input.value = string;
        }
        else if(e.target.innerHTML == '∛'){
            string=Math.pow(string, 1/3);
            input.value = string;
        }
        else if(e.target.innerHTML == '^3'){
            string=Math.pow(string, 3);
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1);
            input.value = string;  
        }
        else{
            string  += e.target.innerHTML;
            input.value = string;
        }
    })
})