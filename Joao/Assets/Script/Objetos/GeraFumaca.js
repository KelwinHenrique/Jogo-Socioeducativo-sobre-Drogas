#pragma strict
var Objeto: GameObject;
var fumaca: GameObject;
var posicaoUltimaFumacaCriada: int;
function Start () {
	posicaoUltimaFumacaCriada = transform.position.x+50;
}

function Update () {
	if(transform.position.x>posicaoUltimaFumacaCriada){
		Objeto = Instantiate(fumaca, transform.position+transform.up*0.90+transform.forward*(posicaoUltimaFumacaCriada+50), Quaternion.identity);
		posicaoUltimaFumacaCriada = transform.position.x+(400);
	}
}