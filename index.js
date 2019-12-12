function operacion(){

var num1= parseInt(document.getElementById("input1").value);
var num2= parseInt(document.getElementById("input2").value);

var radios=document.getElementsByName('cuenta');
var radioset;

for(i=0; i < radios.length;i++){
    if(radios[i].checked){
        radioset=radios[i].value;
        
    }

}

var resultado;
    if(radioset=="resta"){
        resultado= num1 - num2;
        
    }
    else{
        resultado= num1 + num2;
    }

    document.getElementById("resultado").value=resultado;
}
