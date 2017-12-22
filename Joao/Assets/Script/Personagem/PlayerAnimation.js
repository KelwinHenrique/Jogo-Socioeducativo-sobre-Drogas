#pragma strict
var EscorregarStart = false;

var animator: Animator;
static var virarD: int = Animator.StringToHash("VirarD");
static var virarE: int = Animator.StringToHash("VirarE");
static var Escorregar: int = Animator.StringToHash("Escorregar");
public static var efeitoFumaca:boolean;
var duracaoEfeitoFumaca:float;
var tempoSegundosInicio:float;
function Start () {
	animator = GetComponent(Animator);
	efeitoFumaca=false;
	duracaoEfeitoFumaca=0;
	tempoSegundosInicio = -100;
}
function Update () {
	if(Input.GetKeyDown("left")){
		
		animator.SetTrigger(virarE);
	}
	if(Input.GetKeyDown("right")){
		
		animator.SetTrigger(virarD);
	}
	if(Input.GetKeyDown("down")){
		EscorregarStart=true;
		animator.SetTrigger(Escorregar);
	}
	if(Time.realtimeSinceStartup-tempoSegundosInicio >=15){
		//Main_Camera.transform.GetComponente(Blur).enable=false;
		efeitoFumaca=false;
	}

}




function OnTriggerEnter(hit : Collider) { 
	
	if(hit.CompareTag("ObstaculoDeslize")){
		if(EscorregarStart){
			animator.SetFloat("Escorregando",1.1);

			Placar.vida = Placar.vida +  5;
			if(Placar.vida>100)Placar.vida = 100;
		}else{
			print("burro");
			efeitoFumaca=true;
			//Main_Camera.transform.GetComponente(Blur.cs).enable=true;
			tempoSegundosInicio=Time.realtimeSinceStartup;
			Placar.vida = Placar.vida- 10;
		}
	}
		
}


function OnTriggerExit(hit : Collider) { 
	
	if(hit.CompareTag("ObstaculoDeslize")){
		
			animator.SetFloat("Escorregando",0.0);
		
	}
		
}