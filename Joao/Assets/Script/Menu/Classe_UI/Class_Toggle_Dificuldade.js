#pragma strict
var toggle_facil: UI.Toggle;
var toggle_medio: UI.Toggle;
var toggle_dificil: UI.Toggle;
var Slider_Volume: UI.Slider;
var volume: float;
function Start () {
	
}

function Update () {
	if(toggle_facil == true){
		MenuOpcoes.dificuldade =0;
	}else if(toggle_facil == true){
		MenuOpcoes.dificuldade =1;
	}else{
		MenuOpcoes.dificuldade =2;
	}

	volume = Slider_Volume.value;
	PlayerPrefs.SetFloat("Volume", volume);
	if(volume==0){
		PlayerPrefs.SetInt("Som",1);
	}

}
function aplicar(){
	
}