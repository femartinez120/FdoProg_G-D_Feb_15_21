var myArrayEst= new Array();
var oEst = {
    nom: null,
    ape : null,
    n1 : null,
    n2 : null,
    n3 : null,
}

function guardar(){
    oEst.nom=document.getElementById('nom').value;
    oEst.ape=document.getElementById('ape').value;
    oEst.n1=document.getElementById('n1').value;
    oEst.n2=document.getElementById('n2').value;
    oEst.n3=document.getElementById('n3').value;
    console.log(oEst);
    myArrayEst.push(oEst);
    console.log(myArrayEst);
    limpiarCajas();
    listarEstudiante();

}
function limpiarCajas(){
    document.getElementById('nom').value='';
    document.getElementById('ape').value='';
    document.getElementById('n1').value='';
    document.getElementById('n2').value='';
    document.getElementById('n3').value='';
    document.getElementById('nom').focus();
}
function listarEstudiante(){
    var salida='';
    for(i in myArrayEst){
        salida+='<tr><td>'+myArrayEst[i].nom+'</td><td>'+myArrayEst[i].ape+'</td><td>'+myArrayEst[i].n1+'</td><td>'+myArrayEst[i].n2+'</td><td>'+myArrayEst[i].n3+'</td><td>'+nf(myArrayEst[i].n1,myArrayEst[i].n2,myArrayEst[i].n3)+'</td></tr>';
    }
    document.getElementById('cuerpo').innerHTML=salida;
}
function nf(n1,n2,n3){
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    n3 = parseFloat(n3);
    return (n1+n2+n3)/3;
}