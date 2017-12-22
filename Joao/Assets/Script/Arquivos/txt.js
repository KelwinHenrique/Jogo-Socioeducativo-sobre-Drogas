#pragma strict
import System.IO;
var linha: String;
var sr: StreamReader;
var perguntas : String[];
var nivel : String[];
var alternativa1 : String[];
var alternativa2 : String[];
var alternativa3 : String[];
var respostas : String[];
var i: int;
var qualPergunta: int;
var posicaoUltimaPerguntaFeita: int;
var ditanciaPerguntaAlvo: int;
var style: GUIStyle;
var pergunta: String;
var A: String;
var B: String;
var C: String;
var quantPerguntas: int;
var tempocorrente: float;
var tempoSegundosInicio: float;
var maxTempo: float;
var alturaCaixa: int;
var larguraCaixa: int;
var xCaixa: int;
var yCaixa: int;
var resposta: String;
var posicaoinicial: Vector3;
var pausaPergunta: int;
var portaA: GameObject;
var portaB: GameObject;
var portaC: GameObject;
var Objeto: GameObject;
var cronometro: float;
var aux: int;
var auxCronometro: String;
var alvo: Transform;
var tempoPergunta: int;
var nomeA: String;
var nomeB: String;
var nomeC: String;
var contlinha: int;
var assent: TextAsset;
var tudo: String;
var frases : String[];
var record: float;
public var otherClipCerto: AudioClip;
var audioCerto: AudioSource;
public var otherClipErrado: AudioClip;
var audioErrado: AudioSource;
public var otherClipMusica: AudioClip;
var audioMusica: AudioSource;
var certo_errado: String;
var tempo_aparece_resposta: float;
function Start () {
	audioCerto.volume = PlayerPrefs.GetFloat("Volume");
	audioErrado.volume = PlayerPrefs.GetFloat("Volume");
	audioMusica.volume = PlayerPrefs.GetFloat("Volume");
	tempo_aparece_resposta =0;
	certo_errado = "";
	auxCronometro = "";
	posicaoinicial = transform.position;
	pausaPergunta = 0;
	alturaCaixa = 1;
	larguraCaixa = 1;
	xCaixa = 100;
	yCaixa = 100;
	tempoSegundosInicio=0;
	maxTempo = 15;
	if(MenuOpcoes.dificuldade==0){
		tempoPergunta = 20;
	}else if(MenuOpcoes.dificuldade==1){
		tempoPergunta = 15;
	}else if(MenuOpcoes.dificuldade==2){
		tempoPergunta = 10;
	}
	cronometro = tempoPergunta;
	pergunta = "";
	A = "";
	B= "";
	C="";
	style.fontSize = Screen.width/60;
	posicaoUltimaPerguntaFeita = 300+ transform.position.x;
	Objeto = Instantiate(portaA, new Vector3(transform.position.x+posicaoUltimaPerguntaFeita+40, transform.position.y-1, 4), Quaternion.identity);
	Objeto = Instantiate(portaB, new Vector3(transform.position.x+posicaoUltimaPerguntaFeita+40, transform.position.y-1, 0), Quaternion.identity);
	Objeto = Instantiate(portaC, new Vector3(transform.position.x+posicaoUltimaPerguntaFeita+40, transform.position.y-1, 2), Quaternion.identity);
	perguntas= new String[50];
	nivel= new String[50];
	alternativa1= new String[50];
	alternativa2= new String[50];
	alternativa3= new String[50];
	respostas= new String[50];
	quantPerguntas = 11;
	i=0;
	contlinha=0;
	tudo = assent.text;
	frases = tudo.Split("\n"[0]);
	perguntas[0] = "Pergunta: Você está em uma festa com seu pai. Seu pai te oferece bebida alcoólica. O que você faria?";
	nivel[0] = "47";
	alternativa1[0] =  "Alternativa A: Aceito, porque ele é meu pai!";
	alternativa2[0] = "Alternativa B: Não aceito, porque crianças não podem beber!";
	alternativa3[0] = "Alternativa C: Aceito, porque gosto!";
	respostas[0] = "B";

	perguntas[1] = "Pergunta: Se o seu pai bate em sua mãe, o que você deveria fazer?";
	nivel[1] = "46";
	alternativa1[1] =  "Alternativa A: Tentar bater nele.";
	alternativa2[1] = "Alternativa B: Não fazer nada.";
	alternativa3[1] = "Alternativa C: Chamar a polícia(190)";
	respostas[1] = "C";


	perguntas[2] = "Pergunta: O que são drogas psicotrópicas?";
	nivel[2] = "45";
	alternativa1[2] =  "Alternativa A: Substancia química que age principalmente no sistema nervoso central.";
	alternativa2[2] = "Alternativa B: Substância orgânica que dá sono.";
	alternativa3[2] = "Alternativa C: Remédios utilizados para dor de cabeça.";
	respostas[2] = "A";


	perguntas[3] = "Pergunta: O que são drogas ilícitas?";
	nivel[3] = "44";
	alternativa1[3] =  "Alternativa A: Drogas permitidas por lei";
	alternativa2[3] = "Alternativa B: Substancia química proibida por lei";
	alternativa3[3] = "Alternativa C: Substancia distribuída pela governo";
	respostas[3] = "B";


	perguntas[10] = "Pergunta: Necessidade do consumo de repetidas doses da droga para sentir-se bem:";
	nivel[10] = "43";
	alternativa1[10] =  "Alternativa A: Dependência";
	alternativa2[10] = "Alternativa B: Abstinência";
	alternativa3[10] = "Alternativa C: Overdose";
	respostas[10] = "A";


	perguntas[4] = "Pergunta: Um rapaz bebeu “além da conta” e quer dirigir para casa. O que seria mais adequado fazer?";
	nivel[4] = "42";
	alternativa1[4] =  "Alternativa A: Deixar ele ir dirigindo";
	alternativa2[4] = "Alternativa B: Pegar carona com ele.";
	alternativa3[4] = "Alternativa C: Sugerir que pegue um táxi.";
	respostas[4] = "C";

	perguntas[5] = "Pergunta: O que é ser uma pessoa alcoólatra?";
	nivel[5] = "41";
	alternativa1[5] =  "Alternativa A: Ser uma pessoa que gosta de beber.";
	alternativa2[5] = "Alternativa B: Ser uma pessoa que bebe sempre e perde o controle.";
	alternativa3[5] = "Alternativa C: Ser uma pessoa que gosta de álcool.";
	respostas[5] = "B";


	perguntas[6] = "Pergunta: O que é CIRROSE ALCOOLICA?";
	nivel[6] = "40";
	alternativa1[6] =  "Alternativa A: Como se bebe álcool.";
	alternativa2[6] = "Alternativa B: Uma doença nos rins, que causa a morte.";
	alternativa3[6] = "Alternativa C: Uma doença no fígado causada pelo álcool.";
	respostas[6] = "C";

	perguntas[7] = "Pergunta: O que é CIUME ALCOOLICO?";
	nivel[7] = "39";
	alternativa1[7] =  "Alternativa A: Transtorno causado pelo álcool, que faz a pessoa pensar que seu parceiro eh infiel.";
	alternativa2[7] = "Alternativa B: Ter ciúmes da bebida.";
	alternativa3[7] = "Alternativa C: Um ciúme inocente do parceiro.";
	respostas[7] = "A";

	perguntas[8] = "Pergunta: O que é COMPULSAO?";
	nivel[8] = "38";
	alternativa1[8] =  "Alternativa A: Amar muito uma pessoa.";
	alternativa2[8] = "Alternativa B: Querer comprar muitas roupas.";
	alternativa3[8] = "Alternativa C: Necessidade poderosa de consumir uma substancia.";
	respostas[8] = "C";

	perguntas[9] = "Pergunta: O que acontece se você tiver uma convulsão devido ao uso de drogas ou álcool?";
	nivel[9] = "37";
	alternativa1[9] =  "Alternativa A: Pode haver danos cerebrais.";
	alternativa2[9] = "Alternativa B: Perda de consciência, rigidez muscular e movimentos involuntários.";
	alternativa3[9] = "Alternativa C: Todas alternativas.";
	respostas[9] = "C";
	audioMusica.clip = otherClipMusica;
	if(Menu1.som)
		audioMusica.Play();
}
function OnGUI(){
	style.normal.textColor = Color.white;
	style.fontSize = Screen.width/60;
	GUI.Box(Rect (Screen.width +  xCaixa,yCaixa,larguraCaixa,alturaCaixa),"");
	GUI.Label (Rect (Screen.width +Screen.width*-0.90,Screen.height*0.25,100,50),pergunta, style);
	style.fontSize = Screen.width/50;
	style.normal.textColor = Color.yellow;
	GUI.Label (Rect (Screen.width +Screen.width*-0.90,Screen.height*0.35, Screen.width/1.1,Screen.height/10),A, style);
	GUI.Label (Rect (Screen.width +Screen.width*-0.90,Screen.height*0.45, Screen.width/1.1,Screen.height/10),B, style);
	GUI.Label (Rect (Screen.width +Screen.width*-0.90,Screen.height*0.55, Screen.width/1.1,Screen.height/10),C, style);
	style.fontSize = Screen.width/25;
	GUI.Label (Rect (Screen.width/2,Screen.height*0.80, Screen.width/1.1,Screen.height/10),auxCronometro, style);
	GUI.Label (Rect (Screen.width/3,Screen.height*0.35, Screen.width/1.1,Screen.height/10),certo_errado, style);
	if(Time.realtimeSinceStartup-tempoSegundosInicio <tempoPergunta && tempoSegundosInicio!= 0){
		alvo.transform.GetComponent(AlvoController1).enabled = false;
		alvo.transform.GetComponent(AlvoController1Portas).enabled = true;
		transform.GetComponent(Pulo).enabled = false;
		transform.GetComponent(Pausa).enabled = false;
		aux = cronometro - (Time.realtimeSinceStartup-tempoSegundosInicio);
		auxCronometro = aux.ToString();
		Time.timeScale = 0;
		pausaPergunta = 1;
	}else{
		if(pausaPergunta==1){
			Time.timeScale = (transform.position.x/3000)+1;
			pausaPergunta=0;
		}
		if (alturaCaixa != 1){
			loadingTimer();
		}
	}
	if(Time.realtimeSinceStartup-tempo_aparece_resposta >2 && tempo_aparece_resposta!= 0){
		certo_errado = "";
	}


	if(posicaoUltimaPerguntaFeita<transform.position.x){
		ditanciaPerguntaAlvo = 300;
	    qualPergunta = Random.Range(0,quantPerguntas);
	    pergunta  = perguntas[qualPergunta];
	    A = alternativa1[qualPergunta];
		B= alternativa2[qualPergunta];
		C=alternativa3[qualPergunta];
		resposta = respostas[qualPergunta];
	    alturaCaixa = Screen.height/2;
		larguraCaixa = Screen.width/1.1;
		xCaixa = Screen.width*-0.95;
		yCaixa = Screen.height*0.25;
		tempoSegundosInicio = Time.realtimeSinceStartup;
        posicaoUltimaPerguntaFeita = transform.position.x+ ditanciaPerguntaAlvo;
        Objeto = Instantiate(portaA, new Vector3(transform.position.x+340, transform.position.y-1, 4), Quaternion.identity);
	    Objeto = Instantiate(portaB, new Vector3(transform.position.x+340, transform.position.y-1, 0), Quaternion.identity);
	    Objeto = Instantiate(portaC, new Vector3(transform.position.x+340, transform.position.y-1, 2), Quaternion.identity);
	}
}
function loadingTimer(){
	if (alturaCaixa != 1){
		pergunta= "";
		A = "";
		B= "";
		C="";
		alturaCaixa = 1;
		larguraCaixa = 1;
		xCaixa = 100;
		yCaixa = 100;
		auxCronometro = "";
	}
}



function OnTriggerEnter(hit : Collider) { 
	if(resposta.length >0){
		nomeA = String.Concat("porta"+resposta.Substring(0,1) + "(Clone)");
		if(hit.gameObject.name == nomeA || hit.gameObject.name == String.Concat("porta"+resposta.Substring(0,1))){
			alvo.transform.GetComponent(AlvoController1).enabled = true;
			alvo.transform.GetComponent(AlvoController1Portas).enabled = false;
			transform.GetComponent(Pulo).enabled = true;
			transform.GetComponent(Pausa).enabled = true;
			audioCerto.clip = otherClipCerto;
			if(Menu1.som)
				audioCerto.Play();
			Destroy(hit.gameObject);
			certo_errado = "RESPOSTA CORRETA";
			tempo_aparece_resposta = Time.realtimeSinceStartup;
			Placar.vida = Placar.vida +  10;
			if(Placar.vida>100)
				Placar.vida = 100;
		}else{
			if(hit.gameObject.name == "portaA(Clone)" || hit.gameObject.name== "portaA"){
				audioErrado.clip = otherClipErrado;
			if(Menu1.som)
				audioErrado.Play();
				certo_errado = "RESPOSTA INCORRETA";
				tempo_aparece_resposta = Time.realtimeSinceStartup;
				Placar.vida = Placar.vida- 50;
				Destroy(hit.gameObject);
				alvo.transform.GetComponent(AlvoController1).enabled = true;
				alvo.transform.GetComponent(AlvoController1Portas).enabled = false;
				transform.GetComponent(Pulo).enabled = true;
				transform.GetComponent(Pausa).enabled = true;
			}else if(hit.gameObject.name == "portaB(Clone)" || hit.gameObject.name == "portaB"){
				audioErrado.clip = otherClipErrado;
				if(Menu1.som)
					audioErrado.Play();
				certo_errado = "RESPOSTA INCORRETA";
				tempo_aparece_resposta = Time.realtimeSinceStartup;
				Placar.vida = Placar.vida- 50;
				Destroy(hit.gameObject);
				alvo.transform.GetComponent(AlvoController1).enabled = true;
				alvo.transform.GetComponent(AlvoController1Portas).enabled = false;
				transform.GetComponent(Pulo).enabled = true;
				transform.GetComponent(Pausa).enabled = true;
			}else if(hit.gameObject.name == "portaC(Clone)" || hit.gameObject.name == "portaC"){
				audioErrado.clip = otherClipErrado;
				if(Menu1.som)
					audioErrado.Play();
				certo_errado = "RESPOSTA INCORRETA";
				tempo_aparece_resposta = Time.realtimeSinceStartup;
				Placar.vida = Placar.vida- 50;
				Destroy(hit.gameObject);
				alvo.transform.GetComponent(AlvoController1).enabled = true;
				alvo.transform.GetComponent(AlvoController1Portas).enabled = false;
				transform.GetComponent(Pulo).enabled = true;
				transform.GetComponent(Pausa).enabled = true;
			}

		}
	}
}
