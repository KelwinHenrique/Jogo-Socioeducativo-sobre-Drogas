#pragma strict
var alturaCaixa: int;
var larguraCaixa: int;
var xCaixa: int;
var yCaixa: int;
var alturaBotao: int;
var larguraBotao: int;
var xBotao: int;
var yBotao: int;
static var morreu: boolean;
var style: GUIStyle;
var texto1: String;
var texto2: String;
var texto3: String;
function Start () {
	alturaCaixa = 1;
	larguraCaixa = 1;
	xCaixa = 100;
	yCaixa = 100;
	alturaBotao = 1;
	larguraBotao = 1;
	xBotao = 100;
	yBotao = 100;
	morreu=false;
	texto1 = "";
	texto2 = "";
	texto3 = "";
}

function Update () {
	if(morreu){
		alturaCaixa = Screen.height/2;
		larguraCaixa = Screen.width/2.5;
		xCaixa = Screen.width*-0.7;
		yCaixa = Screen.height*0.15;
		alturaBotao = 70;
		larguraBotao = 200;
		texto1 = "Reiniciar";
		texto2 = "Voltar Menu";
		texto3 = "Vida extra";
		Time.timeScale = 0;
		transform.GetComponent(Pulo).enabled = false;
		transform.GetComponent(PlayerAnimation).enabled = false;
		transform.GetComponent(PlayerController).enabled = false;
		transform.GetComponent(Pausa).enabled = false;
	}else{
		alturaCaixa = 1;
		larguraCaixa = 1;
		xCaixa = 100;
		yCaixa = 100;
		alturaBotao = 1;
		larguraBotao = 1;
		xBotao = 100;
		yBotao = 100;
		texto1 = "";
		texto2 = "";
		texto3 = "";
	}
}
function OnGUI(){
	GUI.Box(Rect (Screen.width +  xCaixa,yCaixa,larguraCaixa,alturaCaixa),"");
	style.normal.textColor = Color.white;
 	style.fontSize = 40;
	if(GUI.Button(Rect(Screen.width/2.3,Screen.height*0.5/3,larguraBotao,alturaBotao),texto1,style)){
		Application.LoadLevel("cena");
	}
	if(GUI.Button(Rect(Screen.width/2.3,Screen.height*1/3,larguraBotao,alturaBotao),texto2,style)){
		Application.LoadLevel("menu");
	}
	if(GUI.Button(Rect(Screen.width/2.3,Screen.height*1.5/3,larguraBotao,alturaBotao),texto3,style)){
		//Application.LoadLevel("Placar");
	}


}
