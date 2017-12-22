#pragma strict
var recordd: int;
var recordm: int;
var cont : int;
var style: GUIStyle;
var feliz: GameObject;
var triste: GameObject;
var tipoMoedaFeliz: String;
var tipoMoedaTriste: String;
var sw : StreamWriter;
var tamx:float;
var tamy:float;
var posx:float;
var posy:float;
var otherClip: AudioClip;
var audio123: AudioSource;
var otherClip1: AudioClip;
var audio1231: AudioSource;

function Start () {
	cont=0;
	style.fontSize = Screen.width/50;
	recordm = PlayerPrefs.GetInt("Moedas");
	audio123.volume = PlayerPrefs.GetFloat("Volume");
	audio1231.volume = PlayerPrefs.GetFloat("Volume");
}
function Update () {
		PlayerPrefs.SetInt("Moedas",parseInt(recordm));
}
function OnTriggerEnter(hit : Collider) { 
	tipoMoedaFeliz = String.Concat(feliz.name + "(Clone)");
	tipoMoedaTriste = String.Concat(triste.name + "(Clone)");
	if(hit.gameObject.name == tipoMoedaFeliz){
		audio123.clip = otherClip;
		if(Menu1.som)
			audio123.Play();
		Destroy(hit.gameObject);
		cont++;
		PlayerPrefs.SetInt("Moedas",recordm+1);
		recordm = PlayerPrefs.GetInt("Moedas");
		Placar.vida++;
		if(Placar.vida>100)
			Placar.vida = 100;
	}else if(hit.gameObject.name == tipoMoedaTriste){
		audio1231.clip = otherClip1;
		if(Menu1.som)
			audio1231.Play();
		Destroy(hit.gameObject);
		cont--;
		PlayerPrefs.SetInt("Moedas",recordm-1);
		recordm = PlayerPrefs.GetInt("Moedas");
		Placar.vida--;
		if(Placar.vida<0)Placar.vida=0;
	}
}
function OnGUI(){
    style.normal.textColor = Color.yellow;
    GUI.Label (Rect(Screen.width - Screen.width/4,Screen.height*0.08,100,50), "João Feliz: "+ recordm, style);
}
