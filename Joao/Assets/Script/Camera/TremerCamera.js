#pragma strict
 
var blur:AtivarBlur;
var aux: Transform;

function Start () {
	//blur = GetComponent("UnityStandardAssets.ImageEffects.Blur");
	blur = aux.GetComponent("AtivarBlur");
}

function Update () {
	if (PlayerAnimation.efeitoFumaca == true)
    {
    	
    	blur.ativarBlur = true;
	}else{
		blur.ativarBlur = false;
	}

}
