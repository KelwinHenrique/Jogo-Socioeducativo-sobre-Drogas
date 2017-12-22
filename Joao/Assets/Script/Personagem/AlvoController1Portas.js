#pragma strict

var pista1: float;
var pista2: float;
var pista3: float;
var pista4: float;
var pista5: float;



pista1 = 8.584;
pista2 = 4.668;
pista3 = 0.752;
pista4 = -3.164;
pista5 = -7.08;

function Start () {

}

function Update () {
    transform.position.x = PlayerController.AlvoPZ + 10;
    if((transform.position.z == pista2) || (transform.position.z == pista4)){
    	transform.position.z = pista3;
    }

    if(Input.GetKeyDown("right") && PlayerAnimation.efeitoFumaca != true){
        if (transform.position.z == pista1){
            transform.position.z = pista3;
        }else if (transform.position.z == pista3){
            transform.position.z = pista5;
        }  
    }

    if(Input.GetKeyDown("left") && PlayerAnimation.efeitoFumaca != true){
        if (transform.position.z == pista5){
            transform.position.z = pista3;
        }else if (transform.position.z == pista3){
            transform.position.z = pista1;
        }
    }
}