	#pragma strict
	var controolePause: boolean;
	var objeto: Transform;

	function Start () {
	controolePause = true;
	}

	function Update () {

		if(Input.GetKeyDown(KeyCode.Escape)){
			if(controolePause){
				Time.timeScale = 0;
				transform.GetComponent(Pulo).enabled = false;
				transform.GetComponent(PlayerAnimation).enabled = false;
				transform.GetComponent(PlayerController).enabled = false;

				objeto.transform.GetComponent(AlvoController1).enabled = false;

				controolePause = false;
			}else{
				Time.timeScale = (transform.position.x/3000)+1;
				transform.GetComponent(Pulo).enabled = true;
				transform.GetComponent(PlayerAnimation).enabled = true;
				transform.GetComponent(PlayerController).enabled = true;

				objeto.transform.GetComponent(AlvoController1).enabled = true;

				controolePause=true;
			}
		}

		if (controolePause == true){
			transform.GetComponent(PlayerController).enabled = true;
			Time.timeScale = (transform.position.x/3000)+1;
		}




	}

	function OnGUI(){
		if(controolePause == false){
			if(GUI.Button(Rect((Screen.width/2.3),(Screen.height/7),200,30),"Continuar")){
				Time.timeScale = (transform.position.x/3000)+1;
				controolePause = true;
			}
			if(GUI.Button(Rect((Screen.width/2.3),(Screen.height/7)+40,200,30),"Reiniciar")){
				Application.LoadLevel('cena');
			}
			if(GUI.Button(Rect((Screen.width/2.3),(Screen.height/7)+80,200,30),"Voltar ao Menu")){
			Application.LoadLevel('menu');
			}
		}
	}