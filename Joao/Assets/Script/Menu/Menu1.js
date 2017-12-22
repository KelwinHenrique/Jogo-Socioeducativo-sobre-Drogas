#pragma strict
var style: GUIStyle;
var otherClip: AudioClip;
var audio123: AudioSource;
static var som: boolean;
var imagemSomLigado: Texture;
var imagemSomDesligado: Texture;
var somLD: int;
function Start () {
	somLD = PlayerPrefs.GetInt("Som");
	audio123.clip = otherClip;
	if( somLD == 0){
		som = true;
		audio123.Play();
	}
	else{
		som=false;
	 	audio123.Stop();
	}
	if( PlayerPrefs.GetFloat("Volume") != 0){
		audio123.volume = PlayerPrefs.GetFloat("Volume");

	}else{
		audio123.volume = 0.5;
		PlayerPrefs.SetFloat("Volume",0.5);
	}
}

function Update () {
	
	
}

function OnGUI(){

	

 	style.normal.textColor = Color.white;
 	style.fontSize = 40;
 	if(somLD==0){
 		if(GUI.Button(Rect (Screen.width/1.2,Screen.height*2.6/3,Screen.width/10,Screen.height/10),imagemSomLigado)){
			somLD=1;
			audio123.clip = otherClip;
			audio123.Stop();
			som=false;
			PlayerPrefs.SetInt("Som",somLD);
		}
	}
	else{
		if(GUI.Button(Rect (Screen.width/1.2,Screen.height*2.6/3,Screen.width/10,Screen.height/10),imagemSomDesligado)){
			somLD=0;
			audio123.clip = otherClip;
			audio123.Play();
			som=true;
			PlayerPrefs.SetInt("Som",somLD);
		}
	}


	if(GUI.Button(Rect(Screen.width/2.3,Screen.height*0.5/3,200,70),"Jogar",style)){
		Application.LoadLevel("cena");
	}
	if(GUI.Button(Rect(Screen.width/2.3,Screen.height*1/3,200,70),"Opções",style)){
		Application.LoadLevel("Opcoes");
	}
	if(GUI.Button(Rect(Screen.width/2.3,Screen.height*1.5/3,200,70),"Placar",style)){
		Application.LoadLevel("Placar");
	}

	//if(GUI.Button(Rect(Screen.width/2.3,Screen.height*2.0/3,200,70),"Como jogar?",style)){
	//	Application.LoadLevel("ComoJogar");
	//}
	//if(GUI.Button(Rect(Screen.width/2.3,Screen.height*2.5/3,200,70),"Sobre",style)){
	//	Application.LoadLevel("Sobre");
	//}

}