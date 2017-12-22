#pragma strict
var Boneco: Transform;
function Start () {
    Boneco = GameObject.Find("Aj").transform;
}

function Update () {
    if (Vector3.Distance(transform.position,Boneco.position)>400)
    {
        Destroy(gameObject);
    }
}