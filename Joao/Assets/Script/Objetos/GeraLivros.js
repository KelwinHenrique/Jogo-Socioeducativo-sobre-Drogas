#pragma strict
var Aleatorio: int;
var Objeto: GameObject;
var livro: GameObject;
var posicaoUltimaLivroCriado: int;
var ditanciaLivroAlvo: int;

function Start () {
	posicaoUltimaLivroCriado=0;


}

function Update () {
	 
	if(posicaoUltimaLivroCriado<transform.position.x){
        ditanciaLivroAlvo = Random.Range(400,600);
        posicaoUltimaLivroCriado = transform.position.x+ditanciaLivroAlvo;
        Objeto = Instantiate(livro, transform.position+transform.up*1+transform.forward*ditanciaLivroAlvo, Quaternion.identity);

    }
}

