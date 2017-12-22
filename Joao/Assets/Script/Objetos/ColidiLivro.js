#pragma strict
var alturaCaixa: int;
var larguraCaixa: int;
var xCaixa: int;
var yCaixa: int;
var tempocorrente: float;
var tempoSegundosInicio: float;
var maxTempo: float;
var style: GUIStyle;
var textobotao: String;
var objetoColidido:Collider;
var imagem: Texture;
var respostas : String[];
var frases : String[];
var info : String;
var a : String;
var i:int;
var j:int;
var qualinfo: int;
var alt : int;
var larg:int;

function Start () {
	alturaCaixa = 1;
	larguraCaixa = 1;
	xCaixa = Screen.height*9;
	yCaixa = Screen.height*9;
	alt=1;
	larg=1;
	textobotao="";
	respostas= new String[20];
	a = "31% das mortes de estrelas do rock\nestão relacionadas ao uso de drogas e álcool.\nA posse e o tráfico de drogas são passíveis\nde pena de morte em alguns paises.\nA palavra droga originou-se do holandês\n“droog”,que significa “seca”.\nVocê sabia que o primeiro carregamento de maconha\nchegou ao Brasil em caravelas portuguesas no ano de 1549?\nCerca de 80% da cocaína produzida no mundo vêm da Colômbia.\nOs outros grandes produtores são o Peru (30%) e a Bolívia (15%).\nO crack é uma droga produzida a partir da mistura\nde cocaína com bicarbonato de sódio.\nA abstinência da heroína é uma das mais perigosas. Na falta dela,\no coração dispara, sujeitando o dependente a um ataque cardíaco.\nUma informação interessante:\ncães que farejam drogas não se tornam viciados.\nEmbora desconhecida no Brasil, o khat (ou qat) é\nmuito consumido na África Oriental e em alguns países árabes.\nNo Japão, se um convidado sair alcoolizado de uma reunião e bater o carro,\no dono da festa será autuado como co-responsável pelo acidente.\nAs drogas podem ser classificadas em três tipos:\ndepressoras, alucinógenas e estimulantes.\nAs drogas lícitas são aquelas legalizadas, produzidas\ne comercializadas livremente e que são aceitas pela sociedade.\nCirrose alcoolica é uma doença no\nfigado causada pelo alcool.\nDrogas são substâncias capazes de\nmodificar a função dos organismos vivos\nDrogas depressoras diminuem\na atividade mental.\nDrogas pertubadoras são as que provocam\ndisturbios no funcionamento do cerebro.\nFissura é o desejo incontrolavel\nde consumir substancias ilicitas.\nQuando consumida em grande quantidade,\na maconha pode gerar alucinação, pânico e paranoia.\n";

	frases = a.Split("\n"[0]);
	i=0;
	j=0;
	while(i<18){		
		respostas[i]= frases[j];
		j++;
		respostas[i] = String.Concat(respostas[i] +"\n"+ frases[j]);
		i++;
		j++;
	}



}

function Update () {
	
}
function OnGUI(){
	style.fontSize = Screen.width/40;
	GUI.Box(Rect (Screen.width +  xCaixa,yCaixa,larguraCaixa,alturaCaixa),"");
	GUI.Label (Rect (Screen.width +Screen.width*-0.64,Screen.height*0.35, Screen.width/1.1,Screen.height/10),info, style);
	GUI.Box(Rect (Screen.width +  xCaixa,yCaixa,larguraCaixa/3,alturaCaixa),imagem);
	style.normal.textColor = Color.white;
	style.fontSize = Screen.width/60;
	if(alt != 1)
	if(GUI.Button(Rect(Screen.width/2.7,Screen.height*0.75, larg/4,alt),textobotao)){
		
		transform.GetComponent(Pausa).enabled = true;
		textobotao="";
		alturaCaixa = 0.1;
		larguraCaixa = 0.1;
		xCaixa = Screen.height*9;
		yCaixa = Screen.height*9;
		info="";
		alt=1;
		larg=1;
		Destroy(objetoColidido.gameObject);
	}
}


function OnTriggerEnter(hit : Collider) { 
	print(hit.gameObject.name);
	if(hit.gameObject.name == "Livro(Clone)"){
		geraInformacao();
		objetoColidido = hit;
	}
}

function geraInformacao(){
	alturaCaixa = Screen.height/2;
	larguraCaixa = Screen.width/1.1;
	xCaixa = Screen.width*-0.95;
	yCaixa = Screen.height*0.25;
	transform.GetComponent(Pausa).enabled = false;
	qualinfo = Random.Range(0,18);
	info = respostas[qualinfo];
	textobotao ="Continuar Jogando";
	Time.timeScale = 0;
	alt = Screen.height/10;
	larg = Screen.width/1.1;


}
