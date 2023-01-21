//---Criando funcao para fazer os cauculos do teorema de pitagoras---//
function Calcula() {
    var catetoOposto = document.getElementById("catetoOposto").value;
    var catetoAdjacente = document.getElementById("catetoAdjacente").value;

    var hipotenusa = Math.sqrt( Math.pow(catetoOposto, 2) + Math.pow(catetoAdjacente, 2));

    var inputHipotenusa = document.getElementById("hipotenusa");
    inputHipotenusa.value = hipotenusa;
}

//---Criando funcao para limpar os campos de preenchimento---//
function Limpar(){
    catetoOposto.value = ""
    catetoAdjacente.value = ""
    hipotenusa.value = ""
}
