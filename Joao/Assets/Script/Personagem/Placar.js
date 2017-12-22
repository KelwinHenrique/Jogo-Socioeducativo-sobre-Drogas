#pragma strict
var posicaoinicial: Vector3;
static var distancia: float;
var style: GUIStyle;
var record: float;
public static var vida: int;
function Start () {
    posicaoinicial = transform.position;
    style.fontSize = Screen.width/50;
    record = PlayerPrefs.GetInt("Record");
    vida=100;
}
function Update () {

}
function OnGUI(){
    distancia = Vector3.Distance(transform.position,posicaoinicial);
    style.normal.textColor = Color.white;
    GUI.Label (Rect (Screen.width - Screen.width/4,Screen.height*0.03,100,50), "Distância Percorrida: "+Mathf.Floor(distancia), style);
    if(parseInt(distancia)>record){
    	PlayerPrefs.SetInt("Record",parseInt(distancia));
    	record = PlayerPrefs.GetInt("Record");
    }
    style.normal.textColor = Color.red;
    GUI.Label (Rect (Screen.width - Screen.width/4,Screen.height*0.13,100,50), "Record: "+Mathf.Floor(record), style);
    if(vida<=0) AcabaVida.morreu=true;
}


