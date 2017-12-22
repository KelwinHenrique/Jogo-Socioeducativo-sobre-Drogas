#pragma strict
var style: GUIStyle;
function Start () {

}

function Update () {
	
}

function OnGUI(){

	

 	style.normal.textColor = Color.white;
 	style.fontSize = 40;



	
	if(GUI.Button(Rect(Screen.width/1.5,Screen.height*2.0/3,200,70),"Voltar",style)){
		Application.LoadLevel("Menu");
	}

}