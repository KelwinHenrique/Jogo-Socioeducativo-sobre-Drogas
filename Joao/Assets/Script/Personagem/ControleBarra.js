#pragma strict
var posX: float;
var posY: float;
var alt: float;
var lar: float;
var textura: GUISkin;

var qntVida: float;
var maxQntVida: float;
function Start () {
	qntVida=Placar.vida;
	maxQntVida=100;
	posX = Screen.width*0.05;
	posY = Screen.height*0.9;
	alt = Screen.height/20;


}

function Update () {
	qntVida=Placar.vida;
	lar = Screen.width/1.1 * (qntVida /maxQntVida) ;
}

function OnGUI () {
	GUI.skin = textura;
	GUI.Button(Rect(posX, posY, lar,alt)," "+qntVida);

}