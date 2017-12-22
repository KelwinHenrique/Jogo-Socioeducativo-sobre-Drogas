#pragma strict
var gravidade = -500;
var Alvo : Transform;

static var AlvoPZ = 0.0;

function Start () {
    transform.position.y = 0;
}

function Update () {
transform.LookAt(Alvo);
AlvoPZ = transform.position.x;


Physics.gravity = Vector3(0,gravidade,0);
}