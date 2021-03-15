var myArrayNumeros= Array();
function registarNumero(){
    var num= parseInt(document.getElementById('num').value);
    myArrayNumeros.push(num);
    console.log(myArrayNumeros);
    document.getElementById('num').value='';
    document.getElementById('num').focus();
    listarNumero();
    operaciones();
}

function listarNumero(){
    var salida='';
    for(var pos=0; pos<=myArrayNumeros.length-1; pos++){
        salida+='<tr><td>'+myArrayNumeros[pos]+'</td></tr>';
        console.log(salida);
    }
    document.getElementById('cuerpo').innerHTML=salida;
}

function operaciones(){
    var salida1='';
    var sum=0;
    for(i in myArrayNumeros)
      sum+=myArrayNumeros[i];
    salida1+='<tr><td>'+'Suma'+'</td><td>'+sum+ '</td></tr>';
    salida1+='<tr><td>'+'Cantidad Elemntos'+'</td><td>'+myArrayNumeros.length+ '</td></tr>';
    
    document.getElementById('cuerpo1').innerHTML=salida1;
}