#pragma strict

var VetorPlataformas: GameObject[];
var PlataformaAtual: GameObject;


var QntFilhos: int;
var i: int;
var PosicaoFim: Vector3;
var indicePlataforma: int;

function Start () {
    PlataformaAtual = Instantiate(PlataformaAtual, transform.position+transform.up*-1+transform.forward*-5, Quaternion.identity);


}

function Update () {
    if(Vector3.Distance(PlataformaAtual.transform.position,transform.position)<100)
    {
        QntFilhos = PlataformaAtual.transform.GetChildCount();
        for(i=0;i<QntFilhos;i++){
            if (PlataformaAtual.transform.GetChild(i).name == "Fim"){
                PosicaoFim = PlataformaAtual.transform.GetChild(i).position;
                break;
            }
        }
        indicePlataforma = 0;

        PlataformaAtual = Instantiate(VetorPlataformas[indicePlataforma],PosicaoFim,Quaternion.identity);
    }
}