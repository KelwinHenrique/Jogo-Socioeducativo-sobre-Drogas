#pragma strict
var nivel: int;
var otherClip: AudioClip;
var audio123: AudioSource;
var style: GUIStyle;
static var dificuldade:int;
var somLD: int;
function Start () {
	somLD = PlayerPrefs.GetInt("Som");
	audio123.clip = otherClip;
	if( somLD == 0){
		audio123.Play();
	}
	else{
	 	audio123.Stop();
	}
}

function Update () {
	audio123.volume = PlayerPrefs.GetFloat("Volume");
}
function OnGUI(){
    style.normal.textColor = Color.white;
 	style.fontSize = 40;
	
	//GUI.Button(Rect(Screen.width/15,Screen.height*0.5/3,200,70),"Nível",style);
	//if(GUI.Button(Rect(Screen.width/15,Screen.height*1.0/3,200,70),"Fácil",style)){
	//	dificuldade=0;
	//}
	//if(GUI.Button(Rect(Screen.width/15,Screen.height*1.3/3,200,70),"Médio",style)){
	//	dificuldade=1;
	//}
	//if(GUI.Button(Rect(Screen.width/15,Screen.height*1.6/3,200,70),"Dificil",style)){
	//	dificuldade=2;
	//}






	if(GUI.Button(Rect(Screen.width/1.3,Screen.height*2.6/3,200,70),"Voltar",style)){
		Application.LoadLevel("menu");
	}
}