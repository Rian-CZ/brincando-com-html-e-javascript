function verificaAprovação(){
    let nota= document.getElementById("nota").value; 
    console.log("Nota inserida", nota);

    if(nota>=6){
        document.getElementById("resultado").innerHTML= "Aluno(a) aprovado"
        alert("Aluno(a) aprovado")
    }
    else{
        document.getElementById("nota").innerHTML="Aluno(a) reprovado, burrão"
        alert("Aluno(a) reprovado, burro!!!")
    }
}
