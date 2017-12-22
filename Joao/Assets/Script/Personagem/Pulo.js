
#pragma strict
var TPulo: float;
var TMaxPulo: float;
var PodePular: boolean;
var AceleraPulo: float;
var rb: Rigidbody;
var animator: Animator;
static var Pular: int = Animator.StringToHash("Pular");

var otherClip: AudioClip;
var audio123: AudioSource;

function Start () {
	animator = GetComponent(Animator);
	AceleraPulo=450;
	TMaxPulo = 0.30;
	TPulo = 0;
	PodePular = false;
}
function Update () {
	if(Physics.Raycast(transform.position,-transform.up,0.5)  ){
		
		animator.SetFloat("Correr", 1.0);
		if(Input.GetKeyDown("up")){
			audio123.clip = otherClip;
			if(Menu1.som)
				audio123.Play();
			
			animator.SetTrigger(Pular);
			PodePular = true;
			TPulo = 0;
		}
	}else{

		
		if(!PodePular){

			
			rb.AddForce(-transform.up*(AceleraPulo/4));
			rb.AddForce(transform.forward*(AceleraPulo/4));
		}
	}
	if(Input.GetKeyUp("up") || TPulo> TMaxPulo){
		PodePular = false;
	}
	if(PodePular){
		rb.AddForce(transform.up*AceleraPulo);
		TPulo+= Time.deltaTime;
	}

	//if(PlayerAnimation.efeitoFumaca == true){
	//	print("asdf");
	//	rb.AddForce(-transform.up*(300));
	//}
}

//if(PlayerAnimation.efeitoFumaca == true){
			//rb.AddForce(-transform.up*(AceleraPulo*100));
