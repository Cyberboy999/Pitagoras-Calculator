//---Criando funcao para fazer os cauculos do teorema de pitagoras---//
function Calcula() {
    var Oposto = document.getElementById("Oposto").value;
    var Adjacente = document.getElementById("Adjacente").value;
    var Hipotenusa = document.getElementById("Hipotenusa").value;

//---Verificaçao de valores colocados---//

    if (Oposto && Adjacente) {
        var Hipotenusa = Math.sqrt(Math.pow(Oposto, 2) + Math.pow(Adjacente, 2));
      } 
    else if (Adjacente && Hipotenusa) {
        var Oposto = Math.sqrt(Math.pow(Hipotenusa, 2) - Math.pow(Adjacente, 2));
      } 
    else if (Oposto && Hipotenusa) {
        var Adjacente = Math.sqrt(Math.pow(Hipotenusa, 2) - Math.pow(Oposto, 2));
      }

//---Expondo resultados na web---//

    var inputHipotenusa = document.getElementById("Hipotenusa");
    inputHipotenusa.value = Hipotenusa;
    var inputAdjacente = document.getElementById("Adjacente");
    inputAdjacente.value = Adjacente;
    var inputOposto = document.getElementById("Oposto");
    inputOposto.value = Oposto;
}

//---Criando funcao para limpar os campos de preenchimento---//
function Limpar(){
    Oposto.value = ""
    Adjacente.value = ""
    Hipotenusa.value = ""
}
