#pragma strict
var PortaA: Transform;
var PortaB: Transform;
var PortaC: Transform;

function Start () {
	PortaA = GameObject.Find("portaA(Clone)").transform;
	PortaB = GameObject.Find("portaB(Clone)").transform;
	PortaC = GameObject.Find("portaC(Clone)").transform;
}

function Update () {

	if ((Vector3.Distance(transform.position,PortaA.position)<3) || (Vector3.Distance(transform.position,PortaB.position)<3) || (Vector3.Distance(transform.position,PortaC.position)<3))
    {
        Destroy(gameObject);
    }
}
