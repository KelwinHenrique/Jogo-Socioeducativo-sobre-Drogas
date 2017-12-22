#pragma strict
var Aleatorio: int;
var Objeto: GameObject;

var onibus: GameObject;
var caminhao: GameObject;
var carro1: GameObject;
var carro2: GameObject;
var carro3: GameObject;

var posicaoUltimoVeiculoCriado: int;
var ditanciaVeiculoAlvo: int;



var pista1: float;
var pista2: float;
var pista3: float;
var pista4: float;
var pista5: float;
pista1 = 8.584;
pista2 = 4.668;
pista3 = 0.752;
pista4 = -3.164;
pista5 = -7.08;
function Start () {
	posicaoUltimoVeiculoCriado=0;
}

function Update () {
	if(posicaoUltimoVeiculoCriado<transform.position.x){
        ditanciaVeiculoAlvo = Random.Range(200,1000);
        posicaoUltimoVeiculoCriado = transform.position.x+ditanciaVeiculoAlvo;
        //Objeto = Instantiate(onibus, transform.position+transform.up*3.2+transform.forward*ditanciaVeiculoAlvo, Quaternion.identity);
        Objeto = Instantiate(onibus, new Vector3(transform.position.x+ditanciaVeiculoAlvo, transform.position.y+2.5, pista1), Quaternion.identity);
    }
}
