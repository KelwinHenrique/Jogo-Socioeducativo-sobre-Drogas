using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityStandardAssets.ImageEffects;
[RequireComponent(typeof(Blur))]//MotionBlur Requerido
public class AtivarBlur : MonoBehaviour {
	public Blur mb;
	public bool ativarBlur;
	// Use this for initialization
	void Start () {
		mb = GetComponent<Blur> ();
		ativarBlur = false;
	}
	
	// Update is called once per frame
	void Update () {
		if (ativarBlur) {
			mb.enabled = true;
		} else {
			mb.enabled = false;
		}
	}
}
