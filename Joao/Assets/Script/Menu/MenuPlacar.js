#pragma strict
var style: GUIStyle;
var recordd: int;
var recordm: int;
function Start () {
	recordd = PlayerPrefs.GetInt("Record");
	recordm = PlayerPrefs.GetInt("Moedas");
}
function Update () {	
}
function OnGUI(){
 	style.normal.textColor = Color.white;
 	style.fontSize = 40;
	if(GUI.Button(Rect(Screen.width/5,Screen.height*0.5/3,200,70),"Record Distância: " + recordd + " metros",style)){
		
	}
	if(GUI.Button(Rect(Screen.width/5,Screen.height*1/3,200,70),"João Feliz: "+recordm,style)){

	}

	if(GUI.Button(Rect(Screen.width/5,Screen.height*2/3,200,70),"Voltar",style)){
		Application.LoadLevel("menu");
	}

}